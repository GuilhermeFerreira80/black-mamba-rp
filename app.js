// ========== DATA ==========
const PRODUCTS = [
  // BAIRRO (BLACK MAMBA)
  {
    id: 'fajuta', name: 'Fajuta', emoji: '🔫',
    cat: 'bairro', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 20, bpPerUnit: 4,
    precoBlip: 27000, precoCivil: 37000, precoSemPecas: 92000,
    mats: { ABS: 20, Alumínio: 10, Borracha: 10, 'Pedaço de metal': 20 },
    compatibilidade: null,
  },
  {
    id: 'tauros', name: 'Tauros', emoji: '🔫',
    cat: 'bairro', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 25, bpPerUnit: 5,
    precoBlip: 34000, precoCivil: 46500, precoSemPecas: 115000,
    mats: { ABS: 25, Alumínio: 12.5, Borracha: 12.5, 'Pedaço de metal': 25 },
    compatibilidade: null,
  },
  {
    id: 'tec9', name: 'Tec-9', emoji: '💥',
    cat: 'bairro', tipoPeca: 'Básica', tipoBP: 'SMG',
    pecasPerUnit: 35, bpPerUnit: 6,
    precoBlip: 48000, precoCivil: 65500, precoSemPecas: 160000,
    mats: { ABS: 35, Alumínio: 17.5, Borracha: 17.5, 'Pedaço de metal': 35 },
    compatibilidade: null,
  },
  {
    id: 'miniuzi', name: 'Mini-Uzi', emoji: '💥',
    cat: 'bairro', tipoPeca: 'Avançada', tipoBP: 'SMG',
    pecasPerUnit: 45, bpPerUnit: 9,
    precoBlip: 60000, precoCivil: 87000, precoSemPecas: 200000,
    mats: { Alumínio: 22.5, Aço: 45, Borracha: 22.5, Bronze: 22.5, Polímero: 22.5 },
    compatibilidade: null,
  },
  {
    id: 'draco', name: 'Draco', emoji: '🎯',
    cat: 'bairro', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 65, bpPerUnit: 12,
    precoBlip: 85000, precoCivil: 123000, precoSemPecas: 285000,
    mats: { Alumínio: 32.5, Aço: 65, Borracha: 32.5, Bronze: 32.5, Polímero: 32.5 },
    compatibilidade: null,
  },
  {
    id: 'p90', name: 'P90', emoji: '🎯',
    cat: 'bairro', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 80, bpPerUnit: 16,
    precoBlip: 105000, precoCivil: 153000, precoSemPecas: 350000,
    mats: { Alumínio: 40, Aço: 80, Borracha: 40, Bronze: 40, Polímero: 40 },
    compatibilidade: null,
  },
  {
    id: 'ak47', name: 'AK-47', emoji: '🎯',
    cat: 'bairro', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 110, bpPerUnit: 22,
    precoBlip: 144000, precoCivil: 209000, precoSemPecas: 480000,
    mats: { Alumínio: 55, Aço: 110, Borracha: 55, Bronze: 55, Polímero: 55 },
    compatibilidade: null,
  },

  // ORG
  {
    id: 'vintage', name: 'Vintage', emoji: '🔫',
    cat: 'org', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 15, bpPerUnit: 3,
    precoBlip: null, precoOrg: 20000,
    mats: { ABS: 15, Alumínio: 7.5, Borracha: 7.5, 'Pedaço de metal': 15 },
    compatibilidade: null,
  },
  {
    id: 'cinquenta', name: '.50', emoji: '🔫',
    cat: 'org', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 50, bpPerUnit: 10,
    precoBlip: null, precoOrg: 70000,
    mats: { ABS: 50, Alumínio: 25, Borracha: 25, 'Pedaço de metal': 50 },
    compatibilidade: null,
  },
  {
    id: 'colt', name: 'Colt', emoji: '🔫',
    cat: 'org', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 40, bpPerUnit: 8,
    precoBlip: null, precoOrg: 55000,
    mats: { ABS: 40, Alumínio: 20, Borracha: 20, 'Pedaço de metal': 40 },
    compatibilidade: null,
  },
  {
    id: 'pdw', name: 'PDW', emoji: '💥',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'SMG',
    pecasPerUnit: 75, bpPerUnit: 15,
    precoBlip: null, precoOrg: 100000,
    mats: { Alumínio: 37.5, Aço: 75, Borracha: 37.5, Bronze: 37.5, Polímero: 37.5 },
    compatibilidade: null,
  },
  {
    id: 'famas', name: 'FAMAS', emoji: '🎯',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 120, bpPerUnit: 24,
    precoBlip: null, precoOrg: 160000,
    mats: { Alumínio: 60, Aço: 120, Borracha: 60, Bronze: 60, Polímero: 60 },
    compatibilidade: null,
  },
  {
    id: 'spas12', name: 'Spas-12', emoji: '💥',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 30, bpPerUnit: 6,
    precoBlip: null, precoOrg: 40000,
    mats: { Alumínio: 15, Aço: 30, Borracha: 15, Bronze: 15, Polímero: 15 },
    compatibilidade: null,
  },
  {
    id: 'tar21', name: 'TAR-21', emoji: '🎯',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 120, bpPerUnit: 24,
    precoBlip: null, precoOrg: 160000,
    mats: { Alumínio: 60, Aço: 120, Borracha: 60, Bronze: 60, Polímero: 60 },
    compatibilidade: null,
  },
  {
    id: 'thompson', name: 'Thompson', emoji: '💥',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'SMG',
    pecasPerUnit: 45, bpPerUnit: 6,
    precoBlip: null, precoOrg: 72000,
    mats: { Alumínio: 22.5, Aço: 45, Borracha: 22.5, Bronze: 22.5, Polímero: 22.5 },
    compatibilidade: null,
  },
  {
    id: 'military', name: 'Military', emoji: '🎯',
    cat: 'org', tipoPeca: 'Avançada', tipoBP: 'Rifle',
    pecasPerUnit: 110, bpPerUnit: 22,
    precoBlip: null, precoOrg: 144000,
    mats: { Alumínio: 55, Aço: 110, Borracha: 55, Bronze: 55, Polímero: 55 },
    compatibilidade: null,
  },
  {
    id: 'ranger12', name: 'Ranger 12', emoji: '🔫',
    cat: 'org', tipoPeca: 'Básica', tipoBP: 'Pistol',
    pecasPerUnit: 25, bpPerUnit: 5,
    precoBlip: null, precoOrg: 30000,
    mats: { ABS: 25, Alumínio: 12.5, Borracha: 12.5, 'Pedaço de metal': 25 },
    compatibilidade: null,
  },

  // ACESSÓRIOS
  {
    id: 'comp_pistol', name: 'Compensador', emoji: '🔧',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Pistol',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 350, precoParc: 1500, precoCivil: 1850,
    mats: { Alumínio: 2, Aço: 2 },
    compatibilidade: 'Fajuta / Revolver',
  },
  {
    id: 'extclip_pistol', name: 'EXT. Clip', emoji: '📎',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Pistol',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1250, precoParc: 2500, precoCivil: 3750,
    mats: { Alumínio: 3, Plástico: 3 },
    compatibilidade: 'Vintage / Fajuta / AP / Tec-9 / .50',
  },
  {
    id: 'flash_pistol', name: 'Flashlight', emoji: '🔦',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Pistol',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1000, precoParc: 1000, precoCivil: 2000,
    mats: { Restos: 1 },
    compatibilidade: 'Fajuta / Revolver / AP / .50',
  },
  {
    id: 'scope_pistol', name: 'Scope', emoji: '🔭',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Pistol',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1000, precoParc: 1000, precoCivil: 2000,
    mats: { Restos: 1 },
    compatibilidade: 'Fajuta',
  },
  {
    id: 'sup_pistol', name: 'Supressor', emoji: '🔇',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Pistol',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1250, precoParc: 2500, precoCivil: 3750,
    mats: { Alumínio: 3, Plástico: 3 },
    compatibilidade: 'Vintage / Fajuta / AP / Tec-9 / .50',
  },
  {
    id: 'extclip_smg', name: 'EXT. Clip', emoji: '📎',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'SMG',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 2500, precoParc: 6000, precoCivil: 8500,
    mats: { Alumínio: 7, Plástico: 7 },
    compatibilidade: 'Uzi / PDW / Thompson / P90',
  },
  {
    id: 'flash_smg', name: 'Flashlight', emoji: '🔦',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'SMG',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoParc: 1000, precoCivil: 2500,
    mats: { Restos: 1 },
    compatibilidade: 'Uzi / PDW / P90',
  },
  {
    id: 'scope_smg', name: 'Scope', emoji: '🔭',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'SMG',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoParc: 1000, precoCivil: 2500,
    mats: { Restos: 1 },
    compatibilidade: 'Uzi / PDW / P90',
  },
  {
    id: 'sup_smg', name: 'Supressor', emoji: '🔇',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'SMG',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoParc: 4000, precoCivil: 5500,
    mats: { Alumínio: 5, Plástico: 5 },
    compatibilidade: 'UZI / P90',
  },
  {
    id: 'drum_smg', name: 'Drum', emoji: '🥁',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'SMG',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 3500, precoParc: 7500, precoCivil: 11000,
    mats: { Alumínio: 10, Plástico: 10 },
    compatibilidade: 'Tec-9 / Draco / PDW',
  },
  {
    id: 'extclip_rifle', name: 'EXT. Clip', emoji: '📎',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 4500, precoParc: 10000, precoCivil: 14500,
    mats: { Alumínio: 12, Plástico: 12 },
    compatibilidade: 'AK / Famas / TAR',
  },
  {
    id: 'sup_rifle', name: 'Supressor', emoji: '🔇',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 3500, precoParc: 7500, precoCivil: 11000,
    mats: { Alumínio: 10, Plástico: 10 },
    compatibilidade: 'AK / Famas / TAR',
  },
  {
    id: 'heavybarrel', name: 'Heavy Barrel', emoji: '🔩',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 3500, precoParc: 7500, precoCivil: 11000,
    mats: { Alumínio: 10, Plástico: 10 },
    compatibilidade: 'AK / Famas',
  },
  {
    id: 'muzzle', name: 'Muzzle (precision)', emoji: '🔩',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 3500, precoParc: 7500, precoCivil: 11000,
    mats: { Alumínio: 10, Plástico: 10 },
    compatibilidade: 'AK / Famas',
  },
  {
    id: 'grip_rifle', name: 'Grip/SMG', emoji: '🖐️',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 3500, precoParc: 7500, precoCivil: 11000,
    mats: { Alumínio: 10, Plástico: 10 },
    compatibilidade: 'AK / Famas / PDW',
  },
  {
    id: 'scope_rifle', name: 'Scope (Rifle)', emoji: '🔭',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoParc: 1000, precoCivil: 2500,
    mats: { Restos: 1 },
    compatibilidade: 'AK / Famas / TAR',
  },
  {
    id: 'flash_rifle', name: 'Flashlight', emoji: '🔦',
    cat: 'acessorios', tipoPeca: null, tipoBP: 'Rifle',
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoParc: 1000, precoCivil: 2500,
    mats: { Restos: 1 },
    compatibilidade: 'AK / Famas / TAR',
  },

  // COLETES
  {
    id: 'colete_fort', name: 'Colete Fortalecido', emoji: '🛡️',
    cat: 'coletes', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 5500, precoParc: 6500, precoCivil: 12500,
    mats: { Pele: 3, Fibra: 5, Tecido: 5, Couro: 2 },
    compatibilidade: 'Todos',
  },

  // MESA QUÍMICA
  {
    id: 'mesa_civil_mat', name: 'Mesa Civil (C/ Mats)', emoji: '⚗️',
    cat: 'mesa', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoCivil: null, precoMesa: 25000,
    mats: { Vidro: 15, Estanho: 10, Cobre: 5, Aço: 5 },
    compatibilidade: null,
  },
  {
    id: 'mesa_civil_sem', name: 'Mesa Civil (S/ Mats)', emoji: '⚗️',
    cat: 'mesa', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoCivil: null, precoMesa: 60000,
    mats: {},
    compatibilidade: null,
  },
  {
    id: 'mesa_parc_mat', name: 'Mesa Parceria (C/ Mats)', emoji: '⚗️',
    cat: 'mesa', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoCivil: null, precoMesa: 15000,
    mats: { Vidro: 15, Estanho: 10, Cobre: 5, Aço: 5 },
    compatibilidade: null,
  },
  {
    id: 'mesa_parc_sem', name: 'Mesa Parceria (S/ Mats)', emoji: '⚗️',
    cat: 'mesa', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoCivil: null, precoMesa: 50000,
    mats: {},
    compatibilidade: null,
  },
  // BAR
  {
    id: 'energetico_mat', name: 'Energético (C/ Mats)', emoji: '🥤',
    cat: 'bar', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 4000, precoCivil: 4000,
    mats: { 'Latas': 1, 'Estimulantes': 3 },
    compatibilidade: 'Bar / Bebidas Energéticas (1 Lata + 3 Estimulantes)',
  },
  {
    id: 'energetico_sem', name: 'Energético (S/ Mats)', emoji: '🥤',
    cat: 'bar', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 12000, precoCivil: 12000,
    mats: {},
    compatibilidade: 'Bar / Bebidas Energéticas (Sem Materiais)',
  },

  // MOTOCLUBE (THE LOST MC)
  {
    id: 'taco_lost', name: 'Taco (Lucille)', emoji: '🏏',
    cat: 'moto', tipoPeca: 'Básica', tipoBP: null,
    pecasPerUnit: 10, bpPerUnit: 0,
    precoBlip: 15000, precoCivil: 15000,
    mats: { 'Peças Básicas': 10 },
    compatibilidade: 'The Lost MC — 10 peças básicas + 15k sujos',
  },
  {
    id: 'medickit_lost', name: 'Medickit', emoji: '🩹',
    cat: 'moto', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 25000, precoCivil: 25000,
    mats: { 'Óleos': 5 },
    compatibilidade: 'The Lost MC — 25k + 5 óleos',
  },
  {
    id: 'proc_medickit', name: 'Proc: Medickit Policial', emoji: '➕',
    cat: 'moto', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoCivil: 1500,
    mats: { 'Medickit Polícia': 2 },
    compatibilidade: 'The Lost MC — 2 Medickits Polícia + 1.500€ sujos por 1 Medickit',
  },
  {
    id: 'proc_colete', name: 'Proc: Colete Policial', emoji: '🦺',
    cat: 'moto', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 1500, precoCivil: 1500,
    mats: { 'Colete Polícia': 2 },
    compatibilidade: 'The Lost MC — 2 Coletes Polícia + 1.500€ sujos por 1 Colete',
  },
  {
    id: 'proc_energetico', name: 'Proc: Energético Policial', emoji: '⚡',
    cat: 'moto', tipoPeca: null, tipoBP: null,
    pecasPerUnit: 0, bpPerUnit: 0,
    precoBlip: 0, precoCivil: 0,
    mats: { 'Energético Polícia': 2 },
    compatibilidade: 'The Lost MC — 2 Energéticos Polícia por 1 Energético',
  },
];

