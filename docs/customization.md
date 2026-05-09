# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Bed and Breakfast'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `bed-breakfast` con nome cliente (`acme-bb`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account

---

## Possibili Sviluppi Customizzabili per B&B

### 1. Smart Lock August + Digital Key QR
**Scope**: ~18h | **Tier**: Avanzato | **Valore**: Contactless check-in, security enhancement

Guest riceve QR email → scansiona apre porta (August smart lock). Zero chiave fisica, riduce steal/lost keys.

### 2. Virtual Tour 360° Camere Matterport
**Scope**: ~16h | **Tier**: Avanzato | **Valore**: Conversion pre-booking +14%, cancellation -10%

Ogni camera: scannerizzazione Matterport interactive. Hotspot bagno/colazione/WiFi. Mobile-first walkthrough.

### 3. Dynamic Pricing Stagionale AI
**Scope**: ~20h | **Tier**: Avanzato | **Valore**: Revenue per room +15-20%

ML predice demand: weekend +25%, festival locale +40%, feriale -10%. Auto-adjust Stripe prices daily.

### 4. Community Board + Aperitivo Settimanale
**Scope**: ~14h | **Tier**: Intermedio+ | **Valore**: Guest engagement, word-of-mouth +25%

Forum privato guests: "Chi va al Colosseo domani?", "Ristorante consigliato?". Proprietario ospita aperitivo mercoledì ore 18.

### 5. Loyalty 5-Soggiorn Rewards Program
**Scope**: ~12h | **Tier**: Avanzato | **Valore**: Retention +35%, repeat booking +40%

5 soggiorni = upgrade camera gratis. Tracking SMS automatico.

### 6. Multi-Unit Property Manager
**Scope**: ~22h | **Tier**: Avanzato | **Valore**: Scalability per 2-5 apartamenti

Proprietario gestisci 5 camere/apartamenti da single dashboard. Consolidate calendar, housekeeping assignment.

### 7. Email Newsletter Tema Settimanale
**Scope**: ~10h | **Tier**: Intermedio+ | **Valore**: Engagement +30%, upsell weekend promo

"Lunedì mattina: ristorante consigliato settimana", "Mercoledì: evento free Colosseo". Template beauty.

### 8. Airbnb/Booking Sync Automatica
**Scope**: ~16h | **Tier**: Intermedio+ | **Valore**: Revenue maximize, overbooking prevention

Carica inventory una volta → sincronizza automatico Airbnb/Booking. Cancella dates quando booked.

### 9. Guest Experience NPS + Follow-up
**Scope**: ~14h | **Tier**: Intermedio+ | **Valore**: Reputation management, feedback loop

Post-stay: SMS NPS ("Voto 1-10?"). Voto 9-10 → chiedi Google review. Voto <7 → proprietario follow-up.

### 10. Concierge Locale AI (Ollama RAG)
**Scope**: ~20h | **Tier**: Avanzato | **Valore**: Guest satisfaction +8 NPS points, staff load -25%

Bot 24/7: "Ristorante aperto domenica sera?", "Colazione ore 7am disponibile?". Proprietary knowledge base locale.

### 11. Content Hub Blog SEO (Google)
**Scope**: ~24h | **Tier**: Premium | **Valore**: Organic traffic +200%, SEO domain authority grow

12 articoli/anno: "10 ristoranti nascosti Roma", "Weekend romantico", "Cosa fare con pioggia". Long-tail SEO.

### 12. Photo Improvement AI Upscale
**Scope**: ~13h | **Tier**: Intermedio+ | **Valore**: Visual appeal +20%, booking confidence +18%

Client photo cruda → AI upscale (Upscayl) + color correction + HDR effect. Automatic batch per batch novo proprietario.

**Total**: 12 customizzazioni per €3.5k-5k development, ROI medio 5-7 mesi.
