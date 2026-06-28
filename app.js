/* ═══════════════════════════════════════════════════
   FATTORIA TERRASSAGGIA — Application Logic
   ═══════════════════════════════════════════════════ */

'use strict';

// ──────────────────────────────────────────────────
// PRODUCTS DATABASE
// ──────────────────────────────────────────────────
const PRODUCTS = [

  // ── LEGNAME ──────────────────────────────────────
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
    detail: 'Latte: Vacca Rossa Reggiana (<3.000 esemplari in Italia) | Stagionatura: 60 mesi | Peso forma: ~38 kg | Cristalli tirosina: 3–4mm | Colore pasta: Ambra scuro | Produzione: 18 forme/anno | Ogni forma: Numerata e certificata',
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

function openAttenzione() {
  openModal('attenzioneOverlay');
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['checkoutOverlay','successOverlay','employeeLoginOverlay','productDetailOverlay'].forEach(closeModal);
  }
});
