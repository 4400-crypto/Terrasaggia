/* ═══════════════════════════════════════════════════
   FATTORIA TERRASSAGGIA — Application Logic
   ═══════════════════════════════════════════════════ */

'use strict';

// ──────────────────────────────────────────────────
// PRODUCTS DATABASE
// ──────────────────────────────────────────────────
const PRODUCTS = [
  // TARTUFI
  {
    id: 1,
    name: 'Piccola Scatola di Tartufi Bianchi',
    cat: 'tartufi',
    catLabel: 'Tartufi Pregiati',
    price: 45000,
    priceLabel: '€ 45.000',
    unit: 'per scatola (50g)',
    badge: 'LUXURY',
    desc: 'Selezione esclusiva di tartufo bianco pregiato (Tuber magnatum Pico) raccolto nelle nostre tartufaie d\'altura. Ogni esemplare è scelto a mano al culmine della maturazione aromatica.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    detail: 'Peso netto: 50g | Origine: Tartufaie di Terrassaggia, Umbria | Raccolta: Ottobre–Dicembre | Conservazione: 7 giorni in frigorifero | Note: Prodotto fresco, spedito entro 24h dalla raccolta',
    available: true,
  },
  {
    id: 2,
    name: 'Grande Scatola di Tartufi Bianchi',
    cat: 'tartufi',
    catLabel: 'Tartufi Pregiati',
    price: 120000,
    priceLabel: '€ 120.000',
    unit: 'per scatola (200g)',
    badge: 'LUXURY',
    desc: 'Cofanetto di rappresentanza con 200g di tartufi bianchi Tuber magnatum Pico di qualità assoluta. Il regalo più esclusivo per intenditori e collezionisti del gusto. Confezionato in un elegante box di legno laccato.',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    detail: 'Peso netto: 200g | Origine: Tartufaie di Terrassaggia, Umbria | Raccolta: Ottobre–Dicembre | Include: Certificato di autenticità e spatola in argento | Confezione: Box di legno laccato',
    available: true,
  },
  {
    id: 3,
    name: 'Tartufo Nero Estivo Selezionato',
    cat: 'tartufi',
    catLabel: 'Tartufi Pregiati',
    price: 8500,
    priceLabel: '€ 8.500',
    unit: 'per 100g',
    badge: 'BIOLOGICO',
    desc: 'Tuber aestivum raccolto nei boschi di quercia della nostra tenuta. Profumo intenso di bosco, ideale per paste fresche, risotti e carpacci. Calibro premium selezionato.',
    img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80',
    detail: 'Peso: 100g | Varietà: Tuber aestivum | Stagione: Giugno–Agosto | Note: Prodotto fresco di stagione',
    available: true,
  },
  {
    id: 4,
    name: 'Crema di Tartufo Nero 180ml',
    cat: 'tartufi',
    catLabel: 'Tartufi Pregiati',
    price: 980,
    priceLabel: '€ 980',
    unit: 'per vasetto',
    badge: null,
    desc: 'Crema vellutata di tartufo nero (30% tartufo) con olio EVO della nostra produzione. Ideale spalmata su pane tostato o come condimento per pasta fresca. Un\'emozione in ogni cucchiaio.',
    img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80',
    detail: 'Contenuto: 180ml | Tartufo nero: 30% | Ingredienti: Tartufo nero, olio EVO Terrassaggia, sale | Conservazione: 24 mesi | Apertura: consumare entro 3 gg',
    available: true,
  },

  // OLI & CONDIMENTI
  {
    id: 5,
    name: 'Olio EVO Gran Cru Riserva',
    cat: 'oli',
    catLabel: 'Oli & Condimenti',
    price: 320,
    priceLabel: '€ 320',
    unit: 'per 500ml',
    badge: 'BIOLOGICO',
    desc: 'Monocultivar Moraiolo, spremitura a freddo entro 6 ore dalla raccolta. Fruttato intenso con note di mandorla verde, carciofo e pepe bianco. Acidità: 0,12%. Prima spremitura di novembre.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    detail: 'Cultivar: Moraiolo | Raccolta: Novembre, brucatura manuale | Acidità: 0,12% | Polifenoli: 850 mg/kg | Bottiglia: Ceramica verniciata numerata',
    available: true,
  },
  {
    id: 6,
    name: 'Aceto Balsamico Tradizionale 30 Anni',
    cat: 'oli',
    catLabel: 'Oli & Condimenti',
    price: 2800,
    priceLabel: '€ 2.800',
    unit: 'per 100ml',
    badge: 'RARO',
    desc: 'Aceto balsamico invecchiato 30 anni in batteria di botti di rovere, ciliegio, castagno e gelso. Densità straordinaria, bouquet di vaniglia, prugna e legno antico. Certificato DOP.',
    img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
    detail: 'Invecchiamento: 30 anni | Botti: 7 essenze diverse | Resa: < 1L all\'anno | Certificazione: DOP | Bottiglia: Design esclusivo con sigillo di cera',
    available: true,
  },
  {
    id: 7,
    name: 'Sale delle Tartufaie al Tartufo Bianco',
    cat: 'oli',
    catLabel: 'Oli & Condimenti',
    price: 450,
    priceLabel: '€ 450',
    unit: 'per 200g',
    badge: null,
    desc: 'Sale integrale di Cervia aromatizzato con essiccato di tartufo bianco al 15%. Un tocco di lusso su carni alla griglia, uova, burro e formaggi freschi. Profumo inebriante.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    detail: 'Sale: Integrale di Cervia IGP | Tartufo bianco essiccato: 15% | Peso: 200g | Vasetto: Vetro con cucchiaino in legno di ulivo incluso',
    available: true,
  },
  {
    id: 8,
    name: 'Miele di Acacia Biologico Millefiori',
    cat: 'oli',
    catLabel: 'Oli & Condimenti',
    price: 280,
    priceLabel: '€ 280',
    unit: 'per 500g',
    badge: 'BIOLOGICO',
    desc: 'Miele grezzo non filtrato di fiori di acacia, raccolta primaverile dalle api dei nostri apicolture all\'interno della tenuta. Aroma floreale, cristallizzazione lenta, residui pollinici intatti.',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    detail: 'Tipo: Acacia pura biologica | Raccolta: Maggio–Giugno | Trattamento: Nessuna pastorizzazione | Vasetto: 500g in vetro ambrato | Scadenza: 3 anni',
    available: true,
  },

  // FORMAGGI & SALUMI
  {
    id: 9,
    name: 'Pecorino in Grotta 36 Mesi',
    cat: 'formaggi',
    catLabel: 'Formaggi & Salumi',
    price: 850,
    priceLabel: '€ 850',
    unit: 'per kg',
    badge: 'STAGIONATO',
    desc: 'Pecorino stagionato 36 mesi nelle grotte naturali della tenuta a temperatura costante di 12°C. Crosta naturale trattata con olio e vinacce. Pasta compatta, cristalli di tirosina, sapore intenso e persistente.',
    img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80',
    detail: 'Latte: Ovino intero crudo biologico | Stagionatura: 36 mesi in grotta | Peso forma: 2–3 kg | Trattamento crosta: Olio EVO e vinacce | Temperatura stagionatura: 12°C',
    available: true,
  },
  {
    id: 10,
    name: 'Prosciutto Crudo Terrassaggia 30 Mesi',
    cat: 'formaggi',
    catLabel: 'Formaggi & Salumi',
    price: 1200,
    priceLabel: '€ 1.200',
    unit: 'per coscia intera (9kg)',
    badge: 'RARO',
    desc: 'Coscia di suino cinta senese allevato allo stato brado nella nostra tenuta. Stagionatura 30 mesi nelle sale ventilate naturalmente. Grasso nobile, aroma di nocciola e fieno. Solo 80 cosce l\'anno.',
    img: 'https://images.unsplash.com/photo-1544025162-d76594e98694?w=600&q=80',
    detail: 'Razza: Cinta Senese allevamento estensivo | Stagionatura: 30 mesi | Peso medio: 9 kg con osso | Produzione annua: 80 cosce | Incluso: Supporto in legno e coltello professionale',
    available: true,
  },
  {
    id: 11,
    name: 'Salame di Cinghiale al Barolo',
    cat: 'formaggi',
    catLabel: 'Formaggi & Salumi',
    price: 680,
    priceLabel: '€ 680',
    unit: 'per kg',
    badge: 'SELVATICO',
    desc: 'Salame di cinghiale selvatico cacciato nei boschi della tenuta, lavorato a mano e aromatizzato con Barolo DOCG. Spezie naturali, budello naturale, stagionatura 90 giorni. Produzione limitata autunnale.',
    img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80',
    detail: 'Carne: Cinghiale selvatico della tenuta | Vino: Barolo DOCG | Spezie: Pepe nero, aglio, bacche di ginepro | Stagionatura: 90 giorni | Budello: Naturale di maiale',
    available: true,
  },
  {
    id: 12,
    name: 'Bresaola di Cervo della Tenuta',
    cat: 'formaggi',
    catLabel: 'Formaggi & Salumi',
    price: 920,
    priceLabel: '€ 920',
    unit: 'per kg',
    badge: 'SELVATICO',
    desc: 'Bresaola di cervo selvatico, marinata 21 giorni in erbe aromatiche di montagna e vino bianco della tenuta. Magra, proteica, dal sapore elegante e non troppo selvatico. Affettatura sottilissima.',
    img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80',
    detail: 'Carne: Cervo maschio adulto, cacciato in tenuta | Marinatura: 21 giorni in erbe e vino bianco | Stagionatura: 45 giorni | Conservazione: sottovuoto 60 giorni',
    available: true,
  },

  // VINI & SPIRITS
  {
    id: 13,
    name: 'Sagrantino di Montefalco Riserva 2018',
    cat: 'vini',
    catLabel: 'Vini & Spirits',
    price: 480,
    priceLabel: '€ 480',
    unit: 'per bottiglia (0,75L)',
    badge: 'DOCG',
    desc: 'Sagrantino in purezza, annata 2018, affinamento 36 mesi in barrique di rovere francese e 12 mesi in bottiglia. Colore rosso granato intenso, tannini morbidi, finale lunghissimo di frutti neri e spezie.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    detail: 'Vitigno: Sagrantino 100% | Annata: 2018 | Affinamento: 36 mesi barrique + 12 mesi bottiglia | Alcol: 15% | Produzione: 4.800 bottiglie | Robert Parker: 97 punti',
    available: true,
  },
  {
    id: 14,
    name: 'Grechetto Umbro Vendemmia Tardiva',
    cat: 'vini',
    catLabel: 'Vini & Spirits',
    price: 320,
    priceLabel: '€ 320',
    unit: 'per bottiglia (0,5L)',
    badge: null,
    desc: 'Grechetto da vendemmia tardiva con appassimento naturale in pianta. Note di miele d\'acacia, albicocca matura, mandorla tostata. Dessert wine strutturato, ideale con pecorino stagionato e tartufo.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    detail: 'Vitigno: Grechetto di Todi | Raccolto: Novembre | Appassimento: 4 settimane su pianta | Zucchero residuo: 80 g/L | Alcol: 13,5% | Produzione: 1.200 bottiglie',
    available: true,
  },
  {
    id: 15,
    name: 'Grappa Riserva Invecchiata 15 Anni',
    cat: 'vini',
    catLabel: 'Vini & Spirits',
    price: 650,
    priceLabel: '€ 650',
    unit: 'per bottiglia (0,7L)',
    badge: 'RARO',
    desc: 'Grappa di vinacce di Sagrantino invecchiata 15 anni in botti di rovere da 500L. Colore ambrato, bouquet di legno, tabacco, vaniglia e frutta secca. Solo 300 bottiglie per anno. Il distillato degli dei.',
    img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
    detail: 'Materia prima: Vinacce di Sagrantino | Distillazione: Alambicco a vapore discontinuo | Invecchiamento: 15 anni in barrique da 500L | Alcol: 43% | Produzione: 300 bottiglie/anno',
    available: true,
  },

  // SPEZIE & RARITÀ
  {
    id: 16,
    name: 'Zafferano Purissimo dell\'Umbria',
    cat: 'spezie',
    catLabel: 'Spezie & Rarità',
    price: 9500,
    priceLabel: '€ 9.500',
    unit: 'per grammo',
    badge: 'RARISSIMO',
    desc: 'Zafferano Crocus sativus coltivato a mano nei nostri campi d\'altura a 600m s.l.m. Ogni stigma viene raccolto all\'alba e essiccato a bassa temperatura. Potere colorante superiore a 260 UCM/g. Il più pregiato d\'Italia.',
    img: 'https://images.unsplash.com/photo-1487530811015-780f49c8c7e1?w=600&q=80',
    detail: 'Varietà: Crocus sativus | Crocina (potere colorante): >260 UCM/g | Safranale: >31 | Picrocrocina: >96 | Raccolta: Ottobre, alba | Essiccazione: <40°C | Confezionamento: Vasetto in vetro con sigillo',
    available: true,
  },
  {
    id: 17,
    name: 'Farro Monococco Antico Macinato a Pietra',
    cat: 'spezie',
    catLabel: 'Spezie & Rarità',
    price: 95,
    priceLabel: '€ 95',
    unit: 'per kg',
    badge: 'BIOLOGICO',
    desc: 'Farro monococco Triticum monococcum coltivato senza concimi chimici. Macinato a pietra fredda per conservare germe e crusca intatti. Alto contenuto di proteine (18%), ferro e carotenoidi. Il cereale dei gladiatori.',
    img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80',
    detail: 'Varietà: Triticum monococcum | Coltivazione: Biologica certificata | Macinatura: A pietra fredda | Proteine: 18% | Ferro: 4x riso | Sacchetto: Carta kraft compostabile 1kg',
    available: true,
  },
  {
    id: 18,
    name: 'Funghi Porcini Secchi Extra',
    cat: 'spezie',
    catLabel: 'Spezie & Rarità',
    price: 1200,
    priceLabel: '€ 1.200',
    unit: 'per 100g',
    badge: 'SELVATICO',
    desc: 'Porcini (Boletus edulis) raccolti a mano nei boschi della tenuta tra agosto e ottobre. Essiccazione lenta a sole naturale per 48 ore. Profumo straordinario, slice intere senza spezzato. Calibro superiore.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    detail: 'Specie: Boletus edulis | Raccolta: Agosto–Ottobre, boschi della tenuta | Essiccazione: Solare naturale 48h | Porzionatura: Solo fette intere | Confezione: Sacchetto telato con finestra',
    available: true,
  },
  {
    id: 19,
    name: 'Confettura di Fichi Selvatici al Barolo',
    cat: 'spezie',
    catLabel: 'Spezie & Rarità',
    price: 180,
    priceLabel: '€ 180',
    unit: 'per vasetto 250g',
    badge: null,
    desc: 'Fichi selvatici raccolti dalle piante centenarie della tenuta, cotti lentamente con Barolo DOCG e pepe lungo. Perfetta con formaggi stagionati e charcuterie. Ridotta quantità di zucchero, frutto protagonista.',
    img: 'https://images.unsplash.com/photo-1490323914169-4b79e9bfb15a?w=600&q=80',
    detail: 'Frutta: Fichi selvatici della tenuta (65%) | Vino: Barolo DOCG | Zucchero: 22% (ridotto) | Senza pectine aggiunte | Vasetto: 250g vetro con coperchio cerato',
    available: true,
  },
  {
    id: 20,
    name: 'Box Degustazione Prestige Terrassaggia',
    cat: 'spezie',
    catLabel: 'Rarità & Cofanetti',
    price: 3800,
    priceLabel: '€ 3.800',
    unit: 'per cofanetto',
    badge: 'LUXURY',
    desc: 'Il meglio di Terrassaggia in un unico cofanetto di legno laccato: olio Gran Cru 250ml, crema di tartufo 90ml, aceto balsamico 10 anni 50ml, miele 250g, salame di cinghiale 150g, Sagrantino Riserva 750ml.',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
    detail: 'Contenuto: 6 prodotti selezionati | Cofanetto: Legno di noce laccato | Dimensioni: 40x30x20 cm | Include: Guida alla degustazione e ricette esclusive | Spedizione: Servizio in guanti bianchi',
    available: true,
  },
];

