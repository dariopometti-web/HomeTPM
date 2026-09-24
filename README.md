# HomeTPM · Website (standalone)

Sito ufficiale HomeTPM, indipendente dall'app iOS/Expo. Puro HTML statico +
CSS + un piccolo JS per lo switcher IT/EN. Nessun build step.

## Contenuto

```
hometpm-website/
├── index.html           landing bilingue (hero, features, come funziona, FAQ, about)
├── privacy.html         Privacy Policy (IT + EN, contenuti allineati all'app)
├── terms.html           Termini di uso (IT + EN)
├── support.html         Supporto / FAQ / contatto
├── 404.html             fallback GitHub Pages
├── README.md            questo file
└── assets/
    ├── css/style.css    stile globale, mobile-first, dark-mode automatico
    ├── js/i18n.js       switcher IT/EN (localStorage)
    └── img/logo.svg     logo HomeTPM
```

## Pubblicazione su GitHub Pages

1. Crea un repository nuovo (es. `hometpm/hometpm-website`).
2. Copia tutti i file di questa cartella nella root del repo.
3. Push su `main`.
4. In *Settings → Pages* del repo scegli:
   - **Source**: Deploy from a branch
   - **Branch**: `main` · `/ (root)`
5. Attendi qualche minuto. L'URL sarà del tipo
   `https://<utente>.github.io/hometpm-website/`.
6. Quando avrai un dominio custom (es. `hometpm.com`) potrai aggiungere un
   file `CNAME` (una riga con il dominio) e configurare il DNS. Per ora il
   CNAME **non è incluso** — verrà aggiunto quando serve.

## Placeholder attivi

- **Hero image** (blocco `.hero-visual`): mostra "Immagine definitiva in
  arrivo". Sostituire con l'asset visivo finale (WebP, 1200 × 900 o 4:3).
- **CTA App Store**: al momento reca "Coming soon on the App Store" e
  linka a `#coming-soon`. Sostituire con l'URL App Store una volta
  pubblicata l'app.

## Aggiornare i contenuti legali

I contenuti di `privacy.html`, `terms.html`, `support.html` sono estratti
automaticamente dal file `frontend/src/legal/content.ts` dell'app, così
che sito e app restino sempre coerenti. In caso di aggiornamento:

1. Modifica `frontend/src/legal/content.ts`
2. Riesegui lo script di estrazione (documentato nel prompt di sviluppo).

## Cosa NON è nel sito

- Nessuna dipendenza npm, nessun build step, niente Node.
- Nessun testimonial fittizio, nessun numero utenti inventato, nessun
  rating simulato.
- Nessun link App Store fake finché HomeTPM non sarà pubblicata.
- Nessun tracciamento di terze parti.

## Compatibilità

- Browser evergreen (Chrome, Safari, Firefox, Edge).
- Mobile-first, dark-mode automatico via `prefers-color-scheme`.
- Nessun cookie / storage remoto — solo `localStorage` locale per la
  scelta della lingua.
