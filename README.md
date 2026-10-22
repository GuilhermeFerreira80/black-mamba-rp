# Black Mamba — Sistema de Gestão & Encomendas RP

Sistema dinâmico de cálculo de encomendas, materiais de produção, calculadora de barragens e tabela de parcerias para a fação **Black Mamba**.

Feito com dedicação por **Ferreirauhau**.

---

## 🚀 Funcionalidades

1. **Catálogo de Encomendas & Materiais**:
   - 46 itens fictícios (Armas, Munições, Acessórios, Colete, etc.).
   - Cálculo automático e instantâneo de materiais brutos e componentes necessários.
   - Barra lateral retrátil para configuração dinâmica de preços e quantidades por lote.
   - Carrinho dinâmico com resumo detalhado e botão de exportação para Discord/Bloco de Notas.

2. **Calculadora de Barragens**:
   - 24 operações e barragens com cálculo automático de custos, tempo e lucro.
   - Integração com a folha de cálculo oficial.

3. **Parcerias Estratégicas**:
   - **Cartel Madrazo**: Acessórios, Coletes e C4.
   - **The Lost MC (Motoclube)**: Medic Kits, Tacos e Processos PSP.
   - **Vanilla Unicorn (Bar)**: Energéticos e suprimentos.

4. **Segurança Criptográfica (Vault AES-256-GCM)**:
   - Os dados do catálogo, fórmulas de materiais e tabelas de parcerias **não existem em texto simples** nos ficheiros.
   - Encontram-se cifrados com **AES-256-GCM** e derivação de chave **PBKDF2** (100.000 iterações com SHA-256).
   - Sem uma das senhas autorizadas, o código JavaScript não contém nenhuma informação legível.
   - Proteções anti-DevTools ativas (bloqueio de F12, atalhos de inspeção e clique direito).

---

## 🔑 Acesso Autorizado

O cofre está totalmente protegido e encriptado. O acesso é exclusivo para membros autorizados da fação Black Mamba mediante chave de acesso confidencial fornecida pelos líderes.
