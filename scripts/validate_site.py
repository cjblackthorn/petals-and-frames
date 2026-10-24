#!/usr/bin/env python3
"""Dependency-free link, asset and disclosure checks for the Petal & Frame static site."""

from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import unquote, urlsplit
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.images = []
        self.refs = []
        self.h1 = 0
        self.mains = 0
        self.lang = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "main":
            self.mains += 1
        if tag == "h1":
            self.h1 += 1
        if a.get("id"):
            self.ids.append(a["id"])
        if tag == "img":
            self.images.append(a)
        for name in ("href", "src"):
            if a.get(name):
                self.refs.append(a[name])


def main():
    issues = []
    pages = sorted(ROOT.glob("*.html"))
    if not pages:
        issues.append("No HTML pages found")

    parsed = {}
    for file in pages:
        page = Page()
        page.feed(file.read_text(encoding="utf-8"))
        parsed[file.resolve()] = page
        if page.lang != "en":
            issues.append(f"{file.name}: missing lang=en")
        if page.mains != 1:
            issues.append(f"{file.name}: expected one main element, found {page.mains}")
        if page.h1 != 1:
            issues.append(f"{file.name}: expected one h1, found {page.h1}")
        markup = file.read_text(encoding="utf-8")
        if not re.search(r'<a\\s+class="skip-link"\\s+href="#main-content">', markup):
            issues.append(f"{file.name}: missing skip-to-content link")
        if not re.search(r'<main\\b[^>]*id="main-content"[^>]*tabindex="-1"', markup):
            issues.append(f"{file.name}: missing focusable main landmark")

        dup = [k for k, n in Counter(page.ids).items() if n > 1]
        if dup:
            issues.append(f"{file.name}: duplicate IDs {dup}")
        for img in page.images:
            if "alt" not in img:
                issues.append(f"{file.name}: image without alt ({img.get('src')})")

    for file, page in parsed.items():
        for ref in page.refs:
            p = urlsplit(ref)
            if p.scheme or p.netloc or ref.startswith("//"):
                continue
            target = (file.parent / unquote(p.path)).resolve() if p.path else file
            if p.path and (not target.is_relative_to(ROOT.resolve()) or not target.is_file()):
                issues.append(f"{file.name}: missing local resource {ref}")
            if p.fragment and target in parsed and p.fragment not in parsed[target].ids:
                issues.append(f"{file.name}: broken in-page anchor {ref}")

    review = (ROOT / "testimonials.html").read_text(encoding="utf-8")
    for sample in ("Future Review", "Placeholder for a future", "The session felt calm, thoughtful, and safe", "The images felt like memory, not performance", "Nothing felt rushed or forced"):
        if sample in review:
            issues.append(f"testimonials.html: unverified sample quote or placeholder remains ({sample})")

    if not (ROOT / "CNAME").read_text(encoding="utf-8").strip():
        issues.append("CNAME missing or empty")

    # Every published HTML page must have a matching canonical and sitemap entry.
    site_root = "https://petalsnframes.art/"
    expected_urls = []
    for file in pages:
        url = site_root + ("" if file.name == "index.html" else file.name)
        expected_urls.append(url)
        if f'<link rel="canonical" href="{url}">' not in file.read_text(encoding="utf-8"):
            issues.append(f"{file.name}: incorrect or missing canonical URL")
    robots = (ROOT / "robots.txt").read_text(encoding="utf-8")
    if "Sitemap: https://petalsnframes.art/sitemap.xml" not in robots:
        issues.append("robots.txt missing sitemap reference")
    try:
        root = ElementTree.parse(ROOT / "sitemap.xml").getroot()
        ns = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
        published = [item.text for item in root.findall(f"{ns}url/{ns}loc")]
        if set(published) != set(expected_urls) or len(published) != len(expected_urls):
            issues.append("Sitemap URLs differ from root HTML pages")
    except (OSError, ElementTree.ParseError) as err:
        issues.append(f"sitemap.xml is invalid: {err}")

    if issues:
        print("Static site checks FAILED:")
        for message in issues:
            print(" - " + message)
        raise SystemExit(1)
    print(f"Static site checks PASSED: {len(pages)} HTML pages, local links/assets, image alt attributes, landmarks and no placeholder review quotes.")


if __name__ == "__main__":
    main()
