const galleryItems = [
  { category: 'Portraits in Snow', file: './_gallery/portraits-snow/snow-burgundy-wide-negative-space.jpg', title: 'Burgundy Snow Portrait', note: 'Negative space, winter softness, quiet confidence.' },
  { category: 'Portraits in Snow', file: './_gallery/portraits-snow/snow-burgundy-smiling-close.jpg', title: 'Winter Smile', note: 'Warm expression against cold blue snow.' },
  { category: 'Portraits in Snow', file: './_gallery/portraits-snow/snow-burgundy-ballet-stance.jpg', title: 'Burgundy Ballet', note: 'Movement and poise in winter light.' },
  { category: 'Portraits in Snow', file: './_gallery/portraits-snow/snow-floral-dress-romantic.jpg', title: 'Floral Snow', note: 'Soft romantic portrait in a winter field.' },
  { category: 'Portraits & Blossoms', file: './_gallery/portraits-blossoms/cherry-blossom-suit-full.jpg', title: 'Suit & Blossoms', note: 'Editorial contrast under spring bloom.' },
  { category: 'Portraits & Blossoms', file: './_gallery/portraits-blossoms/cherry-blossom-suit-profile.jpg', title: 'Profile Under Bloom', note: 'Tailoring, softness, and turned-away gaze.' },
  { category: 'Portraits & Blossoms', file: './_gallery/portraits-blossoms/white-dress-blossom-reaching.jpg', title: 'Reaching Blossom', note: 'White dress, spring light, and delicate gesture.' },
  { category: 'Portraits & Blossoms', file: './_gallery/portraits-blossoms/white-dress-blossom-close.jpg', title: 'Blossom Veil', note: 'Softness, playfulness, and partial concealment.' },
  { category: 'Coast & Water', file: './_gallery/landscapes-coast/oregon-coast-muted-haystack.jpg', title: 'Muted Coast', note: 'Pacific Northwest scale and quiet distance.' },
  { category: 'Coast & Water', file: './_gallery/landscapes-coast/haystack-rock-dramatic-sky.jpg', title: 'Haystack Sky', note: 'Dramatic cloud movement over coastal light.' },
  { category: 'Coast & Water', file: './_gallery/landscapes-coast/oregon-coast-sunset-gray-fire.jpg', title: 'Gray Fire Coast', note: 'Restrained sunset beneath a heavy sky.' },
  { category: 'Coast & Water', file: './_gallery/landscapes-coast/driftwood-root-beach-detail.jpg', title: 'Driftwood Structure', note: 'Sculptural beach detail and organic texture.' },
  { category: 'Mountains & Distance', file: './_gallery/landscapes-mountains/frozen-mountain-lake-cinematic.jpg', title: 'Frozen Mountain Lake', note: 'Cinematic depth and alpine quiet.' },
  { category: 'Mountains & Distance', file: './_gallery/landscapes-mountains/fog-covered-mountain-range.jpg', title: 'Fog Covered Range', note: 'Cloud, mountain, and atmosphere in layers.' },
  { category: 'Mountains & Distance', file: './_gallery/landscapes-mountains/crater-lake-blue-framed.jpg', title: 'Crater Lake Blue', note: 'Clean evergreen framing and immense calm.' },
  { category: 'Wetlands & Reflection', file: './_gallery/wetlands-water/stormy-wetlands-reflection.jpg', title: 'Stormy Wetlands', note: 'Cloud weight reflected over still water.' },
  { category: 'Wetlands & Reflection', file: './_gallery/wetlands-water/wetlands-panorama-storm-clouds.jpg', title: 'Wetland Panorama', note: 'Wide quiet under layered storm clouds.' },
  { category: 'Wetlands & Reflection', file: './_gallery/wetlands-water/geese-sunset-family-line.jpg', title: 'Geese at Sunset', note: 'Movement, family, and gold reflection.' },
  { category: 'Wetlands & Reflection', file: './_gallery/wetlands-water/lake-silhouette-tree-tiny-people.jpg', title: 'Small Figures', note: 'Human scale against fading lake light.' },
  { category: 'Wetlands & Reflection', file: './_gallery/wetlands-water/quiet-lake-boathouse-sunset.jpg', title: 'Quiet Boathouse', note: 'Still lake, soft gold, and solitude.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/road-sunset-wet-powerlines.jpg', title: 'Road After Rain', note: 'Power lines, wet pavement, and transition light.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/road-dusk-dashboard-reflection.jpg', title: 'Dashboard Dusk', note: 'Movement and reflected sunset glow.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/birds-at-dusk-silhouette.jpg', title: 'Birds at Dusk', note: 'Motion, silhouettes, and open sky.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/oak-tree-pastel-sunset.jpg', title: 'Pastel Oak', note: 'A quiet oak against a fading horizon.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/rural-sunset-barn-pink-sky.jpg', title: 'Rural Pink Sky', note: 'Barn, trees, and vivid evening cloud.' },
  { category: 'Roads & Thresholds', file: './_gallery/roads-thresholds/dark-cloud-texture-sunset.jpg', title: 'Bruised Sky', note: 'Dark cloud texture and late evening glow.' },
  { category: 'Aquarium Abstracts', file: './_gallery/aquarium-abstracts/jellyfish-blue-negative-space.jpg', title: 'Blue Drift', note: 'Jellyfish in negative space and deep blue.' },
  { category: 'Aquarium Abstracts', file: './_gallery/aquarium-abstracts/jellyfish-magenta-art-print.jpg', title: 'Magenta Drift', note: 'Fine-art jellyfish study in pink light.' },
  { category: 'Aquarium Abstracts', file: './_gallery/aquarium-abstracts/jellyfish-blue-linework.jpg', title: 'Linework Bloom', note: 'Tentacles as graphic drawing against blue.' },
  { category: 'Aquarium Abstracts', file: './_gallery/aquarium-abstracts/jellyfish-monochrome-blue-density.jpg', title: 'Blue Density', note: 'Layered repetition and underwater atmosphere.' },
  { category: 'Florals & Details', file: './_gallery/florals-details/pink-rose-bee-backlit.jpg', title: 'Bee in Rose', note: 'Backlit petals and small living detail.' },
  { category: 'Florals & Details', file: './_gallery/florals-details/red-roses-garden.jpg', title: 'Red Garden Roses', note: 'Classic garden color and petal texture.' },
  { category: 'Editorial Places', file: './_gallery/editorial-places/rooftop-hot-tub-dusk-editorial.jpg', title: 'Rooftop Dusk', note: 'Editorial lifestyle with city light and plane detail.' },
  { category: 'Editorial Places', file: './_gallery/editorial-places/purple-victorian-house.jpg', title: 'Purple Victorian', note: 'Pacific Northwest color and personality.' },
  { category: 'Editorial Places', file: './_gallery/editorial-places/abstract-sculpture-forest.jpg', title: 'Forest Sculpture', note: 'Stone shape language in a green setting.' }
];

