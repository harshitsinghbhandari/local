const CACHE_NAME = "xprize-reader-v2";

const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./reader-icon.svg",
  "./reader-icon-512.png",
  "./XPRIZE_HACKATHON.md",
  "./research/00-approach.md",
  "./research/01-recently-funded-yc.md",
  "./research/02-themes-and-patterns.md",
  "./research/03-pain-points-people-pay-for.md",
  "./research/04-opportunities-for-hackathon.md",
  "./ideas/01-freelancer-tax-prep.md",
  "./ideas/02-smb-legal-docs.md",
  "./ideas/03-solopreneur-bookkeeping.md",
  "./ideas/04-job-application-agent.md",
  "./ideas/05-college-app-counselor.md",
  "./ideas/06-voice-tutoring.md",
  "./ideas/07-local-trades-lead-gen.md",
  "./ideas/08-fsbo-real-estate.md",
  "./ideas/09-mortgage-loan-concierge.md",
  "./ideas/10-hr-in-a-box.md",
  "./ideas/11-underbanked-finance.md",
  "./ideas/12-translation-localization.md",
  "./ideas/13-insurance-claims.md",
  "./ideas/14-cold-outreach-sdr.md",
  "./ideas/15-l1-support-outsourcer.md",
  "./ideas/16-seo-content-agency.md",
  "./ideas/17-grant-writer.md",
  "./ideas/18-immigration-assistant.md",
  "./ideas/19-incorporation-compliance.md",
  "./ideas/20-small-landlord-pm.md"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (event) => {
  if (!event.data || event.data.type !== "CACHE_DOCS") return;
  const urls = event.data.docs.map((path) => `./${path}`);
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urls)));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});
