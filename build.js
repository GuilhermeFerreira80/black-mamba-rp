/**
 * =========================================================================
 * BLACK MAMBA — COMPILADOR DE DADOS E COFRE CRIPTOGRÁFICO (AES-256-GCM)
 * =========================================================================
 * 
 * Este script lê os ficheiros isolados da pasta /data:
 *   - data/produtos.json   (Armas, Coletes, Acessórios, Bar, Motoclube, Mesa Química)
 *   - data/receitas.json   (Receitas de matérias-primas: ABS, Aço, Bronze, Polímero)
 *   - data/barragens.json  (Itens e preços da calculadora de barragens)
 *   - data/parcerias.html  (Estrutura HTML das tabelas e parcerias oficiais)
 *   - data/senhas.json     (Senhas de acesso autorizadas)
 * 
 * E gera automaticamente o cofre cifrado (AES-256-GCM + PBKDF2) dentro de app.js.
 * 
 * Como usar:
 *   node build.js
 * ou dê dois cliques no ficheiro 'compilar.bat'!
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, 'data');
const APP_JS_PATH = path.join(__dirname, 'app.js');

// Cores para o terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  red: '\x1b[31m',
  bold: '\x1b[1m'
};

function log(msg, color = colors.reset) {
  console.log(`${color}${msg}${colors.reset}`);
}

function loadJsonFile(filename) {
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Ficheiro não encontrado: ${filePath}`);
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(`Erro de sintaxe JSON em ${filename}: ${err.message}`);
  }
}

function buildVault() {
  log('\n╔════════════════════════════════════════════════════════════╗', colors.cyan);
  log('║    🐍 BLACK MAMBA — COMPILADOR & GERADOR DE COFRE 🔐     ║', colors.bold + colors.cyan);
  log('╚════════════════════════════════════════════════════════════╝\n', colors.cyan);

  // 1. Carregar ficheiros isolados
  log('📂 A carregar dados isolados da pasta /data...', colors.blue);
  
  const products = loadJsonFile('produtos.json');
  const rawRecipes = loadJsonFile('receitas.json');
  const heist = loadJsonFile('barragens.json');
  const passwords = loadJsonFile('senhas.json');

  const parceriasHtmlPath = path.join(DATA_DIR, 'parcerias.html');
  if (!fs.existsSync(parceriasHtmlPath)) {
    throw new Error('Ficheiro data/parcerias.html não encontrado!');
  }
  const parceriasHTML = fs.readFileSync(parceriasHtmlPath, 'utf8');

  log(`  ✓ ${products.length} produtos carregados (Bairro, Org, Acessórios, Coletes, Bar, Lost MC, Mesa)`, colors.green);
  log(`  ✓ ${Object.keys(rawRecipes).length} receitas de matérias-primas carregadas`, colors.green);
  log(`  ✓ ${heist.length} itens de barragem carregados`, colors.green);
  log(`  ✓ Tabelas de parcerias carregadas (${parceriasHTML.length.toLocaleString('pt-PT')} caracteres)`, colors.green);
  log(`  ✓ ${passwords.length} senhas autorizadas: [${passwords.join(', ')}]`, colors.green);

  // 2. Gerar Salt e Master Encryption Key (MEK) aleatórios
  log('\n🔒 A criptografar cofre com AES-256-GCM + PBKDF2 (100.000 iterações)...', colors.yellow);
  const salt = crypto.randomBytes(16);
  const saltHex = salt.toString('hex');
  const mek = crypto.randomBytes(32);

  // 3. Criar slots para cada senha
  const slots = [];
  passwords.forEach(pwd => {
    const cleanPass = pwd.trim().toLowerCase();
    const hash = crypto.createHash('sha256').update(cleanPass + ':' + saltHex).digest('hex');
    const kek = crypto.pbkdf2Sync(cleanPass, salt, 100000, 32, 'sha256');
    const slotIv = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv('aes-256-gcm', kek, slotIv);
    let wrapped = cipher.update(mek);
    wrapped = Buffer.concat([wrapped, cipher.final(), cipher.getAuthTag()]);

    slots.push({
      hash,
      iv: Array.from(slotIv),
      key: Array.from(wrapped)
    });
  });

  // 4. Criptografar payload completo com a MEK
  const payloadObj = {
    products,
    rawRecipes,
    heist,
    parceriasHTML
  };
  const payloadJson = JSON.stringify(payloadObj);
  const payloadIv = crypto.randomBytes(12);
  const pCipher = crypto.createCipheriv('aes-256-gcm', mek, payloadIv);
  let encPayload = pCipher.update(payloadJson, 'utf8');
  encPayload = Buffer.concat([encPayload, pCipher.final(), pCipher.getAuthTag()]);

  const VAULT = {
    salt: saltHex,
    slots: slots,
    iv: Array.from(payloadIv),
    payload: encPayload.toString('base64')
  };

  // 5. Injetar o novo cofre em app.js
  log('💾 A atualizar o ficheiro app.js...', colors.blue);
  let appJs = fs.readFileSync(APP_JS_PATH, 'utf8');

  const vaultRegex = /const VAULT = (\{[\s\S]*?\});\r?\n/;
  if (!vaultRegex.test(appJs)) {
    throw new Error('Não foi possível encontrar a declaração "const VAULT = {...};" em app.js!');
  }

  const newVaultDecl = `const VAULT = ${JSON.stringify(VAULT)};\n`;
  appJs = appJs.replace(vaultRegex, newVaultDecl);
  fs.writeFileSync(APP_JS_PATH, appJs, 'utf8');

  // 6. Atualizar versão de cache em index.html (cache-busting automático para o navegador não usar ficheiro antigo)
  const INDEX_HTML_PATH = path.join(__dirname, 'index.html');
  if (fs.existsSync(INDEX_HTML_PATH)) {
    const buildVer = Date.now().toString(36);
    let html = fs.readFileSync(INDEX_HTML_PATH, 'utf8');
    html = html.replace(/src="app\.js(?:\?v=[^"']*)?"/g, `src="app.js?v=${buildVer}"`);
    html = html.replace(/href="style\.css(?:\?v=[^"']*)?"/g, `href="style.css?v=${buildVer}"`);
    fs.writeFileSync(INDEX_HTML_PATH, html, 'utf8');
    log(`  ✓ Versão de cache atualizada em index.html (?v=${buildVer})`, colors.green);
  }

  log('\n🎉 SUCESSO! O cofre foi compilado e app.js foi atualizado!', colors.bold + colors.green);
  log('------------------------------------------------------------', colors.cyan);
  log('👉 Agora podes abrir o site ou fazer git push com os novos dados.', colors.cyan);
  log('👉 Todos os dados continuam 100% blindados contra o DevTools/F12!\n', colors.cyan);
}

try {
  buildVault();
} catch (err) {
  log(`\n❌ ERRO NA COMPILAÇÃO: ${err.message}\n`, colors.bold + colors.red);
  process.exit(1);
}
