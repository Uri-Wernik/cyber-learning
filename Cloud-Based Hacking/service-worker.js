const APP_ROOT = "/cyber-learning/";
const CACHE_PREFIX = "cyber-learning-";
const CACHE_NAME = `${CACHE_PREFIX}pwa-20260803-v7`;

const PRECACHE_URLS = [
  APP_ROOT,
  `${APP_ROOT}manifest.webmanifest`,
  `${APP_ROOT}stylesheets/extra.css?v=pwa-20260803-6`,
  `${APP_ROOT}assets/stylesheets/main.ec1eaa64.min.css`,
  `${APP_ROOT}assets/stylesheets/palette.ab4e12ef.min.css`,
  `${APP_ROOT}assets/javascripts/bundle.d7400e89.min.js`,
  `${APP_ROOT}assets/javascripts/workers/search.2c215733.min.js`,
  `${APP_ROOT}javascripts/pwa.js?v=20260803`,
  `${APP_ROOT}javascripts/quiz-loader.js?v=20260803-1`,
  `${APP_ROOT}javascripts/quiz-data.js?v=20260803-1`,
  `${APP_ROOT}javascripts/quiz.js?v=20260803-1`,
  `${APP_ROOT}search/search_index.json`,
  `${APP_ROOT}assets/site/apple-touch-icon.png`,
  `${APP_ROOT}assets/site/app-icon-192.png`,
  `${APP_ROOT}assets/site/app-icon-512.png`,
  `${APP_ROOT}assets/site/app-icon-maskable-512.png`,
  `${APP_ROOT}assets/site/brand-mark.png`,
  `${APP_ROOT}assets/site/cover-network-indigo.png`,
  `${APP_ROOT}assets/site/cover-network-mobile-indigo.png`,
  `${APP_ROOT}assets/fonts/ibm-plex-sans-latin.woff2`,
  `${APP_ROOT}assets/fonts/literata-latin.woff2`,
  `${APP_ROOT}quiz/`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/01-teaser/`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/02-introduction-to-hacking-using-the-cloud/`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/03-what-is-the-cloud/`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/04-why-learn-cloud-computing-as-a-hacker/`,
  `${APP_ROOT}02-cloud-basics/05-introduction-to-cloud-basics/`,
  `${APP_ROOT}02-cloud-basics/06-signing-up-with-aws/`,
  `${APP_ROOT}02-cloud-basics/07-installing-kali-linux-on-the-cloud/`,
  `${APP_ROOT}02-cloud-basics/08-communicating-with-cloud-computers-remotely-using-ssh/`,
  `${APP_ROOT}02-cloud-basics/09-linux-terminal-basics/`,
  `${APP_ROOT}03-phishing/10-introduction-to-phishing/`,
  `${APP_ROOT}03-phishing/11-file-hosting-and-firewall-settings/`,
  `${APP_ROOT}03-phishing/12-cloning-websites-and-uploading-them-to-the-cloud/`,
  `${APP_ROOT}03-phishing/13-creating-a-fake-login-page-on-the-cloud/`,
  `${APP_ROOT}03-phishing/assets/aula-12/01-configuracao-sftp-filezilla.png`,
  `${APP_ROOT}03-phishing/assets/aula-12/02-conexao-sftp-bem-sucedida.png`,
  `${APP_ROOT}03-phishing/assets/aula-13/01-diretorio-remoto-var-www-html.png`,
  `${APP_ROOT}03-phishing/assets/aula-13/02-erro-permissao-filezilla.png`,
  `${APP_ROOT}03-phishing/assets/aula-13/03-propriedade-root-root.png`,
  `${APP_ROOT}03-phishing/assets/aula-13/04-comando-chown-terminal.png`,
  `${APP_ROOT}03-phishing/assets/aula-13/05-propriedade-kali-kali.png`
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") return caches.match(APP_ROOT);
        return Response.error();
      })
  );
});