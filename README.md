# 🐍 Black Mamba — Sistema de Encomendas & Produção

Sistema web para gestão e cálculo automático de encomendas de armas, coletes, acessórios, calculadora de divisões de barragens e precários oficiais de parcerias (Wu-Chang, The Lost MC, Cartel Madrazo).

---

## 🛠️ Guia para o Configurador (Editar Preços, Nomes e Receitas)

Todos os dados da aplicação estão agora organizados em ficheiros **JSON isolados e legíveis** na pasta [`data/`](./data):

| Ficheiro | O que podes configurar |
| :--- | :--- |
| 📦 [`data/produtos.json`](./data/produtos.json) | Nomes, emojis, categorias, materiais de montagem e todos os preços (**Blip**, **Parceria**, **Civil**, **S/Peças**). |
| ⛏️ [`data/receitas.json`](./data/receitas.json) | Receitas de transformação para materiais secundários (ABS, Aço, Bronze, Polímero). |
| 🏦 [`data/barragens.json`](./data/barragens.json) | Lista de itens pilháveis em barragens, emojis e valores unitários em euros. |
| 🤝 [`data/parcerias.html`](./data/parcerias.html) | Conteúdo HTML das tabelas e acordos de parceria. |
| 🔑 [`data/senhas.json`](./data/senhas.json) | Lista de senhas autorizadas a desencriptar o cofre. |

---

## 🚀 Como Aplicar as Alterações (1 Clique)

Depois de editar qualquer um dos ficheiros na pasta `data/`, basta compilar para atualizar o cofre criptografado com AES-256-GCM em `app.js`:

### Opção 1 (Mais fácil — Windows):
> Dá **duplo clique** no ficheiro **`compilar.bat`** na raiz do projeto!

### Opção 2 (Via Terminal):
```bash
npm run build
# ou
node build.js
```

O script valida a sintaxe dos ficheiros, cifra os dados com segurança matemática de ponta e atualiza o `app.js` automaticamente.

---

## 🌐 Edição Direta no Navegador (Exportar / Importar)

Na barra lateral do site, na aba **⚙️ Config**:
- **📥 Exportar JSON**: Permite descarregar um `produtos.json` atualizado com as alterações feitas na interface.
- **📤 Importar JSON**: Permite carregar um ficheiro `.json` diretamente no site para testar na hora sem necessidade de compilação.