// ──────────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────────
let cart = [];
let orders = [];
let liveReceiptItems = [];
let currentSlide = 0;
let currentFilter = 'all';

// ──────────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroParticles();
  initGallerySlider();
  initStats();
  initRevealAnimations();
  renderProducts();
  initFilterBtns();
  updateCartUI();
  setReceiptDate();
  loadOrdersFromStorage();
});

// ──────────────────────────────────────────────────
// NAVBAR SCROLL
// ──────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ──────────────────────────────────────────────────
// HERO PARTICLES
// ──────────────────────────────────────────────────
function initHeroParticles() {
  const container = document.getElementById('heroParticles');
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${6 + Math.random() * 8}s;
      --delay: ${Math.random() * 8}s;
      --drift: ${(Math.random() - 0.5) * 100};
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      opacity: ${0.2 + Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}

// ──────────────────────────────────────────────────
// GALLERY SLIDER
// ──────────────────────────────────────────────────
function initGallerySlider() {
  const slider = document.getElementById('gallerySlider');
  const slides = slider.querySelectorAll('.gallery-slide');
  const dotsContainer = document.getElementById('sliderDots');

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  // Auto-advance
  setInterval(() => slideGallery(1), 5000);
}

function slideGallery(dir) {
  const slides = document.querySelectorAll('.gallery-slide');
  const dots   = document.querySelectorAll('.dot');
  currentSlide = (currentSlide + dir + slides.length) % slides.length;
  goToSlide(currentSlide);
}

function goToSlide(idx) {
  const slider = document.getElementById('gallerySlider');
  const dots   = document.querySelectorAll('.dot');
  currentSlide = idx;
  slider.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// ──────────────────────────────────────────────────
// STATS COUNTER
// ──────────────────────────────────────────────────
function initStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  const update = now => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString('it-IT');
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ──────────────────────────────────────────────────
// REVEAL ANIMATIONS
// ──────────────────────────────────────────────────
function initRevealAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Stagger children
        const children = e.target.querySelectorAll('.product-card, .feature-item, .info-card, .stat-item');
        children.forEach((c, i) => {
          setTimeout(() => c.classList.add('visible'), i * 80);
        });
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// ──────────────────────────────────────────────────
// PRODUCTS
// ──────────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const toShow = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);

  toShow.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal-up';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-img-wrap" onclick="openProductDetail(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge ${p.badge === 'LUXURY' || p.badge === 'RARISSIMO' || p.badge === 'RARO' ? 'luxury' : ''}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.catLabel}</div>
        <h3 class="product-name" onclick="openProductDetail(${p.id})">${p.name}</h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-bottom">
          <div>
            <span class="product-price">${p.priceLabel}</span>
            <span class="product-unit">${p.unit}</span>
          </div>
          <button class="add-to-cart" onclick="addToCart(${p.id}, event)">
            <span>+</span> Aggiungi
          </button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Re-observe new cards
  setTimeout(() => {
    document.querySelectorAll('.product-card.reveal-up').forEach(el => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(el);
    });
  }, 50);
}

function initFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      renderProducts(filter);
    });
  });
}

// ──────────────────────────────────────────────────
// PRODUCT DETAIL
// ──────────────────────────────────────────────────
function openProductDetail(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const content = document.getElementById('productDetailContent');
  content.innerHTML = `
    <div class="product-detail-inner">
      <div class="product-detail-img">
        <img src="${p.img}" alt="${p.name}" />
      </div>
      <div class="product-detail-info">
        <div class="product-cat">${p.catLabel}</div>
        <h2>${p.name}</h2>
        <div class="product-detail-price">${p.priceLabel} <span style="font-size:1rem;color:#999;font-family:Montserrat">${p.unit}</span></div>
        <p>${p.desc}</p>
        <div class="product-detail-meta">
          ${p.detail.split('|').map(d => `<div style="margin-bottom:0.2rem"><strong>${d.split(':')[0]}:</strong>${d.split(':').slice(1).join(':')}</div>`).join('')}
        </div>
        <button class="btn-primary full-width" onclick="addToCart(${p.id}, null); closeModal('productDetailOverlay')">
          🛒 Aggiungi al Carrello
        </button>
      </div>
    </div>`;
  openModal('productDetailOverlay');
}

// ──────────────────────────────────────────────────
// CART
// ──────────────────────────────────────────────────
function addToCart(id, event) {
  if (event) event.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`✅ ${product.name.split(' ').slice(0,3).join(' ')} aggiunto al carrello`);

  // Animate button
  if (event && event.target.closest('.add-to-cart')) {
    const btn = event.target.closest('.add-to-cart');
    btn.classList.add('added');
    btn.textContent = '✓ Aggiunto!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = '<span>+</span> Aggiungi';
    }, 1500);
  }
}

