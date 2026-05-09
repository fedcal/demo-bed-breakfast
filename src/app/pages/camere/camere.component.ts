import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-camere',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Le nostre camere</h1>
        <p>4 camere arredate con materiali salentini, ognuna con carattere unico. Colazione tipica inclusa.</p>
      </div>
    </section>

    <article class="demo-container" *ngIf="camere$ | async as data">
      <ul class="stagioni-legend">
        <li class="stagione stagione--bassa">Bassa stagione: Nov–Mar</li>
        <li class="stagione stagione--media">Media stagione: Apr–Mag, Set–Ott</li>
        <li class="stagione stagione--alta">Alta stagione: Giu–Ago</li>
      </ul>

      <ul class="camere-list">
        <li *ngFor="let camera of data.camere" class="camera-item" [id]="'camera-' + camera.id">
          <div class="camera-item__media">
            <span class="camera-item__emoji" aria-hidden="true">{{ camera.emoji }}</span>
          </div>

          <div class="camera-item__content">
            <div class="camera-item__head">
              <div class="camera-item__title-row">
                <h2>{{ camera.nome }}</h2>
                <span class="badge badge--tipo">{{ camera.tipo }}</span>
              </div>
              <div class="camera-item__meta">
                <span>{{ camera.metriQuadri }} m²</span>
                <span>max {{ camera.occupazioneMax }} ospiti</span>
                <span *ngIf="camera.vista === 'mare'" class="badge badge--mare">Vista mare 🌊</span>
                <span *ngIf="camera.vista === 'giardino'" class="badge badge--giardino">Vista giardino 🌿</span>
                <span *ngIf="camera.vista === 'cortile'" class="badge badge--cortile">Cortile interno 🏠</span>
              </div>
            </div>

            <p class="camera-item__desc">{{ camera.descrizione }}</p>

            <div class="camera-item__servizi">
              <h3>Servizi inclusi</h3>
              <ul class="servizi-list">
                <li *ngFor="let s of camera.servizi">
                  <span class="servizio-check" aria-hidden="true">✓</span>
                  {{ s.nome }}
                </li>
              </ul>
            </div>

            <div class="camera-item__prezzi">
              <h3>Tariffe per notte</h3>
              <div class="prezzi-grid">
                <div class="prezzo prezzo--bassa">
                  <span class="prezzo__label">Bassa stagione</span>
                  <span class="prezzo__value">{{ camera.prezzoBassStagione | currency: 'EUR' : 'symbol' : '1.0-0' }}</span>
                </div>
                <div class="prezzo prezzo--media">
                  <span class="prezzo__label">Media stagione</span>
                  <span class="prezzo__value">{{ camera.prezzoMediaStagione | currency: 'EUR' : 'symbol' : '1.0-0' }}</span>
                </div>
                <div class="prezzo prezzo--alta">
                  <span class="prezzo__label">Alta stagione</span>
                  <span class="prezzo__value">{{ camera.prezzoAltaStagione | currency: 'EUR' : 'symbol' : '1.0-0' }}</span>
                </div>
              </div>
            </div>

            <a routerLink="/contatti" class="btn btn-primary">Prenota questa camera</a>
          </div>
        </li>
      </ul>

      <p class="disclaimer">
        I prezzi sono per camera per notte, colazione inclusa, IVA inclusa. Prezzi indicativi — conferma disponibilità e tariffa al momento della prenotazione.
      </p>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 {
        margin: 0 0 0.5rem;
      }
      .page-header p {
        color: var(--color-fg-muted);
        margin: 0;
      }
      .stagioni-legend {
        list-style: none;
        padding: 1.5rem 0;
        margin: 0;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        border-bottom: 1px solid var(--color-border);
        margin-bottom: 2rem;
      }
      .stagione {
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.3rem 0.75rem;
        border-radius: 9999px;
      }
      .stagione--bassa { background: #e8f4e8; color: #1a7f37; }
      .stagione--media { background: #fff8c5; color: #9a6700; }
      .stagione--alta  { background: #ffeef0; color: #cf222e; }
      .camere-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }
      .camera-item {
        display: grid;
        grid-template-columns: 240px 1fr;
        gap: 2rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid var(--color-border);
      }
      .camera-item:last-child {
        border-bottom: none;
      }
      .camera-item__media {
        aspect-ratio: 4/3;
        background: linear-gradient(135deg, #e8f4ff, #d0e8ff);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .camera-item__emoji {
        font-size: 5rem;
      }
      .camera-item__content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .camera-item__head {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .camera-item__title-row {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      .camera-item__title-row h2 {
        margin: 0;
        font-size: 1.5rem;
      }
      .camera-item__meta {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        align-items: center;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .badge {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
        border-radius: 9999px;
        font-weight: 600;
      }
      .badge--tipo {
        background: var(--color-bg-subtle);
        color: var(--color-fg-muted);
        border: 1px solid var(--color-border);
      }
      .badge--mare    { background: #daeeff; color: #0550ae; }
      .badge--giardino { background: #dafbe1; color: var(--color-success); }
      .badge--cortile { background: #fff8c5; color: #9a6700; }
      .camera-item__desc {
        color: var(--color-fg-muted);
        line-height: 1.65;
        margin: 0;
        font-size: 0.95rem;
      }
      .camera-item__servizi h3,
      .camera-item__prezzi h3 {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-fg-muted);
        margin: 0 0 0.75rem;
      }
      .servizi-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 0.4rem;
      }
      .servizi-list li {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 0.875rem;
        color: var(--color-fg-default);
      }
      .servizio-check {
        color: var(--color-success);
        font-weight: 700;
        flex-shrink: 0;
      }
      .prezzi-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
      }
      .prezzo {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.75rem;
        border-radius: var(--radius-md);
        text-align: center;
      }
      .prezzo--bassa { background: #e8f4e8; }
      .prezzo--media { background: #fff8c5; }
      .prezzo--alta  { background: #ffeef0; }
      .prezzo__label {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--color-fg-muted);
      }
      .prezzo__value {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--color-fg-default);
      }
      .btn {
        display: inline-block;
        padding: 0.65rem 1.25rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        align-self: flex-start;
        transition: background 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0850b0;
      }
      .disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem 0;
      }
      @media (max-width: 700px) {
        .camera-item {
          grid-template-columns: 1fr;
        }
        .prezzi-grid {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CamereComponent {
  private readonly mockData = inject(MockDataService);

  readonly camere$ = this.mockData.camere$;
}