// Raw material recipes (intermediate -> raw)
const RAW_RECIPES = {
  'ABS': [{ mat: 'Fibra', qty: 1 }, { mat: 'Plástico', qty: 1 }],
  'Aço': [{ mat: 'Carvão', qty: 1 }, { mat: 'Lingote Ferro', qty: 1 }],
  'Bronze': [{ mat: 'Cobre', qty: 1 }, { mat: 'Estanho', qty: 1 }],
  'Polímero': [{ mat: 'Carvão', qty: 1 }, { mat: 'Petróleo', qty: 1 }, { mat: 'Vidro', qty: 1 }],
};

// ========== STATE ==========
let cart = {};
let activeCat = 'all';
let activeType = 'all';

// ========== INIT ==========
function init() {
  createParticles();
  renderProducts();
  updateSidebarInfo();
  renderHeistItems();
  calcHeistTotal();
  checkAuthOnLoad();
}

function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['#8b5cf6', '#a78bfa', '#7c3aed', '#c4b5fd', '#6d28d9'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 1;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}%;
      bottom:-10px;
      animation-duration:${Math.random() * 15 + 10}s;
      animation-delay:${Math.random() * 10}s;
    `;
    container.appendChild(p);
  }
}

// ========== RENDER PRODUCTS ==========
function getCategoryBadge(cat) {
  const map = { bairro: 'badge-cat-bairro 🏘️ Bairro', org: 'badge-cat-org ⚔️ Org', acessorios: 'badge-cat-acessorios 🔧 Acessório', coletes: 'badge-cat-coletes 🛡️ Colete', bar: 'badge-cat-bar 🥤 Bar', moto: 'badge-cat-moto 🏍️ Lost MC', mesa: 'badge-cat-mesa ⚗️ Mesa' };
  const parts = (map[cat] || cat).split(' ');
  const cls = parts[0];
  const label = parts.slice(1).join(' ');
  return `<span class="badge ${cls}">${label}</span>`;
}

function getEmoji(cat, bp) {
  if (cat === 'bar') return '🥤';
  if (cat === 'moto') return '🏍️';
  if (cat === 'mesa') return '⚗️';
  if (cat === 'coletes') return '🛡️';
  if (cat === 'acessorios') {
    if (bp === 'Pistol') return '🔫';
    if (bp === 'SMG') return '💥';
    if (bp === 'Rifle') return '🎯';
  }
  if (bp === 'Pistol') return '🔫';
  if (bp === 'SMG') return '💥';
  if (bp === 'Rifle') return '🎯';
  return '🔧';
}

function formatPrice(val) {
  if (!val && val !== 0) return '-';
  return val.toLocaleString('pt-PT') + ' €';
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  const cats = { bairro: [], org: [], acessorios: [], coletes: [], bar: [], moto: [], mesa: [] };
  PRODUCTS.forEach(p => { if (cats[p.cat]) cats[p.cat].push(p); });

  const catInfo = {
    bairro: '🏘️ Armas — Bairro (Black Mamba)',
    org: '⚔️ Armas — Org',
    acessorios: '🔧 Acessórios',
    coletes: '🛡️ Coletes',
    bar: '🥤 Bar — Bebidas Energéticas',
    moto: '🏍️ Motoclube — The Lost MC',
    mesa: '⚗️ Mesa Química',
  };

  Object.keys(cats).forEach(cat => {
    if (cats[cat].length === 0) return;
    const label = document.createElement('div');
    label.className = 'section-label';
    label.dataset.cat = cat;
    label.innerHTML = catInfo[cat];
    grid.appendChild(label);

    cats[cat].forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.id = `card-${p.id}`;
      card.dataset.cat = p.cat;
      card.dataset.type = p.tipoBP || p.tipoPeca || '';
      card.style.animationDelay = `${idx * 0.04}s`;

      const inCart = !!cart[p.id];
      const matsHTML = Object.keys(p.mats).length > 0
        ? Object.entries(p.mats).map(([k, v]) => `<span class="mat-tag">${k}: ${v}/un</span>`).join('')
        : '<span class="mat-tag">Sem materiais</span>';

      let priceDisplay = '';
      if (p.cat === 'bairro') {
        priceDisplay = `<div class="card-price-row"><span class="card-price-label">Blip/Parc</span><span class="card-price-val">${formatPrice(p.precoBlip)}</span></div>
                        <div class="card-price-row"><span class="card-price-label">Civil</span><span class="card-price-val">${formatPrice(p.precoCivil)}</span></div>`;
      } else if (p.cat === 'org') {
        priceDisplay = `<div class="card-price-row"><span class="card-price-label">Preço Org</span><span class="card-price-val">${formatPrice(p.precoOrg)}</span></div>`;
      } else if (p.cat === 'coletes' || p.cat === 'acessorios') {
        priceDisplay = `<div class="card-price-row"><span class="card-price-label">Blip</span><span class="card-price-val">${formatPrice(p.precoBlip)}</span></div>
                        <div class="card-price-row"><span class="card-price-label">Parceria</span><span class="card-price-val">${formatPrice(p.precoParc)}</span></div>`;
      } else if (p.cat === 'mesa') {
        priceDisplay = `<div class="card-price-row"><span class="card-price-label">Preço</span><span class="card-price-val">${formatPrice(p.precoMesa)}</span></div>`;
      } else if (p.cat === 'bar' || p.cat === 'moto') {
        priceDisplay = `<div class="card-price-row"><span class="card-price-label">Preço</span><span class="card-price-val">${formatPrice(p.precoBlip)}</span></div>`;
      }

      const bpBadge = p.tipoBP ? `<span class="badge badge-type">${p.tipoBP}</span>` : '';
      const pecaBadge = p.tipoPeca ? `<span class="badge badge-type">${p.tipoPeca}</span>` : '';
      const compText = p.compatibilidade ? `<div class="card-mats-title" style="margin-top:8px;color:#64748b;">Compatível: ${p.compatibilidade}</div>` : '';

      card.innerHTML = `
        <div class="card-header">
          <div>
            <div class="card-name">${getEmoji(p.cat, p.tipoBP)} ${p.name}</div>
            <div class="card-badges">
              ${getCategoryBadge(p.cat)}
              ${bpBadge}
              ${pecaBadge}
            </div>
          </div>
        </div>
        ${priceDisplay}
        <div class="card-mats">
          <div class="card-mats-title">Materiais por unidade:</div>
          <div class="mats-list">${matsHTML}</div>
          ${compText}
        </div>
        <div class="card-footer">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty('${p.id}', -1)">−</button>
            <input class="qty-input" id="qty-${p.id}" type="number" value="0" min="0" max="999" onchange="setQtyInput('${p.id}')" />
            <button class="qty-btn" onclick="changeQty('${p.id}', 1)">+</button>
          </div>
          <button class="btn-add ${inCart ? 'in-cart' : ''}" id="addbtn-${p.id}" onclick="addToCart('${p.id}')">
            ${inCart ? '✓ No Carrinho' : '+ Adicionar'}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });
  });

  applyFilters();
  updateSidebarInfo();
}

