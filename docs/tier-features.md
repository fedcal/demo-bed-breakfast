# Funzionalità per Tier — Bed & Breakfast

Tre livelli di template per B&B e affittacamere, dal sito vetrina alla piattaforma completa con virtual tour e concierge locale AI.

## Tier Base — €500-800 (consegna 2-3 settimane)

**Per chi**: B&B piccolo che vuole presenzialanza online diretta vs dipendenza 100% Airbnb/Booking.  
**Sforzo stimato**: ~80h.

### Funzionalità incluse

- **Home Hero** foto camera + CTA "Prenota"
- **Card Camere Strutturate**:
  - Foto letto/bagno/vista
  - Dettagli: letto singolo/matrimoniale, occupanti max
  - Prezzo/notte + disponibilità generica
  - Amenity checklist (WiFi, TV, Riscaldamento, ecc.)
- **Proprietario Tono Friendly**
  - Bio breve + foto proprietario
  - Story family-run atmosphere
- **Foto Comuni**
  - Colazione (buffet setup)
  - Lounge/salotto
  - Giardino/terrazza
- **Mappa Quartiere**
  - Trasporto pubblico vicinanza (metro/bus/stazione)
  - Attrazioni (parchi, piazze, ristoranti) raggio 1km
- **Form WhatsApp** prenotazioni/domande
- **Schema BedAndBreakfast + Place** JSON-LD
- **Mobile-first responsive**

### Cosa NON è incluso

- Booking calendar realtime
- Guest portal
- Multi-lingua
- Newsletter
- POS

### Pricing add-on

| Add-on | Costo | Note |
|--------|-------|------|
| Dominio .it | €9/anno | Incluso anno 1 |
| Hosting + SSL | €50/anno | Modest traffic |

---

## Tier Intermedio — €1.500-2.200 (consegna 4-6 settimane)

**Per chi**: B&B consolidato che vuole booking diretto e ridurre commissioni OTA (15-25%).  
**Sforzo stimato**: ~250h.

### Funzionalità incluse (oltre al Base)

- **Booking Engine Semplice**
  - Calendar disponibilità realtime (evita overbooking)
  - Selezione check-in/check-out date
  - Selezione numero camere
  - Stripe caparra 30% (email + SMS confirm)
  - Cancellazione self-service (fino 7 giorni prima)
  - Note speciali: "Anniversario", "Luna di miele", "Fumatori" flag

- **Integrazione Airbnb/Booking.com Widget**
  - Embed loro calendar nel tuo sito (cattura traffic Airbnb/Booking verso tu)
  - Alternative: "Prenota anche da Airbnb"
  - Multi-channel awareness

- **Guest Journey Pre-Arrival**
  - Email 7 giorni prima: "Ciao! Leggiamo che arrivi tra una settimana"
  - WiFi password + colazione ora + check-in instructions
  - Info aree: ristoranti consigliati 500m, transport pass locale

- **Guest Feedback Post-Stay**
  - Survey NPS (Net Promoter Score) opzionale
  - Upsell: "Voto 9-10? Lascia review Google → sconto 5% prossimo soggiorno"

- **Newsletter Offerta Stagionale**
  - "Weekend romantico maggio" (sconto coppia)
  - "Estate al fresco" (sconto long-stay 5+ notti)
  - "Promo corporate" (team building, incentive)

- **Multi-lingua IT/EN/DE/ES/FR**
  - Attrae turista europeo

- **Google Business Profile Auto-Sync**

### Integrazioni

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Stripe | 1.4% + €0.30 | Payment processor |
| Twilio SMS | €15-25 | Conferma prenotazione |
| SendGrid Email | €20 | Transactional + newsletter |

---

## Tier Avanzato — €4.000-6.000 (consegna 10-12 settimane)

**Per chi**: B&B multi-unità (2-5 apartamenti) o boutique con community focus + AI.  
**Sforzo stimato**: ~480h.

### Funzionalità incluse (oltre all'Intermedio)