let currentItems = [...galleryItems];
let currentIndex = 0;

function renderGallery() {
  const galleryRoot = document.querySelector('[data-gallery]');
  const filterRoot = document.querySelector('[data-gallery-filters]');
  if (!galleryRoot || !filterRoot) return;

  const categories = [...new Set(galleryItems.map(item => item.category))];
  filterRoot.innerHTML = ['All', ...categories]
    .map(category => `<button class="gallery-filter" type="button" data-filter="${category}">${category}</button>`)
    .join('');

  function draw(filter = 'All') {
    currentItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);
    galleryRoot.innerHTML = currentItems.map((item, index) => `
      <article class="gallery-item" data-category="${item.category}">
        <button class="gallery-image-link" type="button" data-gallery-index="${index}" aria-label="Open ${item.title}">
          <img src="${item.file}" alt="${item.title}" loading="lazy" onerror="this.closest('.gallery-item').classList.add('image-missing')">
          <div class="gallery-placeholder"><span>${item.category}</span></div>
        </button>
        <div class="gallery-caption">
          <p class="card-kicker">${item.category}</p>
          <h3>${item.title}</h3>
          <p>${item.note}</p>
        </div>
      </article>
    `).join('');
  }

  filterRoot.addEventListener('click', event => {
    if (!event.target.matches('[data-filter]')) return;
    filterRoot.querySelectorAll('.gallery-filter').forEach(button => button.classList.remove('is-active'));
    event.target.classList.add('is-active');
    draw(event.target.dataset.filter);
  });

  galleryRoot.addEventListener('click', event => {
    const button = event.target.closest('[data-gallery-index]');
    if (!button) return;
    currentIndex = Number(button.dataset.galleryIndex);
    openLightbox(currentIndex);
  });

  filterRoot.querySelector('[data-filter="All"]').classList.add('is-active');
  draw();
}

function createLightbox() {
  if (document.querySelector('.lightbox')) return;
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="lightbox-backdrop" data-lightbox-close></div>
    <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Expanded portfolio image">
      <button class="lightbox-close" type="button" data-lightbox-close aria-label="Close image">×</button>
      <button class="lightbox-nav lightbox-prev" type="button" data-lightbox-prev aria-label="Previous image">‹</button>
      <img class="lightbox-image" alt="">
      <button class="lightbox-nav lightbox-next" type="button" data-lightbox-next aria-label="Next image">›</button>
      <div class="lightbox-caption"><p class="card-kicker"></p><h3></h3><p></p></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', event => {
    if (event.target.matches('[data-lightbox-close]')) closeLightbox();
    if (event.target.matches('[data-lightbox-prev]')) moveLightbox(-1);
    if (event.target.matches('[data-lightbox-next]')) moveLightbox(1);
  });

  document.addEventListener('keydown', event => {
    if (!document.body.classList.contains('lightbox-open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
  });
}

function openLightbox(index) {
  createLightbox();
  currentIndex = index;
  updateLightbox();
  document.body.classList.add('lightbox-open');
  document.querySelector('.lightbox').setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  document.body.classList.remove('lightbox-open');
  document.querySelector('.lightbox')?.setAttribute('aria-hidden', 'true');
}

function moveLightbox(direction) {
  currentIndex = (currentIndex + direction + currentItems.length) % currentItems.length;
  updateLightbox();
}

function updateLightbox() {
  const item = currentItems[currentIndex];
  const lightbox = document.querySelector('.lightbox');
  if (!item || !lightbox) return;
  lightbox.querySelector('.lightbox-image').src = item.file;
  lightbox.querySelector('.lightbox-image').alt = item.title;
  lightbox.querySelector('.lightbox-caption .card-kicker').textContent = item.category;
  lightbox.querySelector('.lightbox-caption h3').textContent = item.title;
  lightbox.querySelector('.lightbox-caption p:last-child').textContent = item.note;
}

document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  createLightbox();
});