// ========== FILTERS ==========
function filterCategory(cat) {
  activeCat = cat;
  document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  applyFilters();
}

function filterType(type) {
  activeType = type;
  document.querySelectorAll('#typeFilters .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.type === type));
  applyFilters();
}

function applyFilters() {
  document.querySelectorAll('.product-card').forEach(card => {
    const catOk = activeCat === 'all' || card.dataset.cat === activeCat;
    const typeOk = activeType === 'all' || card.dataset.type === activeType;
    card.classList.toggle('hidden', !(catOk && typeOk));
  });
  document.querySelectorAll('.section-label').forEach(label => {
    const cat = label.dataset.cat;
    const sibs = document.querySelectorAll(`.product-card[data-cat="${cat}"]:not(.hidden)`);
    label.style.display = sibs.length === 0 ? 'none' : 'flex';
  });
}

// ========== QTY ==========
function changeQty(id, delta) {
  const input = document.getElementById(`qty-${id}`);
  let val = parseInt(input.value) || 0;
  val = Math.max(0, val + delta);
  input.value = val;
}

function setQtyInput(id) {
  const input = document.getElementById(`qty-${id}`);
  let val = parseInt(input.value) || 0;
  if (val < 0) { val = 0; input.value = 0; }
}

function addToCart(id) {
  const input = document.getElementById(`qty-${id}`);
  let qty = parseInt(input.value) || 0;
  if (qty <= 0) qty = 1;
  input.value = qty;

  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  if (cart[id]) {
    cart[id].qty += qty;
  } else {
    cart[id] = { product, qty };
  }

  updateCartBadge();
  renderCartItems();
  updateCartMaterials();

  const btn = document.getElementById(`addbtn-${id}`);
  if (btn) { btn.classList.add('in-cart'); btn.textContent = '✓ No Carrinho'; }

  showToast(`✓ ${product.name} adicionado (×${qty})`);
}

// ========== CART ==========
function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  panel.classList.toggle('open');
  overlay.classList.toggle('visible');
}

