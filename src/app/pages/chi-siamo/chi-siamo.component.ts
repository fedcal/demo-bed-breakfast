import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>La nostra storia</h1>
        <p>Una famiglia di Otranto che ha scelto di condividere il Salento autentico con il mondo.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="story">
        <h2>Casa Lucia, dal 2010</h2>
        <p>
          Lucia Greco è nata e cresciuta a Otranto, in questa stessa casa di via dei Pescatori costruita dal nonno pescatore negli anni '60. Dopo vent'anni di lavoro nell'ospitalità tra Lecce e Brindisi, nel 2010 ha deciso di tornare alle radici e trasformare la casa di famiglia in un B&B autentico.
        </p>
        <p>
          "Volevo che chi veniva in Salento non si trovasse in una stanza anonima, ma in una casa vera, con il profumo del caffè al mattino e la marmellata di fichi che si faceva in autunno. Come quando andavo dalla nonna Rosa." — Lucia Greco
        </p>
        <p>
          Oggi Casa Lucia ha 4 camere ognuna diversa dall'altra, ognuna con il suo carattere. Lucia supervede la cucina e la colazione tipica; la figlia Sofia gestisce prenotazioni e comunicazione; Antonio cura la pulizia e il giardino con i nostri ulivi centenari che producono l'olio EVO della colazione.
        </p>
      </section>

      <section class="values">
        <h2>I nostri valori</h2>
        <ul class="values-grid">
          <li>
            <h3>Salento autentico</h3>
            <p>Nessuna catena, nessun turismo di massa. Solo la vera cultura salentina, quella delle masserie, delle nonne e del mare cristallino.</p>
          </li>
          <li>
            <h3>Prodotti del territorio</h3>
            <p>Pasticciotto fresco ogni mattina dal forno storico di Otranto. Olio EVO dei nostri ulivi. Marmellate fatte da Lucia. Formaggi dai caseifici locali.</p>
          </li>
          <li>
            <h3>Famiglia e accoglienza</h3>
            <p>Ogni ospite trova consigli sinceri su dove mangiare, dove fare il bagno (lontano dalle spiagge affollate), cosa vedere che non trovi sulle guide.</p>
          </li>
          <li>
            <h3>Sostenibilità</h3>
            <p>Raccolta differenziata rigorosa, prodotti locali, pannelli solari per il riscaldamento dell'acqua, orti e ulivi del giardino curati senza pesticidi.</p>
          </li>
        </ul>
      </section>

      <section class="colazione-preview">
        <h2>La colazione della nonna Rosa</h2>
        <p>La ricetta del pasticciotto e dei bocconotti che Lucia prepara ogni mattina è quella della nonna Rosa, che la imparò dal suo forno di quartiere negli anni '50. Viene servita nella sala comune affacciata sul giardino o, in estate, sulla terrazza al piano superiore con vista sul mare.</p>
        <p>Per ospiti vegani, celiaci o con allergie: segnalarlo in fase di prenotazione — Sofia provvede con 24 ore di anticipo.</p>
      </section>

      <section class="team" *ngIf="team$ | async as team">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of team.team" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>
      </section>
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
      .content {
        padding: 3rem 1rem;
      }
      .story {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .story h2 {
        margin-bottom: 1rem;
      }
      .story p {
        line-height: 1.75;
        margin-bottom: 1rem;
        color: var(--color-fg-default);
      }
      .story p:has(em),
      .story p:nth-child(3) {
        font-style: italic;
        color: var(--color-fg-muted);
        border-left: 3px solid var(--color-accent);
        padding-left: 1rem;
      }
      .values {
        margin-bottom: 4rem;
      }
      .values h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .values-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .values-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
      }
      .values-grid h3 {
        margin: 0 0 0.5rem;
        color: var(--color-accent);
      }
      .values-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.95rem;
        line-height: 1.6;
      }
      .colazione-preview {
        max-width: 720px;
        margin: 0 auto 4rem;
        padding: 2rem;
        background: #fffbf0;
        border: 1px solid #f0e0b0;
        border-radius: var(--radius-lg);
      }
      .colazione-preview h2 {
        margin: 0 0 1rem;
        color: #9a6700;
      }
      .colazione-preview p {
        margin: 0 0 0.75rem;
        font-size: 0.95rem;
        line-height: 1.65;
        color: var(--color-fg-muted);
      }
      .colazione-preview p:last-child {
        margin: 0;
      }
      .team h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 {
        margin: 0 0 0.25rem;
      }
      .team-card__role {
        margin: 0 0 0.75rem;
        color: var(--color-accent);
        font-weight: 600;
        font-size: 0.9rem;
      }
      .team-card__bio {
        font-size: 0.875rem;
        color: var(--color-fg-muted);
        margin-bottom: 0.5rem;
        text-align: left;
        line-height: 1.6;
      }
      .team-card__exp {
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: var(--color-bg-subtle);
        padding: 0.25rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
}
