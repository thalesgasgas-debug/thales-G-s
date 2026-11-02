// 1. Sempre que mudar alguma imagem ou código, mude o número da versão abaixo (ex: v2, v3...)
const CACHE_NAME = 'thales-gas-cache-v2';

// 2. Lista de arquivos que o Service Worker vai armazenar (baseado no seu projeto)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './logo.jpg',
  './produto-água.png',
  './produto-gás.png',
  './favicon.png',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png'
];

// Instalação do Service Worker e armazenamento dos novos arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Armazenando novos arquivos no cache...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => {
      // Força o Service Worker atual a se tornar ativo imediatamente
      return self.skipWaiting();
    })
  );
});

// Ativação: Aqui limpamos de forma AUTOMÁTICA o cache com a imagem antiga da gota
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Limpando cache antigo de arquivos:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      // Garante que o novo Service Worker controle a página imediatamente
      return self.clients.claim();
    })
  );
});

// Estratégia de Cache: Serve os arquivos do cache para o app abrir instantaneamente
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
