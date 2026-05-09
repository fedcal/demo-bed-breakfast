import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <h1>Il Salento autentico, in 4 camere uniche</h1>
        <p class="hero-tagline">Casa Lucia — B&amp;B a gestione familiare nel cuore del centro storico di Otranto. Colazione tipica salentina inclusa, dal 2010.</p>
        <div class="hero-actions">
          <a routerLink="/camere" class="btn btn-primary">Scopri le camere</a>
          <a routerLink="/contatti" class="btn btn-secondary">Prenota ora</a>
        </div>
      </div>
    </section>

    <section class="features demo-container">
      <h2>Perché scegliere Casa Lucia</h2>
      <ul class="feature-grid">
        <li>
          <span class="feature-icon" aria-hidden="true">🛏️</span>
          <h3>4 camere uniche</h3>
          <p>Ogni camera è diversa, arredata con cura con materiali e ceramiche del Salento.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">🍰</span>
          <h3>Colazione tipica inclusa</h3>
          <p>Pasticciotto, bocconotti, friselle e marmellate fatte in casa dalla famiglia Greco.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">📍</span>
          <h3>Posizione privilegiata</h3>
          <p>A 200 metri dal castello aragonese, 300 metri dal mare cristallino di Otranto.</p>
        </li>
        <li>
          <span class="feature-icon" aria-hidden="true">👨‍👩‍👧</span>
          <h3>Gestione familiare</h3>
          <p>Lucia e Sofia ti accolgono come a casa. Niente turismo di massa, esperienza autentica.</p>
        </li>
      </ul>
    </section>

    <section class="featured demo-container" *ngIf="featuredCamere$ | async as camere">
      <div class="section-header">
        <h2>Le nostre camere</h2>
        <a routerLink="/camere" class="link-more">Vedi tutte →</a>
      </div>
      <ul class="camere-grid">
        <li *ngFor="let camera of camere" class="camera-card">
          <div class="camera-card__emoji" aria-hidden="true">{{ camera.emoji }}</div>
          <div class="camera-card__body">
            <div class="camera-card__head">
              <h3>{{ camera.nome }}</h3>
              <span class="camera-card__tipo">{{ camera.tipo }}</span>
            </div>
            <p class="camera-card__desc">{{ camera.descrizione | slice:0:100 }}…</p>
            <div class="camera-card__footer">
              <span class="camera-card__price">da {{ camera.prezzoBassStagione | currency: 'EUR' : 'symbol' : '1.0-0' }}/notte</span>
              <span class="camera-card__mq">{{ camera.metriQuadri }} m²</span>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <section class="cta-band">
      <div class="demo-container">
        <h2>Prenota il tuo soggiorno nel Salento</h2>
        <p>Check-in 14:00–20:00 · Check-out entro le 11:00 · Animali ammessi · Colazione inclusa</p>
        <div class="hero-actions">
          <a routerLink="/contatti" class="btn btn-primary">Prenota</a>
          <a href="https://wa.me/393339876543" target="_blank" rel="noopener" class="btn btn-secondary">WhatsApp</a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.5rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
      }
      .hero-tagline {
        font-size: 1.15rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        max-width: 640px;
        margin-left: auto;
        margin-right: auto;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0850b0;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
      }
      .features {
        padding: 4rem 1rem;
      }
      .features h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .feature-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .feature-grid li {
        text-align: center;
      }
      .feature-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: 0.5rem;
      }
      .feature-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1.1rem;
      }
      .feature-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
      }
      .featured {
        padding: 4rem 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        margin: 0 1rem 4rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .camere-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      }
      .camera-card {
        background: #ffffff;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      .camera-card__emoji {
        font-size: 4rem;
        text-align: center;
        padding: 1.5rem;
        background: linear-gradient(135deg, #e8f4ff, #d0e8ff);
      }
      .camera-card__body {
        padding: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
      }
      .camera-card__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;
      }
      .camera-card__head h3 {
        margin: 0;
        font-size: 1.1rem;
      }
      .camera-card__tipo {
        font-size: 0.75rem;
        background: var(--color-bg-subtle);
        color: var(--color-fg-muted);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        white-space: nowrap;
      }
      .camera-card__desc {
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        margin: 0;
        flex: 1;
      }
      .camera-card__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        padding-top: 0.5rem;
        border-top: 1px solid var(--color-border);
      }
      .camera-card__price {
        color: var(--color-accent);
        font-weight: 700;
        font-size: 1rem;
      }
      .camera-card__mq {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
      }
      .cta-band {
        padding: 4rem 1rem;
        background: var(--color-fg-default);
        color: #ffffff;
        text-align: center;
      }
      .cta-band h2 {
        margin: 0 0 0.75rem;
        color: #ffffff;
      }
      .cta-band p {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 0 2rem;
      }
      .cta-band .btn-secondary {
        background: transparent;
        color: #ffffff;
        border-color: rgba(255, 255, 255, 0.3);
      }
      .cta-band .btn-secondary:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly featuredCamere$ = this.mockData.camere$.pipe(
    map((data) => data.camere.slice(0, 3))
  );
}