- **Virtual Tour 360° Camere**
  - Matterport scan ogni camera
  - Interactive hotspot: clic bagno → mostra amenity
  - Mobile-friendly: walkthrough telefono prima di booking

- **Community Guest Board**
  - Eventi locali (mostre, festa patronale, mercati)
  - Board messaggi: "Chi vuole cena insieme stasera?"
  - Aperitivo comunitario settimanale (ice-breaker proprietario)
  - Scambio insider tips (ristorante locale segreto)

- **Smart Lock Integration**
  - August / Yale smart lock
  - QR code + link email → digital key
  - No chiave fisica: sicurezza + flessibilità check-in

- **Loyalty Program**
  - 5 soggiorni → camera upgrade gratis prossima volta
  - Referral: amico prenota → €15 buono entrambi
  - Birthday bonus: mese compleanno → free colazione

- **Concierge Locale AI** (RAG on-prem Ollama llama3.1:8b)
  - Knowledge base: ristoranti, musei, transport, events
  - Query: "Ristorante open kitchen, 20€ budget?"
  - Booking assist: eventualmente prenota per guest (WhatsApp proprietario)

- **Dynamic Pricing**
  - Weekend premium (30% + base)
  - Long-stay discount (7+ notti = -15%)
  - Seasonal: estate peak, inverno low

- **Multi-unit Management**
  - 2-5 appartamenti su dashboard
  - Consolidate occupancy view
  - Staff assignment (pulizie, check-in per unit)

### Integrazioni Enterprise

| Stack | Costo/anno | Note |
|-------|-----------|------|
| Ollama AI (on-prem) | €0 | llama3.1:8b VPS locale |
| August Smart Lock | €80-200 | Digital keys |
| Matterport 360 | €200-500 | Virtual tours |
| Stripe Connect | Free | Payout management multi-unit |

---

## Confronto Tier

| Funzionalità | Base | Intermedio | Avanzato |
|---|:---:|:---:|:---:|
| Card Camere | ✓ | ✓ | ✓ |
| Bio Proprietario | ✓ | ✓ | ✓ |
| Mappa Quartiere | ✓ | ✓ | ✓ |
| **Booking Calendar** | — | ✓ | ✓ |
| **SMS Confirm** | — | ✓ | ✓ |
| **Guest Journey** | — | ✓ | ✓ |
| **Multi-lingua** | — | ✓ | ✓ |
| **Newsletter** | — | ✓ | ✓ |
| **Virtual Tour 360** | — | — | ✓ |
| **Community Board** | — | — | ✓ |
| **Smart Lock** | — | — | ✓ |
| **Loyalty Program** | — | — | ✓ |
| **Concierge AI** | — | — | ✓ |
| **Dynamic Pricing** | — | — | ✓ |
| **Multi-unit** | — | — | ✓ |

---

## Manutenzione Ricorrente

| Piano | €/mese | Incluso |
|-------|---------|---------|
| **Basic** | €50 | Hosting + SSL + 1 backup/sett |
| **Standard** | €100 | Basic + 4h modifiche/mese + phone support |
| **Premium** | €200 | Standard + 12h modifiche/mese + CDN + AI model updates |

---

## Timeline Post-Deploy

### Sett. 1-4 (incluso)
- Lancio booking engine
- Setup SMS + email transactional
- Training pre-arrival guest journey

### Mese 2-3 (Standard plan)
- Gallery foto fine-tuning
- SEO optimization locale
- Newsletter test campaign

### Mese 4+ (Premium plan)
- Smart lock integration
- Concierge AI live
- Community board launch
- Multi-unit se applicabile

---

## Caso Studio Reale

**B&B Z (3 camere, Roma centro)**:
- Base: €650 (sito vetrina)
- + Intermedio: €1.800 (booking online)
- Risultato: 40% prenotazioni via sito (riduzione OTA dipendenza)
- ROI: 5-6 mesi (margine +€500-800/mese)

---

**Contatta Federico per quotazione personalizzata.**

