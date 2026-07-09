let allDocs = [];
let fuse = null;
let activeCategory = "todos";
let currentLang = localStorage.getItem("idioma") === "es" ? "es" : "eu"; // por defecto: euskera

const resultsEl = document.getElementById("results");
const resultsCountEl = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-btn");
const langButtons = document.querySelectorAll(".lang-btn");

function t() {
  return UI_STRINGS[currentLang];
}

function applyStaticTexts() {
  const s = t();
  document.getElementById("page-title").textContent = s.pageTitle;
  document.getElementById("site-title").textContent = s.siteTitle;
  document.getElementById("site-subtitle").textContent = s.subtitle;
  searchInput.placeholder = s.searchPlaceholder;

  filterButtons.forEach((btn) => {
    btn.textContent = s.filters[btn.dataset.cat];
  });

  document.querySelector("#footer-disclaimer strong").textContent = s.footerDisclaimer;
  document.getElementById("footer-meta").textContent = s.footerMeta;

  document.documentElement.lang = currentLang;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("idioma", lang);
  applyStaticTexts();
  applyFilters();
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

fetch("data/documentos.json")
  .then((res) => res.json())
  .then((docs) => {
    allDocs = docs;
    fuse = new Fuse(allDocs, {
      keys: [
        { name: "titulo_es", weight: 0.4 },
        { name: "titulo_eu", weight: 0.4 },
        { name: "resumen", weight: 0.3 },
        { name: "tags", weight: 0.2 }
      ],
      threshold: 0.35,
      ignoreLocation: true
    });
    applyStaticTexts();
    render(allDocs);
  })
  .catch((err) => {
    resultsEl.innerHTML = `<p class="no-results">${t().loadError}</p>`;
    console.error(err);
  });

function renderCard(doc) {
  const s = t();
  const usingFallback = currentLang === "eu" && !doc.titulo_eu;
  const titulo = currentLang === "eu" ? (doc.titulo_eu || doc.titulo_es) : doc.titulo_es;
  const url = currentLang === "eu" ? (doc.fuente_url_eu || doc.fuente_url) : doc.fuente_url;
  const fecha = doc.fecha || "";
  const categoriaLabel = s.filters[doc.categoria] || doc.categoria;

  return `
    <article class="doc-card">
      <div class="doc-meta">
        <span class="badge">${categoriaLabel}</span>
        ${fecha ? `<span>${fecha}</span>` : ""}
        ${usingFallback ? `<span class="fallback-tag">${s.fallbackTag}</span>` : ""}
      </div>
      <h3><a href="${url}" target="_blank" rel="noopener">${titulo}</a></h3>
      <p class="doc-resumen">${doc.resumen}</p>
    </article>
  `;
}

function render(docs) {
  const s = t();
  resultsCountEl.textContent = docs.length === 1
    ? s.resultsCountOne
    : s.resultsCountMany(docs.length);

  resultsEl.innerHTML = docs.length
    ? docs.map(renderCard).join("")
    : `<p class="no-results">${s.noResults}</p>`;
}

function applyFilters() {
  const query = searchInput.value.trim();
  let base = allDocs;

  if (activeCategory !== "todos") {
    base = base.filter((d) => d.categoria === activeCategory);
  }

  if (!query) {
    render(base);
    return;
  }

  const searchResults = fuse.search(query).map((r) => r.item);
  const filtered = activeCategory === "todos"
    ? searchResults
    : searchResults.filter((d) => d.categoria === activeCategory);

  render(filtered);
}

searchInput.addEventListener("input", applyFilters);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory = btn.dataset.cat;
    applyFilters();
  });
});
