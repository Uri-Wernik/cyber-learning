const APP_ROOT = "/cyber-learning/";
const CACHE_PREFIX = "cyber-learning-";
const CACHE_NAME = `${CACHE_PREFIX}pwa-20261025-immersive-reader-v23`;

const PRECACHE_URLS = [
  APP_ROOT,
  `${APP_ROOT}manifest.webmanifest`,
  `${APP_ROOT}stylesheets/book.css?v=20261025-8`,
  `${APP_ROOT}stylesheets/quiz-book.css?v=20261025-2`,
  `${APP_ROOT}javascripts/book-theme.js?v=20261025-2`,
  `${APP_ROOT}javascripts/book.js?v=20261025-7`,
  `${APP_ROOT}javascripts/pwa.js?v=20261025-2`,
  `${APP_ROOT}javascripts/quiz-loader.js?v=20261006-2`,
  `${APP_ROOT}javascripts/quiz-fixation-data.js?v=20261005-3`,
  `${APP_ROOT}javascripts/quiz-exam-data.js?v=20261006-1`,
  `${APP_ROOT}javascripts/quiz.js?v=20261006-2`,
  `${APP_ROOT}search/search_index.json`,
  `${APP_ROOT}assets/site/apple-touch-icon.png`,
  `${APP_ROOT}assets/site/app-icon-192.png`,
  `${APP_ROOT}assets/site/app-icon-512.png`,
  `${APP_ROOT}assets/site/app-icon-maskable-512.png`,
  `${APP_ROOT}assets/site/brand-mark.png`,
  `${APP_ROOT}assets/site/cloud-learning.svg`,
  `${APP_ROOT}assets/site/course-cover-illustrated.svg`,
  `${APP_ROOT}assets/site/cyber-learning-logo.svg`,
  `${APP_ROOT}assets/lessons/aula-01-escopo.svg`,
  `${APP_ROOT}assets/lessons/aula-02-modalidades.svg`,
  `${APP_ROOT}assets/lessons/aula-04-callback.svg`,
  `${APP_ROOT}assets/lessons/aula-05-ciclo.svg`,
  `${APP_ROOT}assets/lessons/aula-06-identidades.svg`,
  `${APP_ROOT}assets/lessons/aula-07-instancia.svg`,
  `${APP_ROOT}assets/lessons/aula-08-chaves-ssh.svg`,
  `${APP_ROOT}assets/lessons/aula-09-comando.svg`,
  `${APP_ROOT}assets/lessons/aula-10-decisao.svg`,
  `${APP_ROOT}assets/lessons/aula-11-apache.svg`,
  `${APP_ROOT}assets/lessons/aula-12-transferencia.svg`,
  `${APP_ROOT}assets/lessons/aula-13-permissao.svg`,
  `${APP_ROOT}assets/lessons/aula-14-formulario.svg`,
  `${APP_ROOT}assets/lessons/aula-15-php.svg`,
  `${APP_ROOT}assets/lessons/aula-16-dns.svg`,
  `${APP_ROOT}assets/lessons/aula-17-registros.svg`,
  `${APP_ROOT}assets/lessons/aula-18-tls.svg`,
  `${APP_ROOT}assets/lessons/aula-19-certificado.svg`,
  `${APP_ROOT}assets/lessons/aula-20-duas-conexoes.svg`,
  `${APP_ROOT}assets/lessons/aula-21-estados.svg`,
  `${APP_ROOT}assets/lessons/aula-22-sessao.svg`,
  `${APP_ROOT}assets/lessons/secao-04-apoio.json`,
  `${APP_ROOT}assets/fonts/ibm-plex-sans-latin.woff2`,
  `${APP_ROOT}assets/fonts/ibm-plex-sans-latin-italic.woff2`,
  `${APP_ROOT}assets/fonts/ibm-plex-mono-latin.woff2`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/provision.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/virtual.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/control.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/network.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/url.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/request.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/conditions.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/responsibility.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/availability.svg`,
  `${APP_ROOT}01-introduction-to-cloud-computing-for-hackers/assets/aula-03/scale.svg`,
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
  `${APP_ROOT}03-phishing/14-modifying-the-page-to-steal-login-information/`,
  `${APP_ROOT}03-phishing/15-stealing-facebook-login-using-an-identical-fake-login-page/`,
  `${APP_ROOT}03-phishing/16-domain-name-and-dns-basics/`,
  `${APP_ROOT}03-phishing/17-linking-domain-names-to-phishing-pages/`,
  `${APP_ROOT}03-phishing/18-introduction-to-https/`,
  `${APP_ROOT}03-phishing/19-enabling-https-on-phishing-pages/`,
  `${APP_ROOT}blue-team/01-da-exposicao-a-investigacao/`,
  `${APP_ROOT}04-phishing-bypassing-2fa-mfa/20-introduction-to-evilginx/`,
  `${APP_ROOT}04-phishing-bypassing-2fa-mfa/21-installing-evilginx-on-the-cloud/`,
  `${APP_ROOT}04-phishing-bypassing-2fa-mfa/22-bypassing-2fa-mfa/`,
  `${APP_ROOT}04-phishing-bypassing-2fa-mfa/assets/fluxo-autenticacao-proxy-mfa.png`,
  `${APP_ROOT}04-preparacao-para-prova/01-guia-de-estudo/`,
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
        if (request.mode === "navigate") {
          if (url.pathname === `${APP_ROOT}quiz/`) {
            return caches.match(`${APP_ROOT}quiz/`);
          }
          return caches.match(APP_ROOT);
        }
        return Response.error();
      })
  );
});