function updateCartBadge() {
  const total = Object.values(cart).reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
  document.getElementById('sidebarCartCount').textContent = total;
}

function renderCartItems() {
  const empty = document.getElementById('cartEmpty');
  const itemsDiv = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const keys = Object.keys(cart);

  if (keys.length === 0) {
    empty.style.display = 'block';
    itemsDiv.innerHTML = '';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  itemsDiv.innerHTML = keys.map(id => {
    const item = cart[id];
    const p = item.product;
    return `
      <div class="cart-item" id="cartitem-${id}">
        <div class="cart-item-emoji">${getEmoji(p.cat, p.tipoBP)}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-sub">${p.cat === 'bairro' ? 'Bairro' : p.cat === 'org' ? 'Org' : p.cat === 'acessorios' ? 'Acessório (' + p.tipoBP + ')' : p.cat === 'coletes' ? 'Colete' : p.cat === 'bar' ? 'Bar' : p.cat === 'moto' ? 'The Lost MC' : 'Mesa Química'}</div>
        </div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="cartChangeQty('${id}', -1)">−</button>
          <span class="cart-item-qty-val">${item.qty}</span>
          <button class="cart-qty-btn" onclick="cartChangeQty('${id}', 1)">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${id}')" title="Remover">🗑</button>
      </div>
    `;
  }).join('');
}

function cartChangeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty = Math.max(1, cart[id].qty + delta);
  updateCartBadge();
  renderCartItems();
  updateCartMaterials();
}

function removeFromCart(id) {
  delete cart[id];
  const btn = document.getElementById(`addbtn-${id}`);
  if (btn) { btn.classList.remove('in-cart'); btn.textContent = '+ Adicionar'; }
  updateCartBadge();
  renderCartItems();
  updateCartMaterials();
}

function clearCart() {
  Object.keys(cart).forEach(id => {
    const btn = document.getElementById(`addbtn-${id}`);
    if (btn) { btn.classList.remove('in-cart'); btn.textContent = '+ Adicionar'; }
  });
  cart = {};
  updateCartBadge();
  renderCartItems();
  updateCartMaterials();
  showToast('🗑️ Carrinho limpo');
}

// ========== MATERIALS CALC ==========
function updateCartMaterials() {
  const totals = {};
  Object.values(cart).forEach(({ product: p, qty }) => {
    const eff = getEffective(p);
    Object.entries(eff.mats).forEach(([mat, perUnit]) => {
      totals[mat] = (totals[mat] || 0) + Math.ceil(perUnit * qty);
    });
  });

  const grid = document.getElementById('materialsGrid');
  if (Object.keys(totals).length === 0) { grid.innerHTML = '<div style="color:var(--text3);font-size:12px;grid-column:1/-1;">Nenhum material necessário</div>'; }
  else {
    grid.innerHTML = Object.entries(totals).sort((a, b) => b[1] - a[1]).map(([mat, qty]) =>
      `<div class="mat-item"><span class="mat-name">${mat}</span><span class="mat-qty">${qty.toLocaleString('pt-PT')}</span></div>`
    ).join('');
  }

  // Raw materials
  const rawTotals = {};
  Object.entries(totals).forEach(([mat, qty]) => {
    if (RAW_RECIPES[mat]) {
      RAW_RECIPES[mat].forEach(({ mat: raw, qty: mult }) => {
        rawTotals[raw] = (rawTotals[raw] || 0) + qty * mult;
      });
    }
  });

  const rawGrid = document.getElementById('rawMaterialsGrid');
  const rawSec = document.getElementById('rawMatSection');
  if (Object.keys(rawTotals).length > 0) {
    rawSec.style.display = 'block';
    rawGrid.innerHTML = Object.entries(rawTotals).sort((a, b) => b[1] - a[1]).map(([mat, qty]) =>
      `<div class="mat-item"><span class="mat-name">${mat}</span><span class="mat-qty">${qty.toLocaleString('pt-PT')}</span></div>`
    ).join('');
  } else {
    rawSec.style.display = 'none';
  }
}

