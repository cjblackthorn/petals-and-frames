"use strict";
const assert = require("node:assert/strict");
const { chromium } = require("playwright");
const URL = "http://127.0.0.1:4173/portfolio.html";

async function testViewport(browser, mobile) {
  const context = await browser.newContext({ viewport: mobile ? { width: 390, height: 844 } : { width: 1280, height: 800 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(String(error)));
  const response = await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 20000 });
  assert.equal(response.status(), 200);
  const tiles = page.locator(".gallery-item");
  assert.equal(await tiles.count(), 35);
  const opener = page.locator('[data-gallery-index="0"]').first();
  await opener.click();
  const dialog = page.locator(".lightbox");
  assert.equal(await dialog.getAttribute("aria-hidden"), "false");
  assert.equal(await page.locator(".lightbox-dialog").getAttribute("aria-modal"), "true");
  await page.waitForFunction(() => document.activeElement?.matches(".lightbox-close"), null, { timeout: 3000 });
  assert.equal(await page.locator(".lightbox-close").evaluate(el => document.activeElement === el), true);
  assert.equal(await page.locator(".lightbox-caption h3").innerText(), "Burgundy Snow Portrait");

  if (mobile) {
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(".lightbox-close").evaluate(el => document.activeElement === el), true);
    await page.keyboard.press("Shift+Tab");
    assert.equal(await page.locator(".lightbox-close").evaluate(el => document.activeElement === el), true);
  } else {
    await page.keyboard.press("Shift+Tab");
    assert.equal(await page.locator(".lightbox-next").evaluate(el => document.activeElement === el), true);
    await page.keyboard.press("Tab");
    assert.equal(await page.locator(".lightbox-close").evaluate(el => document.activeElement === el), true);
  }

  await page.keyboard.press("ArrowRight");
  assert.equal(await page.locator(".lightbox-caption h3").innerText(), "Winter Smile");
  await page.keyboard.press("Escape");
  assert.equal(await dialog.getAttribute("aria-hidden"), "true");
  assert.equal(await opener.evaluate(el => document.activeElement === el), true);

  await page.locator('[data-filter="Florals & Details"]').click();
  assert.equal(await tiles.count(), 2);
  const filteredOpener = page.locator('[data-gallery-index="0"]').first();
  await filteredOpener.click();
  assert.equal(await page.locator(".lightbox-caption h3").innerText(), "Bee in Rose");
  await page.locator(".lightbox-close").click();
  assert.equal(await filteredOpener.evaluate(el => document.activeElement === el), true);
  assert.deepEqual(errors, []);
  await context.close();
  console.log("PASS " + (mobile ? "mobile" : "desktop") + ": gallery filters, dialog focus, Tab containment, arrow navigation, Escape and focus restoration");
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    await testViewport(browser, false);
    await testViewport(browser, true);
    console.log("PASS: all Petal & Frame gallery tests; no forms or external services invoked");
  } finally {
    await browser.close();
  }
})().catch(err => { console.error(err); process.exitCode = 1; });
