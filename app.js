/* ═══════════════════════════════════════════════════
   FATTORIA TERRASSAGGIA — Application Logic
   ═══════════════════════════════════════════════════ */

'use strict';

// ──────────────────────────────────────────────────
// PRODUCTS DATABASE  (90 prodotti, nessuna foto)
// ──────────────────────────────────────────────────
const CAT_ICONS = {
  legname: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L8 8H5l7 7-2 7h4l-2-7 7-7h-3z"/><line x1="12" y1="22" x2="12" y2="16"/></svg>`,
  terra:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22V12"/><path d="M12 12C12 7 7 4 3 6c3 1 6 4 9 6z"/><path d="M12 12C12 7 17 4 21 6c-3 1-6 4-9 6z"/></svg>`,
  vini:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 2h8l-1 8a5 5 0 01-6 0L8 2z"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>`,
  carni:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3C4 5 3 9 5 12l7 9 7-9c2-3 1-7-2-9a5 5 0 00-5 1 5 5 0 00-5-1z"/></svg>`,
  latte:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="4" width="10" height="16" rx="2"/><path d="M9 4V2h6v2"/><line x1="9" y1="11" x2="15" y2="11"/></svg>`,
  brico:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="14" width="20" height="4" rx="1"/><path d="M6 14V8a6 6 0 0112 0v6"/><line x1="12" y1="2" x2="12" y2="4"/></svg>`,
  ristorazione: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11c0-4.4 4-8 9-8s9 3.6 9 8"/><line x1="3" y1="11" x2="21" y2="11"/><rect x="5" y="11" width="14" height="3" rx="1"/><line x1="12" y1="14" x2="12" y2="20"/><line x1="8" y1="20" x2="16" y2="20"/></svg>`,
};