function updateCartUI() {
  const count = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById('cartCount').textContent = count;

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🌿</span>
        <p>Il tuo carrello è vuoto</p>
        <small>Aggiungi i nostri prodotti esclusivi</small>
      </div>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.priceLabel}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`).join('');

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const iva      = subtotal * 0.22;
  const total    = subtotal + iva;

  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartIva').textContent = formatPrice(iva);
  document.getElementById('cartTotal').textContent = formatPrice(total);
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen  = sidebar.classList.contains('active');
  sidebar.classList.toggle('active', !isOpen);
  overlay.classList.toggle('active', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ──────────────────────────────────────────────────
// CHECKOUT
// ──────────────────────────────────────────────────
function openCheckout() {
  if (cart.length === 0) return;
  // Close cart
  document.getElementById('cartSidebar').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';

  // Build summary
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const iva      = subtotal * 0.22;
  const total    = subtotal + iva;

  const summaryEl = document.getElementById('checkoutSummary');
  summaryEl.innerHTML = `
    ${cart.map(c => `<div class="summary-item"><span>${c.name} ×${c.qty}</span><span>${formatPrice(c.price * c.qty)}</span></div>`).join('')}
    <div class="summary-item"><span>IVA 22%</span><span>${formatPrice(iva)}</span></div>
    <div class="summary-total"><span>TOTALE ORDINE</span><span>${formatPrice(total)}</span></div>`;

  openModal('checkoutOverlay');
}

function submitOrder(event) {
  event.preventDefault();

  const order = {
    id: 'ORD-' + Date.now().toString(36).toUpperCase(),
    customer: {
      nome: document.getElementById('orderNome').value,
      cognome: document.getElementById('orderCognome').value,
      email: document.getElementById('orderEmail').value,
      tel: document.getElementById('orderTel').value,
      azienda: document.getElementById('orderAzienda').value,
      indirizzo: document.getElementById('orderIndirizzo').value,
      citta: document.getElementById('orderCitta').value,
      cap: document.getElementById('orderCap').value,
      note: document.getElementById('orderNote').value,
    },
    items: [...cart],
    subtotal: cart.reduce((s, c) => s + c.price * c.qty, 0),
    status: 'pending',
    date: new Date().toLocaleString('it-IT'),
    timestamp: Date.now(),
  };
  order.iva   = order.subtotal * 0.22;
  order.total = order.subtotal + order.iva;

  // Salva su Firebase
  if (window.FB) {
    window.FB.saveOrder(order)
      .then(docId => { order._docId = docId; })
      .catch(() => {
        // fallback locale
        orders.push(order);
        showToast("⚠️ Ordine salvato localmente (offline)");
      });
  } else {
    orders.push(order);
  }

  document.getElementById('successOrderId').textContent = `Ordine: ${order.id}`;
  closeModal('checkoutOverlay');
  openModal('successOverlay');

  cart = [];
  updateCartUI();
  document.getElementById('checkoutForm').reset();
}

// ──────────────────────────────────────────────────
// EMPLOYEE SECTION
// ──────────────────────────────────────────────────
function openEmployeeLogin(e) {
  e.preventDefault();
  openModal('employeeLoginOverlay');
  setTimeout(() => document.getElementById('employeePassword').focus(), 200);
}

function checkEmployeeLogin() {
  const pwd = document.getElementById('employeePassword').value;
  const errorEl = document.getElementById('loginError');
  if (pwd === 'terrassaggia2024') {
    closeModal('employeeLoginOverlay');
    document.getElementById('employeePassword').value = '';
    errorEl.style.display = 'none';
    openEmployeeDashboard();
  } else {
    errorEl.style.display = 'block';
    document.getElementById('employeePassword').value = '';
    document.getElementById('employeePassword').classList.add('shake');
    setTimeout(() => document.getElementById('employeePassword').classList.remove('shake'), 500);
  }
}

let _fbUnsubscribe = null;

function openEmployeeDashboard() {
  document.getElementById('employeeDashboard').style.display = 'block';
  document.body.style.overflow = 'hidden';
  renderCalcProducts();
  renderComanda();

  // Ascolta ordini in tempo reale da Firebase
  if (window.FB) {
    if (_fbUnsubscribe) _fbUnsubscribe();
    _fbUnsubscribe = window.FB.listenOrders(remoteOrders => {
      orders = remoteOrders;
      renderOrdersTab();
    });
  } else {
    renderOrdersTab();
  }
}

function closeEmployeeDashboard() {
  document.getElementById('employeeDashboard').style.display = 'none';
  document.body.style.overflow = '';
  if (_fbUnsubscribe) { _fbUnsubscribe(); _fbUnsubscribe = null; }
}

function switchTab(name, btn) {
  document.querySelectorAll('.emp-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.emp-content').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
}

// Orders tab
function renderOrdersTab() {
  const list = document.getElementById('ordersList');
  const total = orders.reduce((s, o) => s + o.total, 0);
  const pending = orders.filter(o => o.status === 'pending').length;
  const completed = orders.filter(o => o.status === 'confirmed').length;

  document.getElementById('statTotOrdini').textContent = orders.length;
  document.getElementById('statFatturato').textContent = formatPrice(total);
  document.getElementById('statInAttesa').textContent = pending;
  document.getElementById('statCompletati').textContent = completed;

  if (orders.length === 0) {
    list.innerHTML = `<div class="no-orders"><span>📋</span><p>Nessun ordine ancora ricevuto</p><small>Gli ordini dei clienti appariranno qui</small></div>`;
    return;
  }

  list.innerHTML = orders.map(o => `
    <div class="order-card" id="order-${o.id}">
      <div class="order-card-header">
        <div>
          <span class="order-id-badge">${o.id}</span>
          <span class="order-status status-${o.status}" style="margin-left:0.5rem">${o.status === 'pending' ? '⏳ In Attesa' : '✅ Confermato'}</span>
        </div>
        <span class="order-total">${formatPrice(o.total)}</span>
      </div>
      <div class="order-customer">${o.customer.nome} ${o.customer.cognome}</div>
      <div class="order-email">${o.customer.email} — ${o.customer.tel}</div>
      <div class="order-email" style="margin-top:0.2rem">📍 ${o.customer.indirizzo}, ${o.customer.cap} ${o.customer.citta}</div>
      <div class="order-items-preview">📦 ${o.items.map(i => `${i.name} ×${i.qty}`).join(' · ')}</div>
      ${o.customer.note ? `<div class="order-email" style="margin-top:0.3rem;color:rgba(245,240,232,0.45)">📝 ${o.customer.note}</div>` : ''}
      <div class="order-date">📅 ${o.date}</div>
      <div class="order-actions">
        ${o.status === 'pending' ? `<button class="btn-confirm-order" onclick="confirmOrder('${o.id}')">✅ Conferma Ordine</button>` : ''}
        <button class="btn-delete-order" onclick="deleteOrder('${o.id}')">🗑️ Elimina</button>
      </div>
    </div>`).join('');
}

function confirmOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order) return;
  if (window.FB && order._docId) {
    window.FB.confirmOrder(order._docId);
    // onSnapshot aggiornerà automaticamente la UI
  } else {
    order.status = 'confirmed';
    renderOrdersTab();
  }
}

function deleteOrder(id) {
  const order = orders.find(o => o.id === id);
  if (!order) return;
  if (window.FB && order._docId) {
    window.FB.deleteOrder(order._docId);
    // onSnapshot aggiornerà automaticamente la UI
  } else {
    orders = orders.filter(o => o.id !== id);
    renderOrdersTab();
  }
}

function printOrders() {
  window.print();
}

// Live calculator
function renderCalcProducts() {
  const list = document.getElementById('calcProductsList');
  list.innerHTML = PRODUCTS.map(p => `
    <div class="calc-product-item">
      <span class="calc-product-name">${p.name}</span>
      <span class="calc-product-price">${p.priceLabel}</span>
      <button class="calc-add-btn" onclick="addToReceipt(${p.id})">+</button>
    </div>`).join('');
}

function filterCalcProducts() {
  const q = document.getElementById('calcSearch').value.toLowerCase();
  const items = document.querySelectorAll('.calc-product-item');
  items.forEach(item => {
    const name = item.querySelector('.calc-product-name').textContent.toLowerCase();
    item.style.display = name.includes(q) ? '' : 'none';
  });
}

function addToReceipt(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const existing = liveReceiptItems.find(i => i.id === id);
  if (existing) existing.qty++;
  else liveReceiptItems.push({ ...p, qty: 1 });
  renderReceipt();
}

function removeFromReceipt(id) {
  liveReceiptItems = liveReceiptItems.filter(i => i.id !== id);
  renderReceipt();
}

function renderReceipt() {
  const itemsEl = document.getElementById('receiptItems');
  const footerEl = document.getElementById('receiptFooter');

  if (liveReceiptItems.length === 0) {
    itemsEl.innerHTML = `<p style="text-align:center;color:#aaa;padding:1rem">Aggiungi prodotti dalla lista</p>`;
    footerEl.style.display = 'none';
    return;
  }

  footerEl.style.display = 'block';
  itemsEl.innerHTML = liveReceiptItems.map(item => `
    <div class="receipt-item">
      <span class="receipt-item-name">${item.name.length > 28 ? item.name.slice(0,28)+'…' : item.name}</span>
      <span class="receipt-item-qty">×${item.qty}</span>
      <span class="receipt-item-subtotal">${formatPrice(item.price * item.qty)}</span>
      <div class="receipt-item-controls">
        <button class="receipt-remove-btn" onclick="removeFromReceipt(${item.id})">✕</button>
      </div>
    </div>`).join('');

  const sub  = liveReceiptItems.reduce((s, i) => s + i.price * i.qty, 0);
  const iva  = sub * 0.22;
  const tot  = sub + iva;

  document.getElementById('recSubtotal').textContent = formatPrice(sub);
  document.getElementById('recIva').textContent = formatPrice(iva);
  document.getElementById('recTotal').textContent = formatPrice(tot);
}

function clearReceipt() {
  liveReceiptItems = [];
  renderReceipt();
}

function setReceiptDate() {
  const el = document.getElementById('receiptDate');
  if (el) el.textContent = new Date().toLocaleString('it-IT');
}

function printReceipt() {
  const receipt = document.getElementById('receipt');
  const w = window.open('', '', 'width=400,height=600');
  w.document.write(`
    <html><head><title>Scontrino Fattoria Terrassaggia</title>
    <style>body{font-family:monospace;padding:2rem;font-size:14px}
    .line{display:flex;justify-content:space-between;margin:4px 0}
    .title{text-align:center;font-weight:bold;margin-bottom:1rem}
    .divider{border-top:2px dashed #ccc;margin:0.8rem 0}
    .total{font-weight:bold;font-size:1.1em}
    </style></head><body>
    <div class="title">🌿 FATTORIA TERRASSAGGIA</div>
    <div class="title" style="font-size:12px">Vendita dal Vivo — ${new Date().toLocaleString('it-IT')}</div>
    <div class="divider"></div>
    ${liveReceiptItems.map(i => `<div class="line"><span>${i.name.slice(0,30)} ×${i.qty}</span><span>${formatPrice(i.price * i.qty)}</span></div>`).join('')}
    <div class="divider"></div>
    <div class="line"><span>Subtotale</span><span>${formatPrice(liveReceiptItems.reduce((s,i)=>s+i.price*i.qty,0))}</span></div>
    <div class="line"><span>IVA 22%</span><span>${formatPrice(liveReceiptItems.reduce((s,i)=>s+i.price*i.qty,0)*0.22)}</span></div>
    <div class="line total"><span>TOTALE</span><span>${formatPrice(liveReceiptItems.reduce((s,i)=>s+i.price*i.qty,0)*1.22)}</span></div>
    <div class="divider"></div>
    <div style="text-align:center;font-size:11px;margin-top:1rem">Grazie per il vostro acquisto!<br/>www.terrassaggia.it</div>
    </body></html>`);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 500);
}

// Comanda
function renderComanda() {
  const tbody = document.getElementById('comandaBody');
  tbody.innerHTML = PRODUCTS.map((p, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong style="color:rgba(245,240,232,0.9)">${p.name}</strong></td>
      <td>${p.catLabel}</td>
      <td style="color:rgba(245,240,232,0.5)">${p.unit}</td>
      <td>${p.priceLabel}</td>
      <td>
        <span class="avail-dot ${p.available ? 'avail-yes' : 'avail-limited'}"></span>
        ${p.available ? 'Disponibile' : 'Limitato'}
      </td>
    </tr>`).join('');
}

