const VIDEO_EXT = /\.(mp4|webm|mov|ogg)(\?.*)?$/i;

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getMediaPath(entry) {
  return entry.media || entry.image || "";
}

function isVideoPath(path) {
  return VIDEO_EXT.test(path || "");
}

function createMediaBlock(entry, overridePath) {
  const path = overridePath || getMediaPath(entry);
  const label = `Memory with ${entry.name}`;

  // Google Drive embed — shown when driveUrl is set and no overridePath
  if (entry.driveUrl && !overridePath) {
    const safeUrl = escapeHtml(entry.driveUrl);
    return `
      <div class="entry-photo entry-photo--video">
        <iframe
          src="${safeUrl}"
          allow="autoplay"
          allowfullscreen
          frameborder="0"
          aria-label="${escapeHtml(label)}"
          style="width:100%;height:100%;border:none;background:#2a2420;"
        ></iframe>
      </div>
    `;
  }

  const safePath = escapeHtml(path);

  if (isVideoPath(path)) {
    return `
      <div class="entry-photo entry-photo--video">
        <video
          src="${safePath}"
          controls
          playsinline
          preload="metadata"
          aria-label="${escapeHtml(label)}"
          onerror="this.closest('.entry-photo').querySelector('.photo-placeholder') && (this.style.display='none', this.closest('.entry-photo').querySelector('.photo-placeholder').style.display='flex')"
        ></video>
        <div class="photo-placeholder" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
          <span>Add video:<br><code>${safePath}</code></span>
        </div>
      </div>
    `;
  }

  return `
    <div class="entry-photo">
      <img
        src="${safePath}"
        alt="${escapeHtml(label)}"
        loading="lazy"
        onerror="this.closest('.entry-photo').querySelector('.photo-placeholder') && (this.style.display='none', this.closest('.entry-photo').querySelector('.photo-placeholder').style.display='flex')"
      />
      <div class="photo-placeholder" style="display: none;">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
        <span>Add photo:<br><code>${safePath}</code></span>
      </div>
    </div>
  `;
}

function renderTimeline() {
  const root = document.getElementById("timeline");
  if (!root) return;

  let wishIndex = 0;

  root.innerHTML = TIMELINE.map((entry) => {
    if (entry.type === "section") {
      const className = entry.divider
        ? "timeline-section-divider reveal"
        : "timeline-section-heading reveal";
      return `
        <li class="${className}" role="presentation">
          <h2>${escapeHtml(entry.title)}</h2>
        </li>
      `;
    }

    const langClass =
      entry.language === "marathi" ? "lang-marathi" : "lang-english";
    const sideClass = wishIndex % 2 === 0 ? "image-left" : "image-right";
    wishIndex += 1;

    const hasMessage = entry.message && String(entry.message).trim();
    const messagePanel =
      entry.image2 && !hasMessage
        ? `<div class="entry-message entry-message--media">${createMediaBlock(entry, entry.image2)}</div>`
        : `<div class="entry-message">
            <p class="card-message ${langClass}">${escapeHtml(entry.message || "")}</p>
          </div>`;

    return `
      <li class="timeline-item reveal ${sideClass}">
        <header class="entry-header">
          <span class="entry-year">${entry.year}</span>
          <span class="entry-label">${escapeHtml(entry.label)}</span>
          <span class="entry-relation">${escapeHtml(entry.relation)}</span>
          <h3 class="entry-name">${escapeHtml(entry.name)}</h3>
        </header>
        <div class="entry-split">
          ${createMediaBlock(entry)}
          ${messagePanel}
        </div>
      </li>
    `;
  }).join("");
}

function initHeroMedia() {
  const wrap = document.querySelector(".hero-portrait-wrap");
  const portraitImg = document.getElementById("hero-portrait");
  const placeholder = document.getElementById("hero-portrait-placeholder");
  const path = BIRTHDAY.portrait;

  if (!wrap || !path) return;

  if (isVideoPath(path)) {
    if (portraitImg) portraitImg.remove();

    const video = document.createElement("video");
    video.id = "hero-portrait";
    video.className = "hero-portrait hero-portrait--video";
    video.src = path;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", BIRTHDAY.name);
    const showPlaceholder = () => {
      video.style.display = "none";
      if (placeholder) {
        placeholder.hidden = false;
        const code = placeholder.querySelector("code");
        if (code) code.textContent = path;
      }
    };

    const showPortrait = () => {
      video.style.display = "";
      if (placeholder) placeholder.hidden = true;
    };

    video.onloadeddata = showPortrait;
    video.onerror = showPlaceholder;

    wrap.insertBefore(video, placeholder);
    if (placeholder) {
      const span = placeholder.querySelector("span");
      if (span) {
        span.innerHTML = `Add his video as<br><code>${escapeHtml(path)}</code>`;
      }
    }
    return;
  }

  if (portraitImg) {
    portraitImg.src = path;
    portraitImg.alt = BIRTHDAY.name;

    const showPlaceholder = () => {
      portraitImg.style.display = "none";
      if (placeholder) placeholder.hidden = false;
    };

    const showPortrait = () => {
      portraitImg.style.display = "";
      if (placeholder) placeholder.hidden = true;
    };

    portraitImg.onload = showPortrait;
    portraitImg.onerror = showPlaceholder;

    if (portraitImg.complete) {
      if (portraitImg.naturalWidth > 0) showPortrait();
      else showPlaceholder();
    }
  }
}

function initHero() {
  const nameEl = document.getElementById("dad-name");
  const ageEl = document.getElementById("dad-age");
  const subEl = document.getElementById("hero-subtitle");

  if (nameEl) nameEl.textContent = BIRTHDAY.name;
  if (ageEl) ageEl.textContent = `${BIRTHDAY.age} years young`;
  if (subEl) subEl.textContent = BIRTHDAY.subtitle;

  initHeroMedia();
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initHero();
  renderTimeline();
  initReveal();
});