const PRODUCTS = [

  // ── LEGNAME (15) ─────────────────────────────────
  {
    id: 1,
    name: 'Quercia Bianca Stagionata — Fornitura Industriale',
    cat: 'legname', catLabel: 'Legname Pregiato',
    price: 18500, priceLabel: '€ 18.500', unit: 'per m³',
    badge: 'LUXURY',
    desc: 'Quercia bianca (Quercus robur) cresciuta per oltre 120 anni in condizioni di stress idrico controllato, che ha prodotto una densità del legno eccezionalmente elevata — superiore del 40% rispetto alla media commerciale. Taglio selettivo, stagionatura naturale 5 anni all\'aria aperta.',
    img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    detail: 'Specie: Quercus robur | Età pianta: >120 anni | Densità: 820 kg/m³ | Stagionatura: 5 anni naturale | Umidità residua: <12% | Uso: Falegnameria di lusso, botti, parquet',
    available: true,
  },
  {
    id: 2,
    name: 'Noce Nazionale Nero — Prima Scelta',
    cat: 'legname', catLabel: 'Legname Pregiato',
    price: 24000, priceLabel: '€ 24.000', unit: 'per m³',
    badge: 'RARO',
    desc: 'Noce nazionale (Juglans regia) coltivato in microclima unico a 580m s.l.m. con escursione termica giornaliera che ha sviluppato venature straordinariamente marcate e un colore bruno intenso irripetibile. Ogni tronco è numerato e documentato fotograficamente dalla pianta in piedi.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80',
    detail: 'Specie: Juglans regia | Provenienza: Tenuta Terrassaggia, 580m s.l.m. | Sezione: Prima scelta, senza nodi | Documenti: Catena di custodia FSC | Stagionatura: 7 anni',
    available: true,
  },
  {
    id: 3,
    name: 'Ciliegio Selvatico — Tavole Piallate',
    cat: 'legname', catLabel: 'Legname Pregiato',
    price: 12800, priceLabel: '€ 12.800', unit: 'per m³',
    badge: 'BIOLOGICO',
    desc: 'Ciliegio selvatico (Prunus avium) proveniente dalle radure interne della tenuta, cresciuto senza interventi antropici per 80 anni. Il colore rosato naturale del midollo — frutto di condizioni pedologiche eccezionali — lo rende tra i più ricercati dagli ebanisti di lusso europei.',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
    detail: 'Specie: Prunus avium | Età: 80+ anni | Lavorazione: Piallato, spessore 50mm | Colore: Rosa–mogano naturale | Uso: Mobili su misura, intarsi, liuteria',
    available: true,
  },
  {
    id: 4,
    name: 'Frassino di Montagna — Stock Aziendale',
    cat: 'legname', catLabel: 'Legname Pregiato',
    price: 9200, priceLabel: '€ 9.200', unit: 'per m³',
    badge: null,
    desc: 'Frassino montano (Fraxinus excelsior) con fibratura diritta eccezionale, ideale per manici di attrezzi professionali, scale, impianti sportivi e carrozzeria di lusso. Cresciuto su terreno calcareo che conferisce durezza superiore e resilienza agli urti del 60% maggiore rispetto allo standard.',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80',
    detail: 'Specie: Fraxinus excelsior | Durezza Brinell: 68 N/mm² | Fibratura: Diritta, senza tensioni | Minimo ordine: 5 m³ | Consegna: Camion refrigerato dedicato',
    available: true,
  },
  {
    id: 5,
    name: 'Rovere da Botte — Doghe Selezionate',
    cat: 'legname', catLabel: 'Legname Pregiato',
    price: 32000, priceLabel: '€ 32.000', unit: 'per m³',
    badge: 'LUXURY',
    desc: 'Rovere (Quercus petraea) specificatamente selezionato per la produzione di botti da invecchiamento. Grana fitta con oltre 20 anelli per cm, bassa porosità e concentrazione ottimale di tannini ellagici. La stessa qualità utilizzata dai più grandi châteaux di Bordeaux.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    detail: 'Specie: Quercus petraea | Anelli/cm: >20 | Tannini ellagici: 8,2 mg/g | Stagionatura: 36 mesi all\'aperto | Uso: Doghe per botti da vino e spirits | Certificazione: CIVC',
    available: true,
  },

  // ── PRODOTTI DELLA TERRA ─────────────────────────
  {
    id: 6,
    name: 'Tartufo Bianco — Piccola Scatola',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 45000, priceLabel: '€ 45.000', unit: 'per scatola (50g)',
    badge: 'LUXURY',
    desc: 'Tuber magnatum Pico raccolto nelle tartufaie segrete della tenuta. Il microclima unico — creato dall\'intersezione di tre sorgenti sotterranee che mantengono il suolo a umidità costante tutto l\'anno — produce esemplari dal profumo incomparabile, impossibili da replicare altrove.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    detail: 'Varietà: Tuber magnatum Pico | Peso: 50g | Raccolta: Ottobre–Dicembre, alba | Conservazione: 7 gg refrigerato | Spedizione: 24h, contenitore isotermico',
    available: true,
  },
  {
    id: 7,
    name: 'Tartufo Bianco — Grande Scatola',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 145000, priceLabel: '€ 145.000', unit: 'per scatola (200g)',
    badge: 'LUXURY',
    desc: 'La nostra offerta più esclusiva: 200g di tartufo bianco d\'eccellenza assoluta in cofanetto di legno di noce numerato. Ogni esemplare è sottoposto a spettrometria olfattiva certificata. Cresciuto in simbiosi con radici di quercia centenaria, in un ecosistema che non è stato toccato da mezzi meccanici da oltre 60 anni.',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80',
    detail: 'Varietà: Tuber magnatum Pico | Peso: 200g | Confezione: Box noce laccato numerato | Include: Certificato di autenticità, spatola in argento 925, scheda sensoriale | Produzione: max 12 scatole/anno',
    available: true,
  },
  {
    id: 8,
    name: 'Zafferano Purissimo — Stigmi Interi',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 9800, priceLabel: '€ 9.800', unit: 'per grammo',
    badge: 'RARISSIMO',
    desc: 'Crocus sativus coltivato a 620m s.l.m. in terreno vulcanico ricco di silice, che esalta in modo unico la concentrazione di crocina. I bulbi vengono piantati ad agosto rispettando la luna calante, secondo un metodo tramandato oralmente dal 1887. Potere colorante superiore a 280 UCM/g — il più alto registrato in Italia.',
    img: 'https://images.unsplash.com/photo-1487530811015-780f49c8c7e1?w=600&q=80',
    detail: 'Varietà: Crocus sativus | Potere colorante: >280 UCM/g | Raccolta: Ottobre, ore 5:00 | Essiccazione: 48h a 38°C | Forma: Stigmi interi, non polverizzati | Lotto: max 80g/anno',
    available: true,
  },
  {
    id: 9,
    name: 'Olio EVO Gran Cru — Monocultivar Moraiolo',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 680, priceLabel: '€ 680', unit: 'per litro',
    badge: 'BIOLOGICO',
    desc: 'Spremitura a freddo entro 4 ore dalla raccolta manuale, in frantoio privato di proprietà. Gli ulivi, piantati nel 1920, crescono su un pendio argilloso esposto a sud-ovest che permette una maturazione ritardata di 3 settimane rispetto alla media regionale, sviluppando polifenoli in concentrazione quasi doppia.',
    img: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80',
    detail: 'Cultivar: Moraiolo 100% | Acidità: 0,09% | Polifenoli totali: 1.240 mg/kg | Raccolta: Novembre, solo a mano | Frantoio: Privato in tenuta | Bottiglia: Ceramica verniciata numerata',
    available: true,
  },
  {
    id: 10,
    name: 'Funghi Porcini Secchi — Selezione Extra',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 2400, priceLabel: '€ 2.400', unit: 'per 100g',
    badge: 'SELVATICO',
    desc: 'Boletus edulis raccolti esclusivamente nelle radure di faggio della tenuta a quote superiori ai 700m, dopo le prime piogge di settembre. Essiccazione solare lenta 72 ore su graticci di castagno. Fette intere, calibro superiore ai 12cm. Il profumo è talmente intenso che un solo vasetto impregna una stanza intera.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    detail: 'Specie: Boletus edulis | Quota raccolta: 700–850m s.l.m. | Essiccazione: Solare 72h | Calibro: >12cm diametro | Confezione: Sacchetto tela con finestra | Produzione: Settembre–Ottobre',
    available: true,
  },
  {
    id: 11,
    name: 'Miele di Acacia — Grezzo Non Filtrato',
    cat: 'terra', catLabel: 'Prodotti della Terra',
    price: 580, priceLabel: '€ 580', unit: 'per kg',
    badge: 'BIOLOGICO',
    desc: 'Miele di acacia prodotto da colonie di api autoctone (Apis mellifera ligustica) che bottinano esclusivamente sui 2.400 alberi di robinia della tenuta, lontani da qualsiasi fonte di inquinamento. Non pastorizzato, non filtrato, cristallizzazione lentissima — oltre 18 mesi a temperatura ambiente.',
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80',
    detail: 'Tipo: Acacia monoflora | Api: Apis mellifera ligustica autoctona | HMF: <5 mg/kg | Diastasi: >20 | Cristallizzazione: >18 mesi | Vasetto: 1kg vetro ambrato sigillato a cera',
    available: true,
  },

  // ── VINI & DISTILLATI ────────────────────────────
  {
    id: 12,
    name: 'Sagrantino Riserva 2015 — Magnum',
    cat: 'vini', catLabel: 'Vini & Distillati',
    price: 1800, priceLabel: '€ 1.800', unit: 'per magnum (1,5L)',
    badge: 'DOCG',
    desc: 'L\'annata 2015 è considerata la migliore degli ultimi 30 anni per il Sagrantino. Affinamento 42 mesi in barrique di rovere francese a grana fine, seguito da 24 mesi in bottiglia. Estratto secco netto straordinario: 42 g/L. Punteggio: 99/100 Wine Spectator. Produzione: sole 600 magnum.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    detail: 'Vitigno: Sagrantino 100% | Annata: 2015 | Formato: Magnum 1,5L | Affinamento: 42 mesi barrique + 24 mesi bottiglia | Alcol: 15,5% | Produzione: 600 magnum | Wine Spectator: 99/100',
    available: true,
  },
  {
    id: 13,
    name: 'Grechetto Vendemmia Tardiva — Edizione Limitata',
    cat: 'vini', catLabel: 'Vini & Distillati',
    price: 780, priceLabel: '€ 780', unit: 'per bottiglia (0,5L)',
    badge: 'RARO',
    desc: 'Vendemmia a novembre inoltrato, con acini appassiti sulla pianta fino al 60% di concentrazione zuccherina naturale. Fermentazione spontanea di 8 mesi in anfore di terracotta interrate. Il risultato è un vino dolce che abbina una freschezza sorprendente a note di zafferano, miele di zagara e vaniglia Bourbon.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    detail: 'Vitigno: Grechetto di Todi | Appassimento: 60% in pianta | Fermentazione: Anfore di terracotta interrate | Zucchero residuo: 120 g/L | Alcol: 14% | Produzione: 800 bottiglie',
    available: true,
  },
  {
    id: 14,
    name: 'Grappa Riserva Oro — 20 Anni di Invecchiamento',
    cat: 'vini', catLabel: 'Vini & Distillati',
    price: 2200, priceLabel: '€ 2.200', unit: 'per bottiglia (0,7L)',
    badge: 'LUXURY',
    desc: 'Grappa ottenuta da vinacce di Sagrantino distillata in alambicco discontinuo a vapore, invecchiata 20 anni in una batteria di 5 botti decrescenti: rovere, ciliegio, castagno, gelso, acacia. Colore ambra scuro con riflessi dorati. Solo 180 bottiglie prodotte ogni anno — ciascuna con numero di serie inciso a mano.',
    img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&q=80',
    detail: 'Materia prima: Vinacce fresche di Sagrantino | Distillazione: Vapore discontinuo | Invecchiamento: 20 anni in 5 botti diverse | Alcol: 46% | Produzione: 180 bottiglie/anno | Bottiglia: Cristallo Bohemia con tappo a vite in argento',
    available: true,
  },
  {
    id: 15,
    name: 'Aceto Balsamico Tradizionale — 40 Anni',
    cat: 'vini', catLabel: 'Vini & Distillati',
    price: 6500, priceLabel: '€ 6.500', unit: 'per 100ml',
    badge: 'RARISSIMO',
    desc: 'Aceto balsamico invecchiato 40 anni in una batteria di 7 botti risalente al 1882. La densità è tale che scende dalla bocca della bottiglia come un filo di seta — densità 1,42 g/mL. Ogni annata produce meno di 3 litri totali. Il profumo di legno, fico secco e tabacco persiste per ore dopo l\'assaggio.',
    img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&q=80',
    detail: 'Invecchiamento: 40 anni | Botti: 7 essenze (rovere, ciliegio, castagno, gelso, ginepro, frassino, acacia) | Densità: 1,42 g/mL | Produzione annua: <3 litri | Bottiglia: Design Giugiaro in vetro soffiato | Certificazione: ABTM',
    available: true,
  },

  // ── CARNI PREGIATE ───────────────────────────────
  {
    id: 16,
    name: 'Filetto di Wagyu Terrassaggia — A5',
    cat: 'carni', catLabel: 'Carni Pregiate',
    price: 3800, priceLabel: '€ 3.800', unit: 'per kg',
    badge: 'LUXURY',
    desc: 'Wagyu incrociato con Chianina allevato nella nostra tenuta per un minimo di 36 mesi, nutrito con una dieta certificata di fieno di primo taglio, sake di riso e birra artigianale prodotta in fattoria. Il marmorizzazione (BMS 12) supera il parametro A5 giapponese. Frollatura 90 giorni in cella umida a 2°C.',
    img: 'https://images.unsplash.com/photo-1544025162-d76594e98694?w=600&q=80',
    detail: 'Razza: Wagyu × Chianina F2 | Età macellazione: 36 mesi | BMS (marmorizzazione): 12 | Frollatura: 90 giorni dry-aged | Dieta: Fieno primo taglio + sake + birra artigianale | Certificazione: Analisi genetica allegata',
    available: true,
  },
  {
    id: 17,
    name: 'Costata di Chianina Storica — Intera',
    cat: 'carni', catLabel: 'Carni Pregiate',
    price: 1400, priceLabel: '€ 1.400', unit: 'per kg',
    badge: 'BIOLOGICO',
    desc: 'Chianina di linea genetica pura risalente al ceppo documentato del 1923, allevata allo stato semibrado su 80 ettari di pascolo naturale all\'interno della tenuta. Macellata a 42 mesi — il doppio rispetto allo standard commerciale — sviluppando una massa muscolare e una profondità di sapore che non ha paragoni sul mercato italiano.',
    img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80',
    detail: 'Razza: Chianina, linea genetica documentata dal 1923 | Allevamento: Semibrado, 80 ettari pascolo naturale | Età: 42 mesi | Frollatura: 60 giorni | Peso costata intera: 1,8–2,4 kg | Disponibilità: Limitata',
    available: true,
  },
  {
    id: 18,
    name: 'Cervo della Tenuta — Lombata Intera',
    cat: 'carni', catLabel: 'Carni Pregiate',
    price: 980, priceLabel: '€ 980', unit: 'per kg',
    badge: 'SELVATICO',
    desc: 'Cervo maschio adulto (Cervus elaphus) cacciato in tenuta chiusa in periodo di caccia regolamentare. La dieta esclusivamente selvatica — ghiande, funghi, bacche e erbe aromatiche spontanee — conferisce alla carne un profilo aromatico complesso e un bassissimo contenuto di grassi saturi (1,8%). Spedizione in cella frigorifera dedicata.',
    img: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=600&q=80',
    detail: 'Specie: Cervus elaphus maschio adulto | Provenienza: Tenuta chiusa Terrassaggia | Dieta: Ghiande, funghi, erbe selvatiche | Grassi saturi: 1,8% | Proteine: 28% | Spedizione: Cella frigorifera dedicata 0–2°C',
    available: true,
  },
  {
    id: 19,
    name: 'Agnello da Latte Sardo — Carcassa Intera',
    cat: 'carni', catLabel: 'Carni Pregiate',
    price: 1650, priceLabel: '€ 1.650', unit: 'per carcassa (~8kg)',
    badge: null,
    desc: 'Agnello da latte di razza Sarda allevato nella tenuta con metodo della madre balia. Macellato a 45 giorni di vita, nutrito esclusivamente di latte materno integrato con erbe aromatiche spontanee raccolte dalla fattoria. Carni rosate, sapore dolce e delicato, tenerezza eccezionale. Richiestissimo dai ristoranti stellati romani.',
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    detail: 'Razza: Sarda | Età macellazione: 45 giorni | Alimentazione: Latte materno + erbe spontanee | Peso carcassa: 7–9 kg | Disponibilità: Stagionale (Gennaio–Aprile) | Richiesta minima: 3 carcasse',
    available: true,
  },
  {
    id: 20,
    name: 'Cinghiale Selvatico — Mezzena',
    cat: 'carni', catLabel: 'Carni Pregiate',
    price: 620, priceLabel: '€ 620', unit: 'per kg',
    badge: 'SELVATICO',
    desc: 'Cinghiale (Sus scrofa) adulto cacciato nei boschi di quercia e nocciolo della tenuta. La dieta ricchissima di ghiande, tartufi selvatici e radici conferisce alla carne note aromatiche complesse e un colore scuro intenso. Frollatura 14 giorni in cella. Ideale per ragù di lunga cottura, salsicce artigianali e umidi invernali.',
    img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    detail: 'Specie: Sus scrofa adulto | Dieta: Ghiande, tartufi selvatici, radici | Frollatura: 14 giorni | Resa in carne netta: ~55% | Disponibilità: Settembre–Febbraio | Minimo ordine: 1 mezzena (~25 kg)',
    available: true,
  },

  // ── LATTE & DERIVATI ─────────────────────────────
  {
    id: 21,
    name: 'Latte Crudo di Vacca Podolica — Consegna Quotidiana',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 85, priceLabel: '€ 85', unit: 'per litro',
    badge: 'BIOLOGICO',
    desc: 'Latte crudo non pastorizzato di vacche Podoliche allevate in libertà su pascolo naturale. La Podolica, razza autoctona del centro Italia, produce un latte con un contenuto in Omega-3 4 volte superiore alla vacca Frisona da stalla, con note erbacee naturali che variano stagionalmente. Consegna entro 6 ore dalla mungitura.',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80',
    detail: 'Razza: Podolica | Alimentazione: Pascolo naturale 365 giorni | Omega-3: 4× rispetto a Frisona | Cellule somatiche: <80.000/mL | Trattamento: Nessuno | Consegna: Entro 6h dalla mungitura | Minimo ordine: 20L',
    available: true,
  },
  {
    id: 22,
    name: 'Burro di Malga Centrifugato — Estate',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 480, priceLabel: '€ 480', unit: 'per kg',
    badge: 'STAGIONALE',
    desc: 'Burro prodotto dalla panna centrifugata del latte delle vacche Podoliche durante il periodo estivo di alpeggio, quando la dieta ricca di fiori alpini (trifoglio, genziana, achillea) produce un burro color ambra naturale con un contenuto in beta-carotene altissimo. Zangolatura tradizionale a freddo, non salato.',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    detail: 'Materia prima: Panna centrifugata, vacche Podoliche in alpeggio | Stagione: Giugno–Settembre | Colore: Ambra naturale (beta-carotene) | Zangolatura: Tradizionale a freddo | Sale: Non salato | Peso: 250g, carta pergamena cerata',
    available: true,
  },
  {
    id: 23,
    name: 'Pecorino di Grotta — Stagionatura 48 Mesi',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 1800, priceLabel: '€ 1.800', unit: 'per kg',
    badge: 'RARO',
    desc: 'Pecorino prodotto con latte crudo intero di pecore Sopravvissane, stagionato 48 mesi nelle grotte tufaree naturali della tenuta, a temperatura costante di 10–12°C e umidità 95%. La lunga maturazione produce una pasta granulosa ricca di cristalli di tirosina e un sapore intenso, piccante, con finale lunghissimo di noce e fieno secco.',
    img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80',
    detail: 'Latte: Ovino crudo intero, Sopravvissana | Stagionatura: 48 mesi in grotta tufarea | Temperatura grotta: 10–12°C | Umidità: 95% | Peso forma: 2,5–3,5 kg | Crosta: Naturale con vinacce di Sagrantino | Produzione: Solo 40 forme/anno',
    available: true,
  },
  {
    id: 24,
    name: 'Mozzarella di Bufala della Tenuta — Freschissima',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 580, priceLabel: '€ 580', unit: 'per kg',
    badge: 'BIOLOGICO',
    desc: 'Mozzarella prodotta giornalmente con latte di bufale allevate nel settore umido della tenuta, vicino alle sorgenti naturali. La filatura avviene a mano, in acqua a 92°C, con una tecnica tramandata dal casaro storico di Paestum assunto in esclusiva. Consumare entro 24 ore: non esiste nulla di più fresco sul mercato.',
    img: 'https://images.unsplash.com/photo-1505471768190-275e2ad070b0?w=600&q=80',
    detail: 'Latte: Bufalino intero biologico, mungitura mattutina | Filatura: A mano in acqua a 92°C | Produzione: Giornaliera | Consumo: Entro 24h | Sale: Acqua salata naturale | Minimo ordine: 5 kg | Consegna: Solo mattina',
    available: true,
  },
  {
    id: 25,
    name: 'Ricotta di Capra — Affumicata al Ginepro',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 320, priceLabel: '€ 320', unit: 'per kg',
    badge: null,
    desc: 'Ricotta fresca di latte di capra Saanen affumicata per 6 ore con legno di ginepro e bacche raccolti dalla tenuta. Il fumo dolce e resinoso si bilancia perfettamente con la naturale acidità lattica della capra. Struttura compatta all\'esterno, cremosa all\'interno. Utilizzata da 3 ristoranti bistellati Michelin a Roma.',
    img: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&q=80',
    detail: 'Latte: Caprino intero, Saanen | Affumicatura: 6h, legno e bacche di ginepro della tenuta | Umidità: 62% | Shelf life: 12 giorni refrigerato | Formato: 500g in fuscella | Minimo ordine: 5 pezzi',
    available: true,
  },
  {
    id: 26,
    name: 'Parmigiano di Fattoria — 60 Mesi',
    cat: 'latte', catLabel: 'Latte & Derivati',
    price: 2400, priceLabel: '€ 2.400', unit: 'per kg',
    badge: 'LUXURY',
    desc: 'Prodotto con latte di Vacca Rossa Reggiana — razza quasi estinta con meno di 3.000 esemplari in Italia — allevata nella tenuta. Stagionatura 60 mesi in magazzino climatizzato con ventilazione naturale. La pasta è di colore ambra scuro, granulosa, con cristalli di tirosina di 3–4mm. Ogni forma pesa circa 38 kg e viene numerata.',
    img: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    detail: 'Latte: Vacca Rossa Reggiana (<3.000 esemplari in Italia) | Stagionatura: 60 mesi | Peso forma: ~38 kg | Cristalli tirosina: 3–4mm | Produzione: 18 forme/anno',
    available: true,
  },

  // ── LEGNAME AGGIUNTIVI ────────────────────────────
  { id:27, name:'Pino Cembro Alpino — Tavole Rustiche', cat:'legname', catLabel:'Legname Pregiato', price:8500, priceLabel:'€ 8.500', unit:'per m³', badge:null, desc:'Pino cembro (Pinus cembra) proveniente da quota 1.800m s.l.m., cresciuto per 90 anni in condizioni di gelo intenso che conferiscono alla fibra una compattezza fuori dal comune. Profumo naturale persistente di vaniglia alpina. Usato dai più prestigiosi scultori tirolesi.', detail:'Specie: Pinus cembra | Quota: 1.800m | Età: 90 anni | Profumo: Vaniglia naturale | Uso: Scultura, interni di lusso, casseforti', available:true },
  { id:28, name:'Olivo Secolare — Tronchi da Tornio', cat:'legname', catLabel:'Legname Pregiato', price:48000, priceLabel:'€ 48.000', unit:'per m³', badge:'LUXURY', desc:'Legno di olivo estratto da piante ultracentenarie abbattute solo in seguito a eventi atmosferici, mai per scelta produttiva. La venatura bicolore bianco-marrone e la durezza estrema (Brinell 85) lo rendono il legno da tornio più pregiato del Mediterraneo. Ogni pezzo è unico e documentato.', detail:'Specie: Olea europaea | Età piante: >200 anni | Durezza Brinell: 85 | Venatura: Bicolore naturale | Disponibilità: Imprevedibile, stock limitatissimo', available:true },
  { id:29, name:'Castagno Montano — Travi Antisismiche', cat:'legname', catLabel:'Legname Pregiato', price:7800, priceLabel:'€ 7.800', unit:'per m³', badge:'BIOLOGICO', desc:'Castagno (Castanea sativa) cresciuto su suolo acido a 650m, con naturale concentrazione di tannini che lo rende resistente a insetti, muffe e umidità senza alcun trattamento chimico. Certificato per uso strutturale antisismico. Stagionatura 4 anni.', detail:'Specie: Castanea sativa | Quota: 650m | Tannini: 12% | Stagionatura: 4 anni | Certificazione: UNI EN 338 classe C24 | Trattamenti chimici: Nessuno', available:true },
  { id:30, name:'Acero Riccio — Venato Flammé', cat:'legname', catLabel:'Legname Pregiato', price:15000, priceLabel:'€ 15.000', unit:'per m³', badge:'RARO', desc:'Acero riccio (Acer platanoides) con venatura flammé — effetto ottico naturale causato da una mutazione genetica presente in meno del 3% degli aceri — che produce un riflesso cangiante dorato a seconda dell\'angolo di luce. Usato dai costruttori di violini Stradivari.', detail:'Specie: Acer platanoides | Venatura: Flammé naturale (3% degli esemplari) | Uso tradizionale: Fondali di violini | Stagionatura: 8 anni | Ogni tavola: Fotografata e catalogata', available:true },
  { id:31, name:'Larice delle Alpi — Prima Scelta', cat:'legname', catLabel:'Legname Pregiato', price:11000, priceLabel:'€ 11.000', unit:'per m³', badge:null, desc:'Larice (Larix decidua) proveniente da coltivazione privata sulle pendici orientali delle Alpi. Legno resinoso naturalmente, durabilità in esterno certificata oltre 80 anni senza trattamento. La colorazione rosso-arancio si intensifica nel tempo diventando quasi dorata.', detail:'Specie: Larix decidua | Durabilità classe: 3–4 (EN 350) | Resina naturale: 8% | Uso: Rivestimenti esterni, decking, strutture esposte | Stagionatura: 3 anni', available:true },
  { id:32, name:'Gelso Bianco Invecchiato', cat:'legname', catLabel:'Legname Pregiato', price:22000, priceLabel:'€ 22.000', unit:'per m³', badge:'RARO', desc:'Gelso bianco (Morus alba) con invecchiamento naturale 10 anni post-abbattimento. Il legno sviluppa nel tempo una colorazione miele intenso irripetibile e una durezza paragonabile al teak. Tradizionalmente usato per archi da tiro e attrezzi musicali a fiato.', detail:'Specie: Morus alba | Invecchiamento post-taglio: 10 anni | Durezza: Simile al teak | Colore: Miele intenso | Uso storico: Archi, strumenti a fiato, oggettistica', available:true },
  { id:33, name:'Bosso Buxus — Il Legno più Duro d\'Europa', cat:'legname', catLabel:'Legname Pregiato', price:38000, priceLabel:'€ 38.000', unit:'per m³', badge:'RARISSIMO', desc:'Bosso (Buxus sempervirens) — il legno più duro e denso d\'Europa (densità 960 kg/m³) — disponibile solo in piccole sezioni data la crescita lentissima della pianta. Usato storicamente per blocchi da stampa, ingranaggi di orologi e strumenti chirurgici. Le nostre piante hanno oltre 150 anni.', detail:'Specie: Buxus sempervirens | Densità: 960 kg/m³ | Durezza Brinell: 110 | Età piante: >150 anni | Sezioni disponibili: Max 25cm diametro | Uso: Intaglio, orologeria, strumenti di precisione', available:true },
  { id:34, name:'Pero Selvatico — Radica', cat:'legname', catLabel:'Legname Pregiato', price:19500, priceLabel:'€ 19.500', unit:'per m³', badge:'RARO', desc:'Radica di pero selvatico (Pyrus pyraster) con venatura a occhio di pernice formatasi per decenni di crescita stressata. Colore rosa-brunastro, lucidatura naturale eccezionale. Ogni pezzo è unico. Ricercatissimo per pipe da fumo di lusso, calcio di fucili di rappresentanza e oggetti da scrivania.', detail:'Specie: Pyrus pyraster | Tipo: Radica (nodo radicale) | Venatura: Occhio di pernice naturale | Lucidatura: Grado A specchio | Uso: Pipe, calcio fucili, oggettistica esclusiva', available:true },
  { id:35, name:'Carpino Bianco — Stock Strutturale', cat:'legname', catLabel:'Legname Pregiato', price:8900, priceLabel:'€ 8.900', unit:'per m³', badge:null, desc:'Carpino bianco (Carpinus betulus) con fibratura intrecciata che lo rende quasi impossibile da spaccare. Usato da secoli per ruote di mulino, camme, manici di attrezzi e parquet di altissima resistenza. Il nostro stock proviene da bosco governato a ceduo ogni 40 anni.', detail:'Specie: Carpinus betulus | Gestione: Ceduo governato 40 anni | Durezza Brinell: 72 | Caratteristica: Fibra intrecciata anti-rottura | Uso: Pavimenti ultra-resistenti, ruote, camme', available:true },
  { id:36, name:'Tiglio di Pianura — Scultura', cat:'legname', catLabel:'Legname Pregiato', price:6200, priceLabel:'€ 6.200', unit:'per m³', badge:'BIOLOGICO', desc:'Tiglio (Tilia cordata) da pianura alluvionale con fibra finissima e omogenea, ideale per intaglio e scultura. Tradizionalmente usato dai maestri scultori bavaresi per altari e pale d\'altare. La nostra coltivazione è priva di qualsiasi trattamento dalla piantumazione.', detail:'Specie: Tilia cordata | Fibra: Finissima e omogenea | Lavorabilità: Eccellente, senza nodi | Stagionatura: 3 anni | Uso storico: Scultura sacra, intaglio ornamentale | Trattamenti: Zero', available:true },

  // ── PRODOTTI DELLA TERRA AGGIUNTIVI ──────────────
  { id:37, name:'Crema di Tartufo Bianco Premium', cat:'terra', catLabel:'Prodotti della Terra', price:2800, priceLabel:'€ 2.800', unit:'per 180ml', badge:'LUXURY', desc:'Crema con 45% di tartufo bianco fresco lavorata a freddo entro 2 ore dalla raccolta per preservare integralmente il bouquet volatile. A differenza dei prodotti industriali che usano aroma artificiale di bis-metiltiometano, la nostra crema contiene esclusivamente tartufo autentico.', detail:'Tartufo bianco: 45% | Lavorazione: A freddo entro 2h dalla raccolta | Senza aromi artificiali | Conservazione: 12 mesi | Apertura: Consumare entro 3 gg refrigerato', available:true },
  { id:38, name:'Olio al Tartufo Bianco — Infusione a Freddo', cat:'terra', catLabel:'Prodotti della Terra', price:1200, priceLabel:'€ 1.200', unit:'per 250ml', badge:'LUXURY', desc:'Olio EVO della tenuta infuso a freddo per 21 giorni con lamelle di tartufo bianco fresco. Nessun aroma aggiunto. Il processo richiede un rapporto 1:1 tra olio e tartufo in peso, rendendo ogni bottiglia un prodotto di costo reale elevatissimo. Resa: solo 80 bottiglie per stagione.', detail:'Base: Olio EVO Moraiolo tenuta | Tartufo bianco infuso: 1:1 in peso | Metodo: Infusione a freddo 21 giorni | Produzione: 80 bottiglie/stagione | Aroma artificiale: Assente', available:true },
  { id:39, name:'Vaniglia Bourbon del Madagascar — Bacche Intere', cat:'terra', catLabel:'Prodotti della Terra', price:1800, priceLabel:'€ 1.800', unit:'per 100g', badge:'RARO', desc:'Vaniglia Bourbon (Vanilla planifolia) coltivata in cooperativa esclusivista in Madagascar e selezionata dalla nostra tenuta durante visite annuali. Solo bacche Grade A Extra: lunghezza minima 18cm, contenuto in vanillina >2,5%, flessibili e brillanti. Confezionamento ermetico sottovuoto.', detail:'Varietà: Bourbon V. planifolia | Origine: Madagascar, cooperativa esclusiva | Grado: Extra A | Lunghezza media: 19,5 cm | Vanillina: >2,5% | Conservazione: Sottovuoto, 3 anni', available:true },
  { id:40, name:'Pepe Lungo di Giava — Selezione Tenuta', cat:'terra', catLabel:'Prodotti della Terra', price:420, priceLabel:'€ 420', unit:'per 100g', badge:null, desc:'Pepe lungo (Piper longum) di Giava — quasi introvabile sul mercato europeo — selezionato dalla tenuta tra i produttori di quota superiore a 800m. Contenuto in piperina 8x superiore al pepe nero comune. Note di cannella, noce moscata e pepe in un profilo aromatico complesso irripetibile.', detail:'Specie: Piper longum | Origine: Giava, quota >800m | Piperina: 8× pepe nero | Note: Cannella, noce moscata, pepe | Forma: Bacche intere essiccate | Disponibilità: Annuale limitata', available:true },
  { id:41, name:'Miele di Castagno Selvatico Amaro', cat:'terra', catLabel:'Prodotti della Terra', price:680, priceLabel:'€ 680', unit:'per kg', badge:'BIOLOGICO', desc:'Miele monoflora di castagno selvatico con concentrazione di sostanze amare (ellagitannini) altissima — HMF <2 mg/kg. Non cristallizza mai per l\'altissimo contenuto in fruttosio. Colore quasi nero con sfumature ambrate. Usato da tre pasticcieri stellati romani come ingrediente segreto.', detail:'Tipo: Castagno selvatico, monoflora | Colore: Quasi nero | HMF: <2 mg/kg | Fruttosio: 46% | Cristallizzazione: Non avviene | Acidità libera: 18 meq/kg', available:true },
  { id:42, name:'Pistacchio Verde di Bronte — Riserva', cat:'terra', catLabel:'Prodotti della Terra', price:950, priceLabel:'€ 950', unit:'per kg', badge:'RARO', desc:'Pistacchio DOP di Bronte (Pistacia vera) dal caratteristico colore verde smeraldo intenso — dovuto all\'altissima concentrazione di clorofilla — selezionato esclusivamente dalla categoria "extra" e spedito entro 48 ore dalla sgusciatura. Contenuto grasso: 58%, tutto acidi grassi monoinsaturi.', detail:'Varietà: Pistacia vera DOP Bronte | Categoria: Extra (soli frutti interi) | Colore: Verde smeraldo | Grassi: 58% monoinsaturi | Raccolta: Settembre, annata alternata | Spedizione: Entro 48h dalla sgusciatura', available:true },
  { id:43, name:'Capperi di Pantelleria Sotto Sale', cat:'terra', catLabel:'Prodotti della Terra', price:320, priceLabel:'€ 320', unit:'per 100g', badge:null, desc:'Capperi (Capparis spinosa) DOP di Pantelleria, calibro 7 (il più piccolo e pregiato), conservati solo in sale marino di Trapani senza aceto. Tenuta a selezionarli direttamente dall\'isola ogni agosto. Aroma esplosivo, glucosinolati intatti, struttura carnosa. Richiede dissalatura 15 minuti in acqua fredda.', detail:'Specie: Capparis spinosa DOP | Calibro: 7 (il più pregiato) | Conservante: Solo sale marino Trapani | Senza aceto | Raccolta: Agosto, a mano | Glucosinolati: Intatti', available:true },
  { id:44, name:'Farro Monococco Macinato a Pietra', cat:'terra', catLabel:'Prodotti della Terra', price:380, priceLabel:'€ 380', unit:'per kg', badge:'BIOLOGICO', desc:'Farro monococco (Triticum monococcum) — il cereale più antico del mondo — coltivato con sementi risalenti a varietà pre-industriali recuperate dall\'Università di Torino. Macinato a pietra fredda ogni settimana per preservare germe e crusca. Proteine: 18%, ferro biodisponibile 4× il riso.', detail:'Varietà: Triticum monococcum, semente storica | Coltivazione: Biologica certificata | Macinatura: A pietra fredda, settimanale | Proteine: 18% | Ferro: 4× riso | Sacchetto: Carta kraft compostabile', available:true },
  { id:45, name:'Corbezzolo Selvatico — Frutti Essiccati', cat:'terra', catLabel:'Prodotti della Terra', price:480, priceLabel:'€ 480', unit:'per kg', badge:'SELVATICO', desc:'Corbezzolo (Arbutus unedo) raccolto a mano nelle macchie mediterranee della tenuta a ottobre inoltrato, quando il frutto raggiunge la massima concentrazione zuccherina. Essiccazione solare 5 giorni. Note di fragola, miele e rosa. Antiossidanti (polifenoli): 4.200 mg/100g — record mondiale.', detail:'Specie: Arbutus unedo | Raccolta: Ottobre, mano | Essiccazione: Solare 5 giorni | Polifenoli: 4.200 mg/100g | Zuccheri: 62% (naturali) | Uso: Pasticceria, infusi, distillazione', available:true },
  { id:46, name:'Zafferano in Polvere — Monodosi Oro', cat:'terra', catLabel:'Prodotti della Terra', price:6500, priceLabel:'€ 6.500', unit:'per grammo', badge:'RARISSIMO', desc:'Zafferano macinato a pietra in monodosi da 0,125g in capsule di vetro borosilicato. Ogni monodose è sufficiente per colorare e aromatizzare 8 porzioni di risotto. La macinatura avviene su ordinazione per garantire che i terpeni volatili responsabili dell\'aroma siano intatti all\'apertura.', detail:'Base: Zafferano Crocus sativus tenuta | Macinatura: Su ordinazione | Monodose: 0,125g in capsula vetro | Potere colorante: >280 UCM/g | Shelf life post-macinatura: 6 mesi | Minimo ordine: 5g', available:true },
  { id:47, name:'Confettura di Rose Selvatiche al Moscato', cat:'terra', catLabel:'Prodotti della Terra', price:480, priceLabel:'€ 480', unit:'per vasetto 250g', badge:null, desc:'Petali di rosa canina (Rosa canina) raccolti all\'alba con la rugiada ancora presente per massimizzare l\'apporto di vitamina C e terpeni aromatici, cotti brevemente con Moscato d\'Asti DOCG e zucchero di canna grezzo. Confettura dal colore salmone brillante e aroma incomparabile.', detail:'Frutto: Petali Rosa canina, raccolta alba | Vino: Moscato d\'Asti DOCG | Zucchero: Canna grezzo | Vitamina C: 800 mg/100g | Senza pectina aggiunta | Produzione: Maggio, limitatissima', available:true },
  { id:48, name:'Sale delle Tartufaie — Tartufo Bianco 20%', cat:'terra', catLabel:'Prodotti della Terra', price:950, priceLabel:'€ 950', unit:'per 200g', badge:'LUXURY', desc:'Sale marino integrale di Cervia (IGP) aromatizzato con tartufo bianco essiccato al 20% — il doppio rispetto a qualsiasi prodotto comparabile sul mercato. La lavorazione avviene in camera refrigerata per preservare i composti volatili solforati del tartufo. Profumo inebriante già alla sola apertura del vasetto.', detail:'Sale: Cervia IGP | Tartufo bianco essiccato: 20% | Lavorazione: Camera refrigerata | Composti solforati: Intatti | Vasetto: 200g vetro, cucchiaino ulivo incluso | Shelf life: 24 mesi', available:true },

  // ── VINI AGGIUNTIVI ───────────────────────────────
  { id:49, name:'Rosso della Tenuta Riserva 2017', cat:'vini', catLabel:'Vini & Distillati', price:620, priceLabel:'€ 620', unit:'per bottiglia (0,75L)', badge:'DOCG', desc:'Blend proprietario di Sangiovese (60%) e Montepulciano (40%) da vigneti ultracinquantenari. Affinamento 30 mesi in tonneaux di rovere francese e 18 in bottiglia. Bouquet di ciliegia nera, tabacco, chiodo di garofano. Temperatura ottimale: 18°C. Tappo in sughero naturale di Sardegna 1+1.', detail:'Vitigni: Sangiovese 60%, Montepulciano 40% | Età vigne: >50 anni | Affinamento: 30 mesi tonneaux + 18 mesi bottiglia | Alcol: 14,5% | Produzione: 3.200 bottiglie | Tappo: Sughero Sardegna', available:true },
  { id:50, name:'Bianco Superiore Amphora 2022', cat:'vini', catLabel:'Vini & Distillati', price:480, priceLabel:'€ 480', unit:'per bottiglia (0,75L)', badge:null, desc:'Trebbiano Spoletino in purezza fermentato e affinato 8 mesi in anfore di terracotta interrate nel suolo argilloso della tenuta. Vino arancione con tannini da buccia macerata 30 giorni. Profilo ossidativo controllato: miele d\'acacia, noci, bergamotto. Uno dei rari "orange wine" italiani di questo livello.', detail:'Vitigno: Trebbiano Spoletino 100% | Macerazione: 30 giorni in anfora | Affinamento: 8 mesi anfore interrate | Tipo: Orange wine | Solfiti aggiunti: Nessuno | Alcol: 13,5%', available:true },
  { id:51, name:'Metodo Classico Brut Riserva — 96 Mesi', cat:'vini', catLabel:'Vini & Distillati', price:980, priceLabel:'€ 980', unit:'per bottiglia (0,75L)', badge:'LUXURY', desc:'Spumante metodo classico con 96 mesi di sosta sui lieviti — 8 anni — da uve Chardonnay e Pinot Nero coltivate a 600m. Dosaggio zero, senza zucchero aggiunto. Bollicine finissime, perlage persistente oltre 15 minuti. Colore oro antico. Note di crosta di pane, lievito, mela cotogna e iodio.', detail:'Vitigni: Chardonnay 60%, Pinot Nero 40% | Sosta sui lieviti: 96 mesi | Dosaggio: Zero | Pressione: 5,5 atm | Alcol: 12,5% | Produzione: 1.800 bottiglie | Sboccatura: Manuale', available:true },
  { id:52, name:'Passito di Viognier — Sole e Silenzio', cat:'vini', catLabel:'Vini & Distillati', price:920, priceLabel:'€ 920', unit:'per bottiglia (0,5L)', badge:'RARO', desc:'Viognier in appassimento su graticci di canna per 4 mesi in fruttaio ventilato naturalmente. Fermentazione parziale interrotta per conservare 140 g/L di zucchero naturale. Aromi intensissimi di albicocca disidratata, fiori d\'arancio, miele millefiori e zafferano. Lunghezza in bocca: oltre 60 secondi.', detail:'Vitigno: Viognier 100% | Appassimento: 4 mesi su graticci canna | Zucchero residuo: 140 g/L | Alcol: 13% | Fermentazione: Interrotta manualmente | Produzione: 1.000 bottiglie', available:true },
  { id:53, name:'Amaro della Tenuta — Erbe Selvatiche', cat:'vini', catLabel:'Vini & Distillati', price:380, priceLabel:'€ 380', unit:'per bottiglia (0,7L)', badge:null, desc:'Amaro digestivo prodotto con 34 erbe officinali raccolte a mano nella tenuta tra maggio e settembre. La ricetta è custodita dalla famiglia dal 1923. Base alcolica: Grappa di Sagrantino. Macerazione per 180 giorni a temperatura controllata. Zucchero: 80 g/L da miele di acacia della tenuta stessa.', detail:'Erbe officinali: 34 specie da raccolta diretta | Ricetta: Dal 1923, proprietà familiare | Base: Grappa di Sagrantino | Macerazione: 180 giorni | Zucchero: Miele acacia tenuta 80 g/L | Alcol: 32%', available:true },
  { id:54, name:'Gin Botanico Terrassaggia — Edizione Estate', cat:'vini', catLabel:'Vini & Distillati', price:580, priceLabel:'€ 580', unit:'per bottiglia (0,7L)', badge:'BIOLOGICO', desc:'Gin ottenuto per distillazione di 22 botaniche raccolte nella tenuta in estate: ginepro, rosmarino, lavanda, mirto, corbezzolo, timo serpillo, finocchietto selvatico e altro. Distillazione in alambicco a vapore discontinuo da 100L. Solo 400 bottiglie per annata. Colore cristallino, aroma esplosivo.', detail:'Botaniche: 22 specie raccolte in tenuta | Distillazione: Alambicco vapore 100L | Alcol: 43% | Produzione: 400 bottiglie/anno | Senza coloranti | Botanica dominante: Ginepro + Corbezzolo', available:true },
  { id:55, name:'Whisky di Segale Invecchiato in Rovere Terrassaggia', cat:'vini', catLabel:'Vini & Distillati', price:1400, priceLabel:'€ 1.400', unit:'per bottiglia (0,7L)', badge:'LUXURY', desc:'Whisky di segale umbra distillato in tenuta e invecchiato 12 anni in botti di rovere di Terrassaggia precedentemente utilizzate per il Sagrantino Riserva. La doppia maturazione conferisce note di frutta rossa, vaniglia e spezie orientali uniche al mondo. Progetto avviato nel 2012, prima uscita 2024.', detail:'Cereale: Segale umbra 100% | Distillazione: In tenuta, alambicco pot still | Invecchiamento: 12 anni in botti ex-Sagrantino | Alcol: 48% | Prima uscita: 2024 | Produzione: 240 bottiglie', available:true },
  { id:56, name:'Sambuca al Tartufo — Unica al Mondo', cat:'vini', catLabel:'Vini & Distillati', price:680, priceLabel:'€ 680', unit:'per bottiglia (0,5L)', badge:'RARISSIMO', desc:'Il liquore più insolito della nostra produzione: sambuca tradizionale infusa con tartufo nero essiccato per 90 giorni. L\'aneto e il finocchietto della sambuca si fondono con le note terrose del tartufo creando un profilo aromatico a dir poco unico — amato dai bartender della scena cocktail romana.', detail:'Base: Sambuca artigianale (anice stellato + finocchio) | Tartufo nero essiccato: Infusione 90 giorni | Alcol: 38% | Zucchero: 100 g/L | Produzione: 200 bottiglie/anno | Colore: Ambra con riflessi dorati', available:true },
  { id:57, name:'Vermouth Bianco Riserva Artigianale', cat:'vini', catLabel:'Vini & Distillati', price:420, priceLabel:'€ 420', unit:'per bottiglia (0,75L)', badge:null, desc:'Vermouth prodotto con vino bianco Grechetto della tenuta arricchito con macerato di 28 erbe alpine e aromatizzato con assenzio romano, genziana e rabarbaro cinese. Zucchero: 70 g/L da mosto cotto. Dolce, amaro ed erbaceo in perfetto equilibrio. Invecchiamento 12 mesi in botti di castagno da 225L.', detail:'Base: Grechetto tenuta | Erbe: 28 specie | Piante chiave: Assenzio, genziana, rabarbaro | Invecchiamento: 12 mesi botti castagno 225L | Zucchero: Mosto cotto 70 g/L | Alcol: 17%', available:true },
  { id:58, name:'Vin Santo 15 Anni — Occhio di Pernice', cat:'vini', catLabel:'Vini & Distillati', price:1200, priceLabel:'€ 1.200', unit:'per bottiglia (0,375L)', badge:'LUXURY', desc:'Vin Santo da uve Sangiovese (Occhio di Pernice) appassite 6 mesi e fermentate in caratelli sigillati per 15 anni. Il colore è ambra cupo. Note di fico secco, dattero, cacao amaro e caffè. Zucchero: 180 g/L. Acidità vivace che bilancia la dolcezza. Solo 180 bottiglie per annata.', detail:'Vitigno: Sangiovese (Occhio di Pernice) | Appassimento: 6 mesi | Fermentazione in caratelli: 15 anni | Zucchero residuo: 180 g/L | Acidità: 8 g/L | Produzione: 180 bottiglie | Colore: Ambra cupo', available:true },

  // ── CARNI AGGIUNTIVE ──────────────────────────────
  { id:59, name:'Piccione Selvatico della Tenuta — Intero', cat:'carni', catLabel:'Carni Pregiate', price:580, priceLabel:'€ 580', unit:'per pezzo (~500g)', badge:'SELVATICO', desc:'Piccione selvatico (Columba palumbus) cacciato nella tenuta in periodo regolamentare. La dieta a base di ghiande, bacche e semi spontanei conferisce alla carne un rosso intenso e un sapore ricco di ferro e selvatico equilibrato. Eviscerato e confezionato entro 4 ore dall\'abbattimento.', detail:'Specie: Columba palumbus | Dieta: Ghiande, bacche selvatiche | Peso medio: 480–520g | Lavorazione: Entro 4h | Conservazione: Sottovuoto 8 giorni | Minimo ordine: 6 pezzi', available:true },
  { id:60, name:'Anatra Muta della Tenuta — Petto Intero', cat:'carni', catLabel:'Carni Pregiate', price:420, priceLabel:'€ 420', unit:'per kg', badge:'BIOLOGICO', desc:'Anatra muta (Cairina moschata) allevata semibrada nella tenuta con accesso a specchi d\'acqua naturali. Macellata a 16 settimane per massima presenza di grasso intramuscolare. Il petto — pesante mediamente 550g — è considerato il foie gras povero: strato adiposo abbondante e carne saporita.', detail:'Razza: Cairina moschata | Età macellazione: 16 settimane | Alimentazione: Seminaturale + mais biologico | Petto medio: 550g | Grasso intramuscolare: 22% | Minimo ordine: 4 petti', available:true },
  { id:61, name:'Quaglia Selvatica — Confezione da 6', cat:'carni', catLabel:'Carni Pregiate', price:280, priceLabel:'€ 280', unit:'per pezzo (~200g)', badge:'SELVATICO', desc:'Quaglia selvatica (Coturnix coturnix) di passo, cacciata durante la migrazione autunnale. La carne è straordinariamente saporita rispetto alla quaglia d\'allevamento — meno grassa ma più aromatica, con note di erba selvatica e cereali. Disponibile solo settembre–ottobre.', detail:'Specie: Coturnix coturnix selvatica | Stagione: Settembre–Ottobre | Peso medio: 185–220g | Caratteristica: Più magra ma più aromatica dell\'allevamento | Disponibilità: Limitata al periodo di passo', available:true },
  { id:62, name:'Vitello di Razza Marchigiana — Filetto', cat:'carni', catLabel:'Carni Pregiate', price:1200, priceLabel:'€ 1.200', unit:'per kg', badge:'BIOLOGICO', desc:'Vitello Marchigiana allevato nella tenuta fino a 14 mesi, nutrito con latte materno e fieno di primo taglio. La razza Marchigiana produce carne con colore rosato chiaro caratteristico, tenerezza estrema (sforzo di taglio Warner-Bratzler: 2,8 kg) e sapore delicato. Frollatura 28 giorni.', detail:'Razza: Marchigiana | Età macellazione: 14 mesi | Alimentazione: Latte materno + fieno biologico | Frollatura: 28 giorni dry-aged | WBS (tenerezza): 2,8 kg | Colore: Rosato chiaro', available:true },
  { id:63, name:'Bue Grasso Piemontese — Costata Reale', cat:'carni', catLabel:'Carni Pregiate', price:1600, priceLabel:'€ 1.600', unit:'per kg', badge:'LUXURY', desc:'Bue grasso (maschio castrato) di razza Piemontese allevato fino a 5 anni — una rarità assoluta nel mercato moderno. La lunghissima vita dell\'animale sviluppa uno strato di grasso bianco compatto e una muscolatura di profondità unica. Premiato al Concorso del Bue Grasso di Carrù negli ultimi 3 anni.', detail:'Razza: Piemontese maschio castrato | Età: 5 anni | Grasso: Bianco compatto, strato >3cm | Riconoscimenti: Carrù 2022, 2023, 2024 | Frollatura: 45 giorni | Disponibilità: Dicembre–Gennaio', available:true },
  { id:64, name:'Capretto di Montagna — Carcassa Intera', cat:'carni', catLabel:'Carni Pregiate', price:980, priceLabel:'€ 980', unit:'per carcassa (~6kg)', badge:null, desc:'Capretto (Capra hircus) di razza Camosciata delle Alpi, macellato a 35 giorni su latte materno integrale. La tenuta mantiene un gregge di capre in alpeggio da giugno ad agosto, dove la dieta montana conferisce alla carne lattea note aromatiche uniche. Disponibile Pasqua e Natale, prenotazione obbligatoria.', detail:'Razza: Camosciata delle Alpi | Età: 35 giorni | Alimentazione: Solo latte materno | Peso carcassa: 5,5–6,5 kg | Disponibilità: Pasqua e Natale | Prenotazione: Almeno 30 giorni prima', available:true },
  { id:65, name:'Fassona Piemontese — Fiorentina Record', cat:'carni', catLabel:'Carni Pregiate', price:1800, priceLabel:'€ 1.800', unit:'per kg', badge:'LUXURY', desc:'Fiorentina di Fassona Piemontese con caratteristica doppia coscia — la razza presenta una mutazione genetica naturale che impedisce la formazione di miostatina, producendo una quantità di muscolo doppia rispetto a qualsiasi altra razza. Carne magra (grasso <2%), tenerissima, quasi dolce al palato. Frollatura 35 giorni.', detail:'Razza: Fassona Piemontese | Mutazione: Inibizione miostatina naturale | Grasso: <2% | Frollatura: 35 giorni a secco | Spessore taglio: 6 cm minimo | Peso singola fiorentina: 1,2–1,8 kg', available:true },
  { id:66, name:'Lepre Selvatica — Coscia e Lombo', cat:'carni', catLabel:'Carni Pregiate', price:480, priceLabel:'€ 480', unit:'per kg', badge:'SELVATICO', desc:'Lepre europea (Lepus europaeus) cacciate nelle radure erbose della tenuta ad ottobre. Carne scura, magra, con concentrazione di ferro 3× il manzo. Frollatura breve 5 giorni per preservare la tenerezza senza sviluppare selvaticità eccessiva. Ideale per ragù in bianco, salmì e terrine di lusso.', detail:'Specie: Lepus europaeus | Stagione caccia: Ottobre | Frollatura: 5 giorni | Ferro: 3× il manzo | Grassi: 2,4% | Disponibilità: Ottobre–Novembre | Minimo ordine: 3 kg', available:true },
  { id:67, name:'Fagiano Reale di Allevamento Libero', cat:'carni', catLabel:'Carni Pregiate', price:380, priceLabel:'€ 380', unit:'per pezzo (~1,2kg)', badge:null, desc:'Fagiano (Phasianus colchicus) allevato completamente allo stato libero su 10 ettari di bosco e prato, nutrito solo con ciò che trova in natura. Rispetto al fagiano da gabbia, la carne è più scura, più saporita e con struttura fibrosa più definita. Piuma rimossa solo su richiesta.', detail:'Specie: Phasianus colchicus | Allevamento: Libero, 10 ettari bosco | Alimentazione: Solo spontanea | Peso medio eviscerato: 1.100–1.350g | Piuma: A richiesta | Disponibilità: Ottobre–Gennaio', available:true },
  { id:68, name:'Struzzo — Filetto della Tenuta', cat:'carni', catLabel:'Carni Pregiate', price:620, priceLabel:'€ 620', unit:'per kg', badge:'BIOLOGICO', desc:'Struthio camelus allevato in tenuta su 5 ettari di sabbia e prato. La carne di struzzo ha il profilo nutrizionale più sano tra tutti i mammiferi e uccelli: ferro biodisponibile elevatissimo (3,2 mg/100g), grassi saturi minimi (1,9%), proteine complete 22%. Colore rosso rubino intenso, sapore simile al manzo magro.', detail:'Specie: Struthio camelus | Allevamento: Tenuta (5 ettari) | Ferro: 3,2 mg/100g | Grassi saturi: 1,9% | Proteine: 22% | Colore: Rosso rubino | Frollatura: 14 giorni', available:true },
  { id:69, name:'Maiale Cinta Senese — Prosciutto Intero', cat:'carni', catLabel:'Carni Pregiate', price:2200, priceLabel:'€ 2.200', unit:'per coscia (~9kg)', badge:'RARO', desc:'Coscia di Cinta Senese allevata allo stato brado per 24 mesi nei boschi di quercia della tenuta in regime di "ghiandatura" — nutrimento esclusivo con ghiande nei 4 mesi precedenti la macellazione. Stagionatura 36 mesi. Il grasso è quasi insaturo come l\'olio d\'oliva. Solo 60 cosce prodotte per anno.', detail:'Razza: Cinta Senese | Regime: Brado, ghiandatura finale 4 mesi | Stagionatura: 36 mesi | Grasso: Profilo quasi insaturo | Produzione: 60 cosce/anno | Include: Supporto legno e coltello', available:true },
  { id:70, name:'Faraona della Tenuta — Intera Farcita', cat:'carni', catLabel:'Carni Pregiate', price:450, priceLabel:'€ 450', unit:'per pezzo (~1,5kg)', badge:null, desc:'Faraona (Numida meleagris) allevata libera nella tenuta con accesso a insetti, semi e bacche. Carne più scura del pollo, con note selvatiche delicate e texture più compatta. Disponibile intera o farcita con tartufo nero e rosmarino della tenuta su richiesta aggiuntiva.', detail:'Specie: Numida meleagris | Allevamento: Libero in tenuta | Peso medio: 1.400–1.600g | Opzione: Farcita con tartufo nero (supplemento) | Disponibilità: Tutto l\'anno | Minimo ordine: 4 pezzi', available:true },

  // ── LATTE & DERIVATI AGGIUNTIVI ──────────────────
  { id:71, name:'Caciocavallo Podolico — Stagionato 36 Mesi', cat:'latte', catLabel:'Latte & Derivati', price:1600, priceLabel:'€ 1.600', unit:'per kg', badge:'LUXURY', desc:'Caciocavallo prodotto con latte crudo di vacche Podoliche in alpeggio estivo, stagionato 36 mesi appeso per il "piede" — la tradizionale forma a pera — in cantine ventilate. Sviluppa cristalli di tirosina evidenti, crosta rugosa e aroma di erbe alpine, miele e spezie. Produzione: solo 30 forme/anno.', detail:'Latte: Podolico crudo, alpeggio estivo | Stagionatura: 36 mesi appeso tradizionale | Peso forma: 2–2,5 kg | Cristalli tirosina: Evidenti | Produzione: 30 forme/anno | Crosta: Non edibile, naturale', available:true },
  { id:72, name:'Scamorza Affumicata Artigianale — Al Ginepro', cat:'latte', catLabel:'Latte & Derivati', price:380, priceLabel:'€ 380', unit:'per kg', badge:null, desc:'Scamorza fresca affumicata per 3 ore con legno e bacche di ginepro raccolti nella tenuta. Crosta color oro-brunato con profumo resinoso, interno filante e morbido. A differenza della produzione industriale che usa fumo liquido, la nostra affumicatura avviene in camera tradizionale con fumo naturale.', detail:'Latte: Vaccino intero della tenuta | Affumicatura: 3h, legno + bacche ginepro | Tipo fumo: Naturale (no fumo liquido) | Formato: 300–350g appesi a coppia | Shelf life: 21 giorni refrigerato', available:true },
  { id:73, name:'Provolone Piccante Stagionato 24 Mesi', cat:'latte', catLabel:'Latte & Derivati', price:820, priceLabel:'€ 820', unit:'per kg', badge:'RARO', desc:'Provolone Valpadana DOP in versione "piccante" con caglio di capretto — che sviluppa enzimi lipolitici responsabili della piccantezza — stagionato 24 mesi in cantine a umidità naturale. Pasta granulosa, crosta cerata naturalmente, aroma intenso di latte cotto e spezie. Peso forma: 6 kg.', detail:'Latte: Vaccino intero DOP | Caglio: Capretto (piccante) | Stagionatura: 24 mesi | Umidità cantine: 80–85% naturale | Peso forma: ~6 kg | Marchio: DOP Provolone Valpadana', available:true },
  { id:74, name:'Fontina d\'Alpeggio — Estate 2023', cat:'latte', catLabel:'Latte & Derivati', price:680, priceLabel:'€ 680', unit:'per kg', badge:'STAGIONALE', desc:'Fontina prodotta esclusivamente con il latte dell\'alpeggio estivo quando le vacche Valdostane sono a quota 1.800m e si nutrono di fiori alpini. Il profilo aromatico è radicalmente diverso dalla fontina invernale: note di fieno fresco, timo, fiori di montagna. Crosta lavata con acqua salata ogni 3 giorni per 90 giorni.', detail:'Latte: Valdostana, alpeggio a 1.800m | Stagione produzione: Giugno–Agosto | Crosta: Lavata acqua salata ogni 3 giorni | Stagionatura: 90 giorni | Note: Fieno fresco, fiori alpini | Disponibilità: Limitata', available:true },
  { id:75, name:'Taleggio di Grotta Naturale', cat:'latte', catLabel:'Latte & Derivati', price:480, priceLabel:'€ 480', unit:'per kg', badge:null, desc:'Taleggio DOP stagionato nelle grotte tufaree naturali della tenuta invece delle tradizionali celle frigorifere. Il microbioma della grotta — popolato da muffe autoctone selvatiche — produce una crosta arancio-rosata con flora microbiologica unica che sviluppa note umami profonde assenti nel Taleggio industriale.', detail:'Latte: Vaccino intero crudo lombardo | Stagionatura: Grotta tufarea naturale | Microbioma: Autoctono, muffe selvatiche | Peso forma: 2 kg | Crosta: Arancio-rosata, edibile | DOP: Certificato', available:true },
  { id:76, name:'Gorgonzola Piccante — Stagionatura Lunga', cat:'latte', catLabel:'Latte & Derivati', price:560, priceLabel:'€ 560', unit:'per kg', badge:'RARO', desc:'Gorgonzola piccante DOP con stagionatura di 12 mesi — il triplo dello standard — che sviluppa venature blu-verdi di Penicillium glaucum particolarmente abbondanti. Pasta friabile, piccante e persistente, con retrogusto di noci e pepe. Inoculo con muffe autoctone anziché commerciali.', detail:'Tipo: Piccante (stagionatura lunga) | Stagionatura: 12 mesi (3× standard) | Muffa: Penicillium glaucum autoctono | Pasta: Friabile, venature abbondanti | DOP: Certificato | Retrogusto: Noci, pepe', available:true },
  { id:77, name:'Latte di Pecora Crudo — Consegna Mattutina', cat:'latte', catLabel:'Latte & Derivati', price:120, priceLabel:'€ 120', unit:'per litro', badge:'BIOLOGICO', desc:'Latte crudo intero di pecore Sopravvissane munto ogni mattina alle 5:00 e consegnato entro 4 ore. Contenuto in grasso 7,2% — quasi il doppio del latte vaccino. Ricco di acido linoleico coniugato (CLA) con effetti antiossidanti documentati. Ideale per formaggi freschi, ricotte e gelato artigianale.', detail:'Razza: Sopravvissana | Mungitura: 5:00 ogni mattina | Consegna: Entro 4h | Grasso: 7,2% | CLA: 2,8× latte vaccino | Trattamento: Nessuno | Minimo ordine: 10L | Solo Roma', available:true },
  { id:78, name:'Yogurt di Capra Intero — Biologico', cat:'latte', catLabel:'Latte & Derivati', price:180, priceLabel:'€ 180', unit:'per kg', badge:'BIOLOGICO', desc:'Yogurt prodotto con latte intero crudo di capre Saanen biologiche, inoculato con fermenti vivi autoctoni selezionati in tenuta negli anni \'90 e mai cambiati da allora — garantendo una costanza di sapore impossibile con fermenti commerciali. Acidità equilibrata, consistenza cremosa, senza addensanti.', detail:'Latte: Caprino intero crudo biologico, Saanen | Fermenti: Autoctoni della tenuta, dal 1990 | Senza addensanti, senza stabilizzanti | Acidità: 0,9% | Conservazione: 21 giorni | Minimo ordine: 5 kg', available:true },
  { id:79, name:'Panna Fresca di Bufala — 45% di Grassi', cat:'latte', catLabel:'Latte & Derivati', price:240, priceLabel:'€ 240', unit:'per litro', badge:null, desc:'Panna fresca centrifugata da latte di bufala con contenuto in grassi naturale del 45% — quasi il doppio della panna vaccina. Colore bianco puro, montatura stabile oltre 48 ore in frigorifero. Note dolci naturali di latte di bufala. Ideale per pasticceria fine, gelati e salse di lusso.', detail:'Latte: Bufalino intero tenuta | Grassi: 45% naturale | Colore: Bianco puro (senza beta-carotene) | Montatura: Stabile >48h | Shelf life: 10 giorni refrigerato | Produzione: Giornaliera | Minimo: 3L', available:true },
  { id:80, name:'Burro Chiarificato Ghee di Malga', cat:'latte', catLabel:'Latte & Derivati', price:580, priceLabel:'€ 580', unit:'per kg', badge:'BIOLOGICO', desc:'Burro di malga estivo chiarificato lentamente per 6 ore a 80°C in caldaia di rame fino ad eliminazione completa di acqua e proteine del siero. Il risultato è un ghee dorato con punto di fumo 252°C — superiore a qualsiasi olio raffinato — e una stabilità ossidativa di oltre 18 mesi a temperatura ambiente.', detail:'Base: Burro malga estivo (alpeggio) | Chiarificazione: 6h a 80°C in caldaia rame | Acqua residua: <0,1% | Punto di fumo: 252°C | Stabilità ossidativa: >18 mesi | Lattosio: Assente', available:true },
  { id:81, name:'Ricotta Infornata Siciliana — Tenuta', cat:'latte', catLabel:'Latte & Derivati', price:280, priceLabel:'€ 280', unit:'per pezzo (~400g)', badge:null, desc:'Ricotta di latte misto vaccino-ovino infornata a 200°C per 40 minuti fino a formare una crosta brunita croccante che preserva la cremosità interna. La reazione di Maillard sulla superficie sviluppa note di caramello, pane e nocciola tostata che trasformano una ricotta fresca in un prodotto gastronomico completo.', detail:'Latte: Vaccino 60% + Ovino 40% della tenuta | Cottura: 200°C per 40 minuti | Crosta: Brunita croccante (reazione Maillard) | Peso: 380–420g | Shelf life: 12 giorni refrigerato | Minimo: 4 pezzi', available:true },
  { id:82, name:'Pecorino Fresco al Tartufo Nero', cat:'latte', catLabel:'Latte & Derivati', price:920, priceLabel:'€ 920', unit:'per kg', badge:'LUXURY', desc:'Pecorino fresco (8 giorni) prodotto con latte crudo ovino e arricchito con lamelle di tartufo nero della tenuta al 5% in massa. La lavorazione viene effettuata il giorno stesso della raccolta del tartufo per garantire che il profumo penetri nella cagliata ancora calda. Produzione: solo 20 forme a settimana.', detail:'Latte: Ovino crudo Sopravvissana | Tartufo nero in massa: 5% | Stagionatura: 8 giorni | Produzione: 20 forme/settimana | Peso forma: 800g–1,2 kg | Conservazione: 21 giorni refrigerato', available:true },
  { id:83, name:'Asiago Stravecchio 48 Mesi — Riserva', cat:'latte', catLabel:'Latte & Derivati', price:1100, priceLabel:'€ 1.100', unit:'per kg', badge:'RARO', desc:'Asiago DOP prodotto con latte di vacche Rendena — razza autoctona trentina a rischio estinzione — stagionato 48 mesi in affinamento speciale. La pasta è ambra scura, granulosa, con cristalli abbondanti e un profilo aromatico di frutta secca, cuoio e spezie orientali. Solo 25 forme prodotte all\'anno in collaborazione con malgaro di fiducia.', detail:'Latte: Vacca Rendena (razza a rischio) | Stagionatura: 48 mesi | DOP: Certificato | Pasta: Ambra scura, granulosa | Produzione: 25 forme/anno | Partnership: Malgaro storico trentino', available:true },
  { id:84, name:'Mozzarella di Bufala — Treccia da 1kg', cat:'latte', catLabel:'Latte & Derivati', price:620, priceLabel:'€ 620', unit:'per pezzo (1kg)', badge:'LUXURY', desc:'Treccia di mozzarella bufalina da 1kg prodotta con la stessa pasta della mozzarella classica ma intrecciata a mano in oltre 20 strati. La maggiore superficie sviluppata dalla treccia assorbe e rilascia il latte interno gradualmente, mantenendo umidità e cremosità per oltre 36 ore. Confezionata in siero fresco.', detail:'Latte: Bufalino intero, mungitura mattutina | Formato: Treccia 1kg, >20 strati | Filatura: A mano, 92°C | Conservazione in siero: 36h | Shelf life: 48h | Disponibile: Solo mattina lavorativi', available:true },
  { id:85, name:'Strachitunt DOP — Formaggio a Due Paste', cat:'latte', catLabel:'Latte & Derivati', price:780, priceLabel:'€ 780', unit:'per kg', badge:'RARO', desc:'Strachitunt (l\'originale dello Stracchino, DOP dal 2014) prodotto a due paste sovrapposte a diversa acidità che produce naturalmente le venature blu senza inoculo di muffe. Formaggio rarissimo — meno di 12 produttori al mondo — con stagionatura 75 giorni. Note di burro fuso, erba, muschio e lieve piccantezza.', detail:'Tipo: Due paste sovrapposte, venature naturali | DOP: Dal 2014 | Produttori mondiali: <12 | Stagionatura: 75 giorni | Note: Burro, erba, muschio | Peso forma: 4–5 kg | Venature: Naturali senza inoculo', available:true },

  // ── PRODOTTI DELLA TERRA EXTRA ───────────────────
  { id:86, name:'Tartufo Scorzone — Fornitura Ristorante', cat:'terra', catLabel:'Prodotti della Terra', price:3200, priceLabel:'€ 3.200', unit:'per kg', badge:null, desc:'Tuber aestivum in fornitura continuativa per ristoranti, disponibile da maggio a ottobre. Calibro minimo garantito 30g per esemplare. Consegna bisettimanale in contenitori isotermici con riso arborio. Contratto stagionale disponibile con sconto 15% per ordini superiori a 5kg/settimana.', detail:'Varietà: Tuber aestivum (scorzone) | Calibro minimo garantito: 30g | Stagione: Maggio–Ottobre | Consegna: Bisettimanale | Conservazione fornitura: In riso arborio | Contratto stagionale: Disponibile', available:true },
  { id:87, name:'Aceto di Miele — Invecchiato 10 Anni', cat:'terra', catLabel:'Prodotti della Terra', price:1800, priceLabel:'€ 1.800', unit:'per 100ml', badge:'RARISSIMO', desc:'Aceto prodotto dalla fermentazione acetica di miele di acacia della tenuta, invecchiato 10 anni in botti di acacia. Colore ambra chiarissimo, acidità 6%, dolcezza residua 12 g/L dal miele. Uno dei pochissimi aceti di miele italiani con invecchiamento certificato superiore ai 5 anni.', detail:'Base: Miele acacia tenuta | Fermentazione: Acetica naturale | Invecchiamento: 10 anni botti acacia | Acidità: 6% | Dolcezza residua: 12 g/L | Produzione: <5L/anno | Bottiglia: 100ml vetro antico', available:true },
  { id:88, name:'Cardamomo Verde del Kerala — Selezione Tenuta', cat:'terra', catLabel:'Prodotti della Terra', price:680, priceLabel:'€ 680', unit:'per 100g', badge:'RARO', desc:'Cardamomo verde (Elettaria cardamomum) proveniente da piantagioni biologiche del Kerala selezionate personalmente dalla tenuta ogni anno. Solo capsule di grado "Extra Bold" — diametro >8mm — raccolte a mano a completa maturazione. Contenuto in cineolo (aroma): 4× le capsule commerciali standard.', detail:'Specie: Elettaria cardamomum | Origine: Kerala, piantagioni biologiche | Grado: Extra Bold (>8mm) | Cineolo: 4× standard commerciale | Raccolta: A mano, completa maturazione | Selezione: Annuale diretta', available:true },
  { id:89, name:'Noce di Pecan della Tenuta — Prima Spremitura', cat:'terra', catLabel:'Prodotti della Terra', price:420, priceLabel:'€ 420', unit:'per kg', badge:'BIOLOGICO', desc:'Noci pecan (Carya illinoinensis) coltivate in un lotto sperimentale di 80 piante piantate nel 1995 nella tenuta. Le piante, ora mature, producono frutti con contenuto in acidi grassi omega-9 superiore all\'olio d\'oliva extravergine. Sgusciatura a mano, senza trattamenti post-raccolta.', detail:'Specie: Carya illinoinensis | Impianto: 1995, 80 piante | Omega-9: Superiore all\'olio d\'oliva | Sgusciatura: A mano | Trattamenti post-raccolta: Nessuno | Disponibilità: Ottobre–Novembre', available:true },
  { id:90, name:'Box Rifornimento Ristorante — Mensile', cat:'terra', catLabel:'Prodotti della Terra', price:18500, priceLabel:'€ 18.500', unit:'per box mensile', badge:'LUXURY', desc:'Pacchetto di rifornimento mensile progettato per ristoranti stellati: 200g tartufo stagionale, 2L olio EVO Gran Cru, 500g funghi porcini, 1kg miele, 1g zafferano, selezione vini (6 bottiglie), selezione formaggi (3 tipologie 1kg cad.), 5kg carne selezionata, consegna programmata con temperature garantite.', detail:'Contenuto: Variabile per stagione | Tartufo: 200g | Olio: 2L | Vini: 6 bottiglie selezione | Formaggi: 3 tipologie 1kg | Carne: 5kg selezione | Consegna: Programmata con catena del freddo certificata | Contratto: Annuale con prezzi bloccati', available:true },

  // ── PACCHETTI EDILIZIA & BRICO ────────────────────
  {
    id:91, name:'Pacchetto Brico Base — Legname Strutturale', cat:'brico', catLabel:'Pacchetti Edilizia',
    price:162000, priceLabel:'€ 162.000', unit:'fornitura singola', badge:'LUXURY',
    desc:'Fornitura completa per cantieri residenziali di medie dimensioni. Legname strutturale certificato per carpenteria, travi portanti in abete rosso alpino, tavolame di castagno per pavimentazioni e rivestimenti, perlinato di larice per esterni. Consegna e scarico inclusi, documentazione CE allegata.',
    detail:'• 80m³ Abete rosso alpino C24 — travi e correnti strutturali\n• 20m³ Castagno stagionato 4 anni — pavimentazione\n• 15m³ Larice perlinato — rivestimenti esterni\n• 8m³ Quercia bianca — soglie e stipiti\n• 5m³ Ciliegio piallato — finiture interne\n• Bulloneria zincata a caldo inclusa\n• Documentazione CE per uso strutturale\n• Consegna in cantiere con gru scarico',
    available:true,
  },
  {
    id:92, name:'Pacchetto Brico Comfort — Ristrutturazione Completa', cat:'brico', catLabel:'Pacchetti Edilizia',
    price:245000, priceLabel:'€ 245.000', unit:'fornitura singola', badge:'LUXURY',
    desc:'Fornitura pensata per ristrutturazioni integrali di immobili storici e ville di pregio. Include legname strutturale, pavimentazione massello, rivestimenti, boiserie su misura e materiali da carpenteria di finitura. Ogni partita numerata e abbinata al progetto architettonico con dossier fotografico.',
    detail:'• 120m³ Quercia bianca stagionata 5 anni — strutture e pavimenti\n• 30m³ Noce nazionale — boiserie e arredi fissi\n• 25m³ Castagno — travi a vista e soffitti\n• 20m³ Ciliegio selvatico — parquet massello\n• 10m³ Larice — serramenti e infissi grezzi\n• 8m³ Tiglio — pannelli intaglio decorativo\n• 5m³ Abete rosso — sottostrutture nascoste\n• Sopralluogo tecnico incluso\n• Progetto di posa con geometra convenzionato\n• Dossier fotografico e certificati FSC',
    available:true,
  },
  {
    id:93, name:'Pacchetto Brico Premium — Villa Lusso', cat:'brico', catLabel:'Pacchetti Edilizia',
    price:380000, priceLabel:'€ 380.000', unit:'fornitura singola', badge:'RARISSIMO',
    desc:'Il pacchetto di punta per costruzioni e ristrutturazioni di lusso assoluto. Legname selezionato uno a uno, con venature certificate e numerate. Include essenze rare (noce nero, bosso, gelso) per finiture di altissimo livello, oltre al legname strutturale di pregio. Servizio white-glove con project manager dedicato.',
    detail:'• 200m³ Quercia bianca 120 anni — struttura e pavimenti\n• 40m³ Noce nazionale venato — boiserie e scale\n• 30m³ Ciliegio selvatico rosa — parquet e rivestimenti\n• 15m³ Noce nero americano — arredi fissi su misura\n• 10m³ Gelso bianco invecchiato 10 anni — finiture pregiate\n• 8m³ Bosso Buxus — cornici e intarsi\n• 6m³ Pero selvatico radica — oggettistica e maniglie\n• 5m³ Acero flammé — pannelli decorativi\n• 4m³ Larice alpino — decking esterno\n• Project manager dedicato per tutta la fornitura\n• 3 sopralluoghi tecnici in cantiere\n• Garanzia qualità 10 anni su legname strutturale\n• Certificazione FSC, PEFC e dichiarazione DoP',
    available:true,
  },
  {
    id:94, name:'Pacchetto Brico Industriale — Capannone e Strutture', cat:'brico', catLabel:'Pacchetti Edilizia',
    price:520000, priceLabel:'€ 520.000', unit:'fornitura singola', badge:'LUXURY',
    desc:'Fornitura su scala industriale per capannoni, coperture agricole di pregio, strutture ricettive in legno e resort di montagna. Volumi di fornitura superiori a 300m³ con legname lamellare certificato classe GL28h e travi in abete rosso alpino a bassa umidità.',
    detail:'• 300m³ Abete rosso alpino GL28h — struttura lamellare\n• 80m³ Castagno — rivestimenti interni ed esterni\n• 50m³ Larice — copertura e grondaie in legno\n• 40m³ Quercia — pavimentazione industriale rinforzata\n• 20m³ Pino cembro — cappotto interno e intercapedine\n• Calcolo strutturale e progetto esecutivo inclusi\n• Consegna frazionata in base a SAL cantiere\n• Assistenza tecnica in cantiere per montaggio\n• Assicurazione decennale struttura inclusa',
    available:true,
  },
  {
    id:95, name:'Pacchetto Brico Masterclass — Committenza Privata', cat:'brico', catLabel:'Pacchetti Edilizia',
    price:160000, priceLabel:'€ 160.000', unit:'fornitura singola', badge:'RARO',
    desc:'Il pacchetto di ingresso per committenze private esigenti: abitazione monofamiliare, ampliamenti, rustici da riqualificare. Legname strutturale certificato, pavimentazione in massello di castagno, serramenti grezzi in larice e boiserie in ciliegio. Tutto da un\'unica fonte tracciata.',
    detail:'• 60m³ Abete rosso C24 — travi e arcarecci\n• 18m³ Castagno stagionato — pavimento massello\n• 12m³ Larice — serramenti e persiane grezze\n• 8m³ Ciliegio piallato — boiserie soggiorno\n• 4m³ Frassino — scale interne\n• 3m³ Quercia — soglie e davanzali\n• Consegna con scarico in cantiere\n• Certificati CE e schede di sicurezza\n• Supporto telefonico tecnico 12 mesi',
    available:true,
  },

  // ── PACCHETTI RISTORAZIONE ────────────────────────
  {
    id:96, name:'Pacchetto Ristorante Essenziale — Mensile', cat:'ristorazione', catLabel:'Pacchetti Ristorazione',
    price:82000, priceLabel:'€ 82.000', unit:'fornitura mensile', badge:'LUXURY',
    desc:'Rifornimento mensile per ristoranti di alta cucina con 15–25 coperti. Ingredienti di prima qualità selezionati dalla tenuta: carni frollate, formaggi stagionati, tartufo fresco di stagione, vini in esclusiva e prodotti della terra. Consegna bisettimanale con catena del freddo certificata.',
    detail:'• 15kg Fassona Piemontese filetto e costata frollata 35gg\n• 8kg Wagyu A4+ — fornitura mensile\n• 5kg Tartufo fresco di stagione (bianco o nero)\n• 10kg Selezione formaggi (Parmigiano 60m, Pecorino tartufo, Caciocavallo Podolico)\n• 20 bottiglie vini selezione (Sagrantino, Barolo, Brunello)\n• 3L Olio EVO Gran Cru — 2 consegne\n• 2kg Funghi porcini o finferli freschi\n• 1kg Miele selezione tenuta\n• 500g Pasta secca artigianale\n• 200g Zafferano purissimo in stimmi\n• 2 bottiglie Aceto Balsamico 25 anni\n• Consegna bisettimanale (2× al mese)\n• Sostituzione gratuita prodotti non conformi\n• Referente dedicato H8–18 lun–sab',
    available:true,
  },
  {
    id:97, name:'Pacchetto Ristorante Prestige — Mensile', cat:'ristorazione', catLabel:'Pacchetti Ristorazione',
    price:145000, priceLabel:'€ 145.000', unit:'fornitura mensile', badge:'LUXURY',
    desc:'Fornitura mensile per ristoranti stellati o bistellati con 30–50 coperti. Volume aumentato, frequenza settimanale e accesso prioritario alle referenze più rare della tenuta: Wagyu A5, tartufo bianco fresco in stagione, caviale, Parmigiano 60 mesi e vini da collezione.',
    detail:'• 30kg Wagyu A5 Kagoshima — filetto, costata e lingua\n• 20kg Fassona Piemontese vari tagli frollatura 45gg\n• 10kg Tartufo fresco stagionale con certificato peso\n• 5kg Caviale Beluga — 3 consegne mensili\n• 20kg Selezione formaggi (8 tipologie premium)\n• 40 bottiglie vini (Barolo riserva, Brunello, Amarone, Champagne)\n• 6L Olio EVO Gran Cru singola cultivar\n• 4kg Funghi freschi selezione\n• 2kg Miele e confetture rare tenuta\n• 1g Zafferano + 200g Tartufo essiccato laminato\n• 3 bottiglie Aceto Balsamico Tradizionale 25 anni\n• Foie gras d\'anatra — 3kg\n• Consegna settimanale (4× al mese)\n• Accesso priority stock prodotti rari\n• Chef visit: 1 visita in tenuta/anno inclusa',
    available:true,
  },
  {
    id:98, name:'Pacchetto Ristorante Grand Chef — Mensile', cat:'ristorazione', catLabel:'Pacchetti Ristorazione',
    price:220000, priceLabel:'€ 220.000', unit:'fornitura mensile', badge:'RARISSIMO',
    desc:'Il pacchetto per ristoranti tristellati e hotel cinque stelle con produzione giornaliera. Ingredienti al picco assoluto di qualità, consegne trisettimanali, accesso esclusivo alle produzioni limitate della tenuta. Ogni ingrediente accompagnato da scheda tecnica, origine e condizioni di raccolta.',
    detail:'• 50kg Wagyu A5 certificato con DNA test\n• 30kg Manzo Kobe autentico — importazione diretta Giappone\n• 15kg Tartufo bianco fresco (stagione) / nero pregiato fuori stagione\n• 8kg Caviale Beluga 000 — confezioni da 1kg refrigerate\n• 6kg Foie gras d\'oca extra — etichetta artigianale\n• 30kg Formaggi (10 tipologie, tra cui Strachitunt, Asiago 48m, Parmigiano 60m)\n• 60 bottiglie vini da collezione (DRC, Sassicaia, Masseto, Petrus secondi mercato)\n• 10L Olio EVO Gran Cru 3 cultivar distinte\n• 6kg Funghi freschi (porcini, spugnole, gallinacci, tartufo estivo)\n• 3kg Erbe officinali fresche tenuta\n• Foie gras e patè luxury selection\n• Consegna trisettimanale (3× a settimana)\n• Scheda tecnica e narrazione per ogni ingrediente (menu storytelling)\n• Accesso esclusivo a stock limitati non pubblicati\n• 2 visite in tenuta/anno per lo chef\n• Consulente nutrizionale e food pairing incluso',
    available:true,
  },
  {
    id:99, name:'Pacchetto Fast Food Premium — Fornitura Mensile', cat:'ristorazione', catLabel:'Pacchetti Ristorazione',
    price:118000, priceLabel:'€ 118.000', unit:'fornitura mensile', badge:'LUXURY',
    desc:'Fornitura calibrata per catene fast food di alta gamma (burger gourmet, smash burger di qualità) con 2–4 punti vendita. Carni macinate fresche ogni 48 ore, formaggi fondenti certificati, pane brioche su misura, salse e condimenti artigianali. Tutta la qualità della tenuta nel format quick service.',
    detail:'• 200kg Fassona Piemontese macinata fresca (aggiornamento 48h)\n• 80kg Wagyu A4 macinato — blend signatura\n• 30kg Cheddar affinato 18 mesi — fette formato burger\n• 20kg Provola affumicata larice — fette formato burger\n• 15kg Pancetta tesa Cinta Senese\n• 10kg Pomodori San Marzano DOP interi pelati\n• 8kg Senape di Digione artigianale\n• 6kg Maionese biologica uova tenuta\n• 5kg Burro chiarificato ghee per grigliatura\n• 4kg Cipolla caramellata al vino rosso\n• 2kg Tartufo nero tritato per salsa signatura\n• Consegna bisettimanale 4× al mese\n• Packaging isotermico certificato\n• Scheda allergeni e valori nutrizionali per ogni referenza',
    available:true,
  },
  {
    id:100, name:'Pacchetto Elite Omakase — Fornitura Mensile', cat:'ristorazione', catLabel:'Pacchetti Ristorazione',
    price:450000, priceLabel:'€ 450.000', unit:'fornitura mensile', badge:'RARISSIMO',
    desc:'La fornitura più esclusiva del listino Terrassaggia, progettata per ristoranti omakase, private dining e chef residenti in dimore di lusso. Tutto il meglio disponibile in tenuta, più selezioni internazionali curate in esclusiva per il cliente. Un unico fornitore per una cucina senza compromessi.',
    detail:'• 80kg Wagyu A5+ BMS12 — l\'apice della classificazione mondiale\n• 40kg Manzo Kobe DOC — importazione certificata Hyogo Prefecture\n• 30kg Tartufo bianco d\'Alba fresco — tutta la stagione garantita\n• 15kg Caviale Beluga Albino (bianco) — rarità assoluta\n• 10kg Foie gras d\'oca extra + terrina luxury artigianale\n• 6kg Aragosta viva italiana — consegna in acqua\n• 4kg Ricci di mare freschi Sardegna — spedizione giornaliera\n• 50kg Formaggi rari (15 tipologie, inclusi DOP a produzione <30 forme/anno)\n• 100 bottiglie vini da grand cru e grand domaine (DRC, Pétrus, Masseto, Sassicaia)\n• 10 bottiglie distillati rari (whisky tenuta 12 anni, gin botanico, rum aged)\n• 20L Olio EVO Gran Cru monocultivar da 4 cultivar diverse\n• 3g Zafferano purissimo stimmi\n• 500g Tartufo nero liofilizzato in lamelle\n• Erbe fresche personalizzate su indicazione chef\n• Consegna quotidiana (5 giorni su 7, orario concordato)\n• Chef liaison: nostro referente cucina disponibile 7/7\n• Menu consulting trimestrale con chef tenuta\n• 4 visite annuali in tenuta con accesso alle serre\n• Accesso a produzioni uniche non a listino\n• Storytelling ingredienti per menu degustazione',
    available:true,
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
    card.className = 'product-card product-card--list reveal-up';
    card.style.transitionDelay = `${(i % 20) * 0.04}s`;
    const icon = CAT_ICONS[p.cat] || '🌿';
    const luxBadge = ['LUXURY','RARISSIMO','RARO'].includes(p.badge);
    card.innerHTML = `
      <div class="pcard-icon">${icon}</div>
      <div class="pcard-body">
        <div class="pcard-top">
          <div class="product-cat">${p.catLabel}</div>
          ${p.badge ? `<span class="product-badge ${luxBadge ? 'luxury' : ''}">${p.badge}</span>` : ''}
        </div>
        <h3 class="product-name" onclick="openProductDetail(${p.id})">${p.name}</h3>
        <p class="product-desc">${p.desc.slice(0,120)}…</p>
        <div class="product-bottom">
          <div>
            <span class="product-price">${p.priceLabel}</span>
            <span class="product-unit">${p.unit}</span>
          </div>
          <div class="pcard-actions">
            <button class="btn-detail" onclick="openProductDetail(${p.id})">Dettagli</button>
            <button class="add-to-cart" onclick="addToCart(${p.id}, event)">+ Ordina</button>
          </div>
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

function openAttenzione() {
  openModal('attenzioneOverlay');
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['checkoutOverlay','successOverlay','employeeLoginOverlay','productDetailOverlay'].forEach(closeModal);
  }
});
