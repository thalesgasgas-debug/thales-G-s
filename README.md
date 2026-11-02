# Thales Gás – App (GitHub Pages)

## Como publicar
1. Crie um repositório no GitHub (ex.: `thales-gas`).
2. Envie TODOS os arquivos de dentro da pasta (não a pasta em si) para a raiz do repositório (Add file → Upload files).
3. Vá em **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** e clique em **Save**.
5. Em 1–2 minutos o site estará em `https://SEU-USUARIO.github.io/thales-gas/`.

## Instalar como app no celular
- **Android (Chrome):** menu ⋮ → "Instalar app" / "Adicionar à tela inicial".
- **iPhone (Safari):** Compartilhar → "Adicionar à Tela de Início".

## Para editar
- Números e mensagem do WhatsApp: no `index.html` (atributos `data-num` e a constante `MSG`).
- Logo: troque o `logo.jpg` (e os ícones `icon-*.png`).

## Como funciona
- Ao abrir o link aparece um convite para instalar o app (Android/Chrome: botão Instalar; iPhone: mostra as instruções de Compartilhar → Tela de Início).
- O cliente toca em **Gás** ou **Água**, escolhe o número e abre o WhatsApp já com o produto na mensagem.
- Para trocar produtos: edite os botões `data-produto` no `index.html`.