// ========== EXPORT ==========
function exportOrder() {
  const lines = ['━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', '🐍  BLACK MAMBA — ENCOMENDA', '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', ''];
  lines.push('📦 ITENS ENCOMENDADOS:');
  Object.values(cart).forEach(({ product: p, qty }) => {
    lines.push(`  • ${p.name} × ${qty}`);
  });
  lines.push('');
  lines.push('🔩 MATERIAIS NECESSÁRIOS:');

  const totals = {};
  Object.values(cart).forEach(({ product: p, qty }) => {
    const eff = getEffective(p);
    Object.entries(eff.mats).forEach(([mat, perUnit]) => {
      totals[mat] = (totals[mat] || 0) + Math.ceil(perUnit * qty);
    });
  });
  Object.entries(totals).sort((a, b) => b[1] - a[1]).forEach(([mat, qty]) => {
    lines.push(`  • ${mat}: ${qty.toLocaleString('pt-PT')}`);
  });

  const rawTotals = {};
  Object.entries(totals).forEach(([mat, qty]) => {
    if (RAW_RECIPES[mat]) {
      RAW_RECIPES[mat].forEach(({ mat: raw, qty: mult }) => {
        rawTotals[raw] = (rawTotals[raw] || 0) + qty * mult;
      });
    }
  });
  if (Object.keys(rawTotals).length > 0) {
    lines.push('');
    lines.push('⛏️ MATÉRIAS-PRIMAS:');
    Object.entries(rawTotals).sort((a, b) => b[1] - a[1]).forEach(([mat, qty]) => {
      lines.push(`  • ${mat}: ${qty.toLocaleString('pt-PT')}`);
    });
  }

  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Data: ${new Date().toLocaleString('pt-PT')}`);

  const text = lines.join('\n');
  document.getElementById('modalBody').textContent = text;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

function copyOrder() {
  const text = document.getElementById('modalBody').textContent;
  navigator.clipboard.writeText(text).then(() => showToast('✓ Copiado para o clipboard!')).catch(() => showToast('Seleciona o texto manualmente'));
}

// ========== SIDEBAR INFO ==========
function updateSidebarInfo() {
  document.getElementById('sidebarTotal').textContent = PRODUCTS.length;
}

// ========== TOAST ==========
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ========== SIDEBAR TABS ==========
function switchSidebarTab(tab) {
  document.getElementById('panel-catalog').style.display = tab === 'catalog' ? 'block' : 'none';
  document.getElementById('panel-config').style.display = tab === 'config' ? 'block' : 'none';
  document.getElementById('stab-catalog').classList.toggle('active', tab === 'catalog');
  document.getElementById('stab-config').classList.toggle('active', tab === 'config');
  if (tab === 'config') renderConfigList();
}

// ========== CONFIG SYSTEM ==========
// Per-product overrides: { [id]: { prices: {key: val}, mats: {matName: val} } }
let configOverrides = {};

const CAT_BADGE_CLASSES = {
  bairro: 'badge-cat-bairro', org: 'badge-cat-org',
  acessorios: 'badge-cat-acessorios', coletes: 'badge-cat-coletes', bar: 'badge-cat-bar', moto: 'badge-cat-moto', mesa: 'badge-cat-mesa'
};
const CAT_LABELS = { bairro: '🏘️ Bairro', org: '⚔️ Org', acessorios: '🔧 Acess.', coletes: '🛡️ Colete', bar: '🥤 Bar', moto: '🏍️ Lost MC', mesa: '⚗️ Mesa' };

function getPriceKeys(p) {
  if (p.cat === 'bairro') return [['precoBlip', 'Blip/Parc (€)'], ['precoCivil', 'Civil (€)'], ['precoSemPecas', 'S/Peças (€)']];
  if (p.cat === 'org') return [['precoOrg', 'Preço Org (€)']];
  if (p.cat === 'mesa') return [['precoMesa', 'Preço (€)']];
  if (p.cat === 'bar' || p.cat === 'moto') return [['precoBlip', 'Preço (€)']];
  return [['precoBlip', 'Blip (€)'], ['precoParc', 'Parceria (€)'], ['precoCivil', 'Civil (€)']];
}

function getEffective(p) {
  // Returns product data merged with any config overrides
  const ov = configOverrides[p.id] || {};
  const prices = { ...p, ...(ov.prices || {}) };
  const mats = { ...p.mats, ...(ov.mats || {}) };
  // remove mats set to 0 from overrides
  Object.keys(ov.mats || {}).forEach(k => { if (ov.mats[k] === 0) delete mats[k]; });
  return { ...prices, mats };
}

function renderConfigList() {
  const list = document.getElementById('cfgList');
  list.innerHTML = '';
  PRODUCTS.forEach(p => {
    const item = document.createElement('div');
    item.className = 'cfg-item';
    item.id = `cfg-${p.id}`;
    item.dataset.name = p.name.toLowerCase();

    const ov = configOverrides[p.id] || {};
    const hasOv = Object.keys(ov.prices || {}).length > 0 || Object.keys(ov.mats || {}).length > 0;
    const modDot = hasOv ? '<span style="width:5px;height:5px;background:#f59e0b;border-radius:50%;display:inline-block;margin-left:4px;"></span>' : '';

    item.innerHTML = `
      <div class="cfg-item-header" onclick="toggleCfgItem('${p.id}')">
        <div class="cfg-item-name">
          ${getEmoji(p.cat, p.tipoBP)} ${p.name}${modDot}
          <span class="cfg-item-cat ${CAT_BADGE_CLASSES[p.cat] || 'badge-type'}">${CAT_LABELS[p.cat] || p.cat}</span>
        </div>
        <span class="cfg-chevron">▼</span>
      </div>
      <div class="cfg-item-body" id="cfgbody-${p.id}"></div>
    `;
    list.appendChild(item);
  });
}

function toggleCfgItem(id) {
  const item = document.getElementById(`cfg-${id}`);
  const wasOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.cfg-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) {
    item.classList.add('open');
    buildCfgBody(id);
  }
}

function buildCfgBody(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const body = document.getElementById(`cfgbody-${id}`);
  const ov = configOverrides[id] || { prices: {}, mats: {} };
  const eff = getEffective(p);

  let html = '<div class="cfg-section-sep">💶 Preços</div>';
  getPriceKeys(p).forEach(([key, label]) => {
    const val = ov.prices?.[key] ?? p[key] ?? 0;
    const isChanged = ov.prices?.[key] !== undefined;
    html += `
      <div class="cfg-field">
        <span class="cfg-field-label">${label}</span>
        <input class="cfg-field-input ${isChanged ? 'changed' : ''}" type="number" min="0" step="500"
          value="${val}"
          data-id="${id}" data-field="price" data-key="${key}"
          onchange="onCfgChange(this)" oninput="onCfgChange(this)" />
      </div>`;
  });

  if (Object.keys(p.mats).length > 0) {
    html += '<div class="cfg-section-sep">🔩 Materiais / Unidade</div>';
    Object.entries(p.mats).forEach(([mat, defaultVal]) => {
      const val = ov.mats?.[mat] ?? defaultVal;
      const isChanged = ov.mats?.[mat] !== undefined;
      html += `
        <div class="cfg-field">
          <span class="cfg-field-label">${mat}</span>
          <input class="cfg-field-input ${isChanged ? 'changed' : ''}" type="number" min="0" step="1"
            value="${val}"
            data-id="${id}" data-field="mat" data-key="${mat}"
            onchange="onCfgChange(this)" oninput="onCfgChange(this)" />
        </div>`;
    });
  }

  html += `
    <div style="margin-top:8px;display:flex;gap:6px;">
      <button class="cfg-btn-reset" style="flex:1;font-size:10px;" onclick="resetItemConfig('${id}')">↺ Repor</button>
    </div>`;

  body.innerHTML = html;
}

function onCfgChange(input) {
  const id = input.dataset.id;
  const field = input.dataset.field; // 'price' or 'mat'
  const key = input.dataset.key;
  const val = parseFloat(input.value) || 0;

  if (!configOverrides[id]) configOverrides[id] = { prices: {}, mats: {} };

  const p = PRODUCTS.find(x => x.id === id);
  if (field === 'price') {
    const orig = p[key] ?? 0;
    if (val === orig) { delete configOverrides[id].prices[key]; }
    else { configOverrides[id].prices[key] = val; }
  } else {
    const orig = p.mats[key] ?? 0;
    if (val === orig) { delete configOverrides[id].mats[key]; }
    else { configOverrides[id].mats[key] = val; }
  }

  // Style input
  const hasChange = (field === 'price')
    ? configOverrides[id]?.prices?.[key] !== undefined
    : configOverrides[id]?.mats?.[key] !== undefined;
  input.classList.toggle('changed', hasChange);

  // Mark config tab if any overrides exist
  const anyChanges = PRODUCTS.some(p => {
    const ov = configOverrides[p.id];
    return ov && (Object.keys(ov.prices || {}).length > 0 || Object.keys(ov.mats || {}).length > 0);
  });
  document.getElementById('stab-config').classList.toggle('has-changes', anyChanges);

  // Update the card + mod dot on cfg list
  refreshCard(id);
  refreshCfgDot(id);
  // Re-calc cart materials if this item is in cart
  if (cart[id]) updateCartMaterials();
}

function refreshCfgDot(id) {
  const item = document.getElementById(`cfg-${id}`);
  if (!item) return;
  const ov = configOverrides[id] || {};
  const hasOv = Object.keys(ov.prices || {}).length > 0 || Object.keys(ov.mats || {}).length > 0;
  const nameEl = item.querySelector('.cfg-item-name');
  // Remove existing dot
  const existDot = nameEl.querySelector('span[data-dot]');
  if (existDot) existDot.remove();
  if (hasOv) {
    const dot = document.createElement('span');
    dot.setAttribute('data-dot', '1');
    dot.style.cssText = 'width:5px;height:5px;background:#f59e0b;border-radius:50%;display:inline-block;margin-left:4px;';
    nameEl.appendChild(dot);
  }
}

function refreshCard(id) {
  // Re-render just the price rows + mat tags of the product card
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const eff = getEffective(p);

  // Update price rows
  const card = document.getElementById(`card-${id}`);
  if (!card) return;

  // Price rows are inside .card-price-row elements — rebuild them
  card.querySelectorAll('.card-price-row').forEach(el => el.remove());
  const matSection = card.querySelector('.card-mats');
  const priceRows = buildPriceRowsHTML(eff);
  matSection.insertAdjacentHTML('beforebegin', priceRows);

  // Update mat tags
  const matsList = card.querySelector('.mats-list');
  if (matsList) {
    const matsHTML = Object.keys(eff.mats).length > 0
      ? Object.entries(eff.mats).map(([k, v]) => `<span class="mat-tag">${k}: ${v}/un</span>`).join('')
      : '<span class="mat-tag">Sem materiais</span>';
    matsList.innerHTML = matsHTML;
  }
}

function buildPriceRowsHTML(eff) {
  let html = '';
  if (eff.cat === 'bairro') {
    html += priceRow('Blip/Parc', eff.precoBlip) + priceRow('Civil', eff.precoCivil);
  } else if (eff.cat === 'org') {
    html += priceRow('Preço Org', eff.precoOrg);
  } else if (eff.cat === 'coletes' || eff.cat === 'acessorios') {
    html += priceRow('Blip', eff.precoBlip) + priceRow('Parceria', eff.precoParc);
  } else if (eff.cat === 'mesa') {
    html += priceRow('Preço', eff.precoMesa);
  } else if (eff.cat === 'bar' || eff.cat === 'moto') {
    html += priceRow('Preço', eff.precoBlip);
  }
  return html;
}
function priceRow(label, val) {
  return `<div class="card-price-row"><span class="card-price-label">${label}</span><span class="card-price-val">${formatPrice(val)}</span></div>`;
}

function resetItemConfig(id) {
  delete configOverrides[id];
  buildCfgBody(id);
  refreshCfgDot(id);
  refreshCard(id);
  if (cart[id]) updateCartMaterials();
  checkAnyChanges();
  showToast('↺ Config reposta para padrão');
}

function resetAllConfig() {
  configOverrides = {};
  localStorage.removeItem('bm_config');
  // Re-render open cfg body
  document.querySelectorAll('.cfg-item.open').forEach(el => {
    const id = el.id.replace('cfg-', '');
    buildCfgBody(id);
    refreshCfgDot(id);
  });
  PRODUCTS.forEach(p => refreshCard(p.id));
  updateCartMaterials();
  checkAnyChanges();
  showToast('↺ Todas as configs repostas');
}

function checkAnyChanges() {
  const anyChanges = PRODUCTS.some(p => {
    const ov = configOverrides[p.id];
    return ov && (Object.keys(ov.prices || {}).length > 0 || Object.keys(ov.mats || {}).length > 0);
  });
  document.getElementById('stab-config').classList.toggle('has-changes', anyChanges);
}

function saveConfigToStorage() {
  localStorage.setItem('bm_config', JSON.stringify(configOverrides));
  showToast('💾 Configurações guardadas!');
}

function loadConfigFromStorage() {
  try {
    const saved = localStorage.getItem('bm_config');
    if (saved) { configOverrides = JSON.parse(saved); checkAnyChanges(); }
  } catch (e) { configOverrides = {}; }
}

function filterConfigList() {
  const q = document.getElementById('cfgSearch').value.toLowerCase();
  document.querySelectorAll('.cfg-item').forEach(el => {
    el.classList.toggle('cfg-hidden', q && !el.dataset.name.includes(q));
  });
}

// ========== START ==========
document.addEventListener('DOMContentLoaded', () => {
  loadConfigFromStorage();
  init();
});

// ========== MAIN TABS ==========
function switchMainTab(tab) {
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('nav-' + tab);
  if (btn) btn.classList.add('active');

  const pages = {
    catalog: document.getElementById('page-catalog'),
    heist: document.getElementById('page-heist'),
    parcerias: document.getElementById('page-parcerias'),
  };
  Object.keys(pages).forEach(key => {
    if (pages[key]) pages[key].style.display = (key === tab) ? 'block' : 'none';
  });

  if (tab === 'heist') {
    renderHeistItems();
    calcHeistTotal();
  }
}

// ========== HEIST / BARRAGENS ==========
const HEIST_ITEMS = [
  { id: 'h_perfume', name: 'Perfume', price: 300, emoji: '🧴' },
  { id: 'h_vinhos', name: 'Vinhos', price: 600, emoji: '🍷' },
  { id: 'h_phone7', name: 'Phone 7', price: 960, emoji: '📱' },
  { id: 'h_pc', name: 'PC', price: 1200, emoji: '💻' },
  { id: 'h_tigre', name: 'Tigre', price: 1620, emoji: '🐅' },
  { id: 'h_quadro', name: 'Quadro', price: 1752, emoji: '🖼️' },
  { id: 'h_monitor', name: 'Monitor', price: 3000, emoji: '🖥️' },
  { id: 'h_relogio_ouro', name: 'Relógio de Ouro', price: 3000, emoji: '⌚' },
  { id: 'h_documentos', name: 'Documentos', price: 1620, emoji: '📁' },
  { id: 'h_tv_oled', name: 'TV OLED', price: 3600, emoji: '📺' },
  { id: 'h_arma_colecao', name: 'Arma de Coleção', price: 8400, emoji: '🗡️' },
  { id: 'h_patentes', name: 'Patentes', price: 10000, emoji: '📜' },
  { id: 'h_cx_contrabando', name: 'Caixa Contrabando', price: 15000, emoji: '📦' },
  { id: 'h_joias', name: 'Jóias', price: 8300, emoji: '💎' },
  { id: 'h_mala_gruppe6', name: 'Mala Gruppe6', price: 20000, emoji: '💼' },
  { id: 'h_cx_tabaco', name: 'Caixa Tabaco', price: 30000, emoji: '🚬' },
  { id: 'h_cx_eletronicos', name: 'Caixa Eletrónicos', price: 40000, emoji: '🔌' },
  { id: 'h_whisky_vintage', name: 'Whisky Vintage', price: 60000, emoji: '🥃' },
  { id: 'h_crypto_pen', name: 'Crypto Pen', price: 120000, emoji: '🖊️' },
  { id: 'h_aguia_bronze', name: 'Águia de Bronze', price: 120000, emoji: '🦅' },
  { id: 'h_cx_arma', name: 'Caixa Arma', price: 140000, emoji: '🧰' },
  { id: 'h_proto_sniper', name: 'Protótipo Sniper', price: 200000, emoji: '🎯' },
  { id: 'h_mala_diamantes', name: 'Mala Diamantes', price: 400000, emoji: '🧳' },
  { id: 'h_coroa', name: 'Coroa', price: 600000, emoji: '👑' },
];

let heistQuantities = {};
let heistMembersCount = 4;

function getHeistTierClass(price) {
  if (price < 3000) return 'tier-low';
  if (price < 20000) return 'tier-mid';
  if (price < 100000) return 'tier-high';
  return 'tier-top';
}

function renderHeistItems() {
  const grid = document.getElementById('heistItemsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  HEIST_ITEMS.forEach(item => {
    const qty = heistQuantities[item.id] || 0;
    const tier = getHeistTierClass(item.price);
    const itemTotal = qty * item.price;

    const card = document.createElement('div');
    card.className = `heist-item-card ${tier} ${qty > 0 ? 'has-qty' : ''}`;
    card.id = `hcard-${item.id}`;
    card.dataset.name = item.name.toLowerCase();

    card.innerHTML = `
      <div class="heist-item-emoji">${item.emoji}</div>
      <div class="heist-item-info">
        <div class="heist-item-name" title="${item.name}">${item.name}</div>
        <div class="heist-item-price">${item.price.toLocaleString('pt-PT')} €</div>
        ${qty > 0 ? `<div class="heist-item-total">= ${itemTotal.toLocaleString('pt-PT')} €</div>` : ''}
      </div>
      <div class="heist-qty-wrap">
        <button class="heist-qty-btn" onclick="changeHeistQty('${item.id}', -1)">−</button>
        <input class="heist-qty-input" id="hqty-${item.id}" type="number" min="0" max="999" value="${qty}" onchange="setHeistQtyInput('${item.id}')" />
        <button class="heist-qty-btn" onclick="changeHeistQty('${item.id}', 1)">+</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function changeHeistQty(id, delta) {
  const cur = heistQuantities[id] || 0;
  const next = Math.max(0, cur + delta);
  if (next === 0) delete heistQuantities[id];
  else heistQuantities[id] = next;

  const input = document.getElementById('hqty-' + id);
  if (input) input.value = next;

  updateHeistCard(id);
  calcHeistTotal();
}

function setHeistQtyInput(id) {
  const input = document.getElementById('hqty-' + id);
  if (!input) return;
  const val = parseInt(input.value) || 0;
  if (val <= 0) delete heistQuantities[id];
  else heistQuantities[id] = val;
  input.value = Math.max(0, val);

  updateHeistCard(id);
  calcHeistTotal();
}

function updateHeistCard(id) {
  const card = document.getElementById('hcard-' + id);
  if (!card) return;
  const item = HEIST_ITEMS.find(x => x.id === id);
  const qty = heistQuantities[id] || 0;
  card.classList.toggle('has-qty', qty > 0);

  const totalEl = card.querySelector('.heist-item-total');
  if (qty > 0) {
    const totalVal = (qty * item.price).toLocaleString('pt-PT') + ' €';
    if (totalEl) {
      totalEl.textContent = '= ' + totalVal;
    } else {
      const priceEl = card.querySelector('.heist-item-price');
      priceEl.insertAdjacentHTML('afterend', '<div class="heist-item-total">= ' + totalVal + '</div>');
    }
  } else if (totalEl) {
    totalEl.remove();
  }
}

function calcHeistTotal() {
  let gross = 0;
  let totalItemsCount = 0;
  const activeItems = [];

  HEIST_ITEMS.forEach(item => {
    const qty = heistQuantities[item.id] || 0;
    if (qty > 0) {
      const lineTotal = qty * item.price;
      gross += lineTotal;
      totalItemsCount += qty;
      activeItems.push({ ...item, qty, lineTotal });
    }
  });

  const discountInput = document.getElementById('heistDiscount');
  const discountPct = parseFloat(discountInput?.value) || 0;
  const discountVal = Math.round(gross * (discountPct / 100));
  const net = Math.max(0, gross - discountVal);
  const perMember = Math.round(net / (heistMembersCount || 1));

  const grossEl = document.getElementById('heistGross');
  if (grossEl) grossEl.textContent = gross.toLocaleString('pt-PT') + ' €';
  const discValEl = document.getElementById('heistDiscountVal');
  if (discValEl) discValEl.textContent = (discountVal > 0 ? '− ' : '') + discountVal.toLocaleString('pt-PT') + ' €';
  const netEl = document.getElementById('heistNet');
  if (netEl) netEl.textContent = net.toLocaleString('pt-PT') + ' €';
  const perMbrEl = document.getElementById('heistPerMember');
  if (perMbrEl) perMbrEl.textContent = perMember.toLocaleString('pt-PT') + ' €';
  const mbrEl = document.getElementById('heistMembers');
  if (mbrEl) mbrEl.textContent = heistMembersCount;

  // Update ranking card
  const rankCard = document.getElementById('heistRankCard');
  const rankList = document.getElementById('heistRankList');
  if (rankCard && rankList) {
    if (activeItems.length > 0) {
      rankCard.style.display = 'block';
      activeItems.sort((a, b) => b.lineTotal - a.lineTotal);
      rankList.innerHTML = activeItems.map(it => `
        <div class="heist-rank-item">
          <span class="heist-rank-name">${it.emoji} ${it.name} × ${it.qty}</span>
          <span class="heist-rank-val">${it.lineTotal.toLocaleString('pt-PT')} €</span>
        </div>
      `).join('');
    } else {
      rankCard.style.display = 'none';
    }
  }

  // Update active state of preset chips
  document.querySelectorAll('.heist-chip').forEach(chip => {
    const match = chip.getAttribute('onclick')?.includes('(' + discountPct + ')');
    chip.classList.toggle('active', !!match);
  });
}

function setHeistDiscount(pct) {
  const input = document.getElementById('heistDiscount');
  if (input) input.value = pct;
  calcHeistTotal();
}

function changeMembers(delta) {
  heistMembersCount = Math.max(1, Math.min(20, heistMembersCount + delta));
  calcHeistTotal();
}

function resetHeist() {
  heistQuantities = {};
  const discountInput = document.getElementById('heistDiscount');
  if (discountInput) discountInput.value = 0;
  heistMembersCount = 4;
  renderHeistItems();
  calcHeistTotal();
  showToast('🗑️ Barragem limpa');
}

function exportHeist() {
  const activeItems = [];
  let gross = 0;
  let totalQty = 0;

  HEIST_ITEMS.forEach(item => {
    const qty = heistQuantities[item.id] || 0;
    if (qty > 0) {
      const lineTotal = qty * item.price;
      gross += lineTotal;
      totalQty += qty;
      activeItems.push({ ...item, qty, lineTotal });
    }
  });

  if (activeItems.length === 0) {
    showToast('Adiciona itens ao loot primeiro!');
    return;
  }

  const discountPct = parseFloat(document.getElementById('heistDiscount')?.value) || 0;
  const discountVal = Math.round(gross * (discountPct / 100));
  const net = Math.max(0, gross - discountVal);
  const perMember = Math.round(net / (heistMembersCount || 1));

  const lines = [
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '🏦  BLACK MAMBA — RELATÓRIO DE BARRAGEM',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
    '',
    `📦 ITENS PILHADOS (${totalQty} itens):`,
  ];

  activeItems.sort((a, b) => b.lineTotal - a.lineTotal).forEach(it => {
    lines.push(`  • ${it.name} × ${it.qty} ➔ ${it.lineTotal.toLocaleString('pt-PT')} €`);
  });

  lines.push('');
  lines.push('💰 RESUMO FINANCEIRO:');
  lines.push(`  • Subtotal Bruto: ${gross.toLocaleString('pt-PT')} €`);
  if (discountPct > 0) {
    lines.push(`  • Taxa / Desconto (${discountPct}%): − ${discountVal.toLocaleString('pt-PT')} €`);
  }
  lines.push(`  • 💵 VALOR LÍQUIDO: ${net.toLocaleString('pt-PT')} €`);
  lines.push(`  • 👥 Divisão (${heistMembersCount} membros): ${perMember.toLocaleString('pt-PT')} € / cada`);
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Data: ${new Date().toLocaleString('pt-PT')}`);

  const text = lines.join('\n');
  document.getElementById('modalTitle').textContent = '🏦 Resumo da Barragem';
  document.getElementById('modalBody').textContent = text;
  document.getElementById('modalOverlay').style.display = 'flex';
}

function filterHeistItems() {
  const q = document.getElementById('heistSearch').value.toLowerCase().trim();
  document.querySelectorAll('.heist-item-card').forEach(card => {
    card.style.display = (!q || card.dataset.name.includes(q)) ? 'flex' : 'none';
  });
}

// ========== PARCERIAS ACTIONS ==========
function quickAdd(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  if (cart[productId]) {
    cart[productId].qty += 1;
  } else {
    cart[productId] = { product: p, qty: 1 };
  }
  updateCartBadge();
  renderCartItems();
  updateCartMaterials();
  const btn = document.getElementById('addbtn-' + productId);
  if (btn) { btn.classList.add('in-cart'); btn.textContent = '✓ No Carrinho'; }
  showToast(`✓ ${p.name} adicionado ao carrinho!`);
}

function applyHeistTaxAndOpen(taxPct) {
  switchMainTab('heist');
  setHeistDiscount(taxPct);
  showToast(`✓ Taxa de ${taxPct}% aplicada na Barragem!`);
}

// ========== CARTEL MADRAZO (C4) TABLE FILTER ==========
function filterC4Table(type) {
  document.querySelectorAll('.c4-filter-btn').forEach(b => {
    const isAll = type === 'all' && b.textContent.includes('Todos');
    const isMatch = !isAll && b.textContent.toLowerCase().includes(type);
    b.classList.toggle('active', isAll || isMatch);
  });

  const rows = document.querySelectorAll('#c4Table tbody tr');
  rows.forEach(r => {
    const rowType = r.dataset.c4type;
    if (type === 'all') {
      r.style.display = '';
    } else {
      r.style.display = (rowType === type) ? '' : 'none';
    }
  });
}

// ========== AUTENTICAÇÃO / ACESSO RESTRITO ==========
// Chaves de acesso autorizadas (podes adicionar, alterar ou remover chaves aqui):
const AUTHORIZED_PASSCODES = [
  'afonso',
  'yuzi',
  'chico',
  'ferreira',
  'white',
];

function checkAuthOnLoad() {
  const isAuth = localStorage.getItem('bm_auth') === 'true' || sessionStorage.getItem('bm_auth') === 'true';
  const overlay = document.getElementById('authOverlay');
  const logoutBtn = document.getElementById('logoutBtn');

  if (isAuth) {
    if (overlay) overlay.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'flex';
  } else {
    if (overlay) overlay.style.display = 'flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
    setTimeout(() => {
      document.getElementById('authPasscodeInput')?.focus();
    }, 150);
  }
}

function handleAuthSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('authPasscodeInput');
  const errEl = document.getElementById('authError');
  const card = document.getElementById('authCard');
  const remember = document.getElementById('authRemember')?.checked ?? true;
  const val = (input?.value || '').trim().toLowerCase();

  if (AUTHORIZED_PASSCODES.map(k => k.toLowerCase()).includes(val)) {
    if (remember) {
      localStorage.setItem('bm_auth', 'true');
    } else {
      sessionStorage.setItem('bm_auth', 'true');
    }

    if (errEl) errEl.style.display = 'none';
    const overlay = document.getElementById('authOverlay');
    if (overlay) {
      overlay.style.transition = 'opacity 0.3s ease';
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.opacity = '1';
      }, 300);
    }
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.style.display = 'flex';
    showToast('🔓 Acesso concedido à Black Mamba!');
  } else {
    if (errEl) {
      errEl.textContent = '❌ Palavra-passe incorreta! Tenta novamente.';
      errEl.style.display = 'block';
    }
    if (card) {
      card.classList.remove('shake');
      void card.offsetWidth;
      card.classList.add('shake');
    }
    input?.select();
  }
}

function togglePasscodeVisibility() {
  const input = document.getElementById('authPasscodeInput');
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
}

function logout() {
  localStorage.removeItem('bm_auth');
  sessionStorage.removeItem('bm_auth');
  const input = document.getElementById('authPasscodeInput');
  if (input) input.value = '';
  const errEl = document.getElementById('authError');
  if (errEl) errEl.style.display = 'none';
  checkAuthOnLoad();
  showToast('🔒 Sessão terminada');
}