function printComanda() {
  const w = window.open('', '', 'width=900,height=700');
  const rows = PRODUCTS.map((p, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.catLabel}</td>
      <td>${p.unit}</td>
      <td><strong>${p.priceLabel}</strong></td>
      <td>${p.available ? '✓ Disponibile' : '⚠ Limitato'}</td>
    </tr>`).join('');

  w.document.write(`
    <html><head><title>Listino Fattoria Terrassaggia</title>
    <style>
      body{font-family:Georgia,serif;padding:2rem;font-size:13px;color:#1a1a1a}
      h1{color:#1a3a1a;margin-bottom:0.3rem}
      p{color:#666;margin-bottom:1.5rem}
      table{width:100%;border-collapse:collapse}
      th{background:#1a3a1a;color:#c9a84c;padding:0.8rem;text-align:left;font-size:11px;text-transform:uppercase;letter-spacing:0.1em}
      td{padding:0.7rem 0.8rem;border-bottom:1px solid #f0ede6;font-size:12px}
      tr:nth-child(even) td{background:#faf8f5}
      td:nth-child(5){color:#9a7930;font-weight:bold}
    </style></head><body>
    <h1>🌿 Fattoria Terrassaggia</h1>
    <p>Listino Prezzi — ${new Date().toLocaleDateString('it-IT')} — USO INTERNO</p>
    <table>
      <thead><tr><th>#</th><th>Prodotto</th><th>Categoria</th><th>Unità</th><th>Prezzo</th><th>Disponibilità</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="margin-top:1.5rem;font-size:11px;color:#999">Fattoria Terrassaggia S.r.l. — Uso riservato al personale — I prezzi sono IVA esclusa</p>
    </body></html>`);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 500);
}

// ──────────────────────────────────────────────────
// FIREBASE PERSISTENCE
// ──────────────────────────────────────────────────
// Questi sono stub — le funzioni reali arrivano da firebase.js (module)
// window.FB viene impostato da firebase.js appena caricato

function saveOrdersToStorage() {
  // legacy fallback, non più usato
}
function loadOrdersFromStorage() {
  // Non carichiamo da localStorage: Firebase carica in tempo reale
  // tramite startFirebaseListener() chiamato da openEmployeeDashboard()
}

// ──────────────────────────────────────────────────
// MODALS
// ──────────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  el.style.display = 'flex';
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => el.classList.add('open'), 10);
}

function closeModal(id) {
  const el = document.getElementById(id);
  el.style.display = 'none';
  el.classList.remove('open');
  document.body.style.overflow = '';
}

// ──────────────────────────────────────────────────
// CONTACT FORM
// ──────────────────────────────────────────────────
function sendContact(event) {
  event.preventDefault();
  showToast('✅ Messaggio inviato! Ti risponderemo entro 24 ore.');
  event.target.reset();
}

// ──────────────────────────────────────────────────
// TOAST
// ──────────────────────────────────────────────────
function showToast(msg, duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ──────────────────────────────────────────────────
// HELPERS
// ──────────────────────────────────────────────────
function formatPrice(num) {
  if (num >= 1000) {
    return '€ ' + num.toLocaleString('it-IT', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }
  return '€ ' + num.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['checkoutOverlay','successOverlay','employeeLoginOverlay','productDetailOverlay'].forEach(closeModal);
  }
});
