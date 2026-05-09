import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Prenota il tuo soggiorno</h1>
        <p>Compila il modulo o scrivici via WhatsApp. Rispondiamo entro poche ore.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="info$ | async as info">
      <div class="contact-grid">
        <section class="info-block">
          <h2>Dove siamo</h2>
          <p>
            {{ info.indirizzo.via }}<br />
            {{ info.indirizzo.cap }} {{ info.indirizzo.citta }} ({{ info.indirizzo.provincia }})<br />
            {{ info.indirizzo.regione }}
          </p>

          <h2>Contatti diretti</h2>
          <ul class="contact-list">
            <li>
              <strong>Telefono:</strong>
              <a [href]="'tel:' + info.contatti.telefono">{{ info.contatti.telefono }}</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>
              <a [href]="whatsAppLink(info.contatti.whatsapp)" target="_blank" rel="noopener">{{ info.contatti.whatsapp }}</a>
            </li>
            <li>
              <strong>Email:</strong>
              <a [href]="'mailto:' + info.contatti.email">{{ info.contatti.email }}</a>
            </li>
          </ul>

          <h2>Check-in / Check-out</h2>
          <ul class="hours-list">
            <li><span>Check-in</span><span>{{ info.orari.checkIn }}</span></li>
            <li><span>Check-out</span><span>{{ info.orari.checkOut }}</span></li>
          </ul>

          <h2>Servizi inclusi</h2>
          <ul class="servizi-info">
            <li>✓ Colazione tipica salentina inclusa</li>
            <li *ngIf="info.servizi.wifiGratuito">✓ Wi-Fi gratuito</li>
            <li *ngIf="info.servizi.petFriendly">✓ Animali ammessi (supplemento €10/notte)</li>
            <li *ngIf="info.servizi.accessibileDisabili">✓ Struttura accessibile (camera piano terra)</li>
            <li *ngIf="info.servizi.parcheggioConvenzionato">✓ Parcheggio convenzionato a {{ info.servizi.distanzaParcheggioMetri }}m</li>
          </ul>
        </section>

        <section class="form-block">
          <h2>Richiesta di prenotazione</h2>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field">
              <label for="nome">Nome e cognome *</label>
              <input id="nome" type="text" formControlName="nome" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="email">Email *</label>
              <input id="email" type="email" formControlName="email" autocomplete="email" required />
            </div>
            <div class="field">
              <label for="telefono">Telefono / WhatsApp *</label>
              <input id="telefono" type="tel" formControlName="telefono" autocomplete="tel" required />
            </div>
            <div class="row">
              <div class="field">
                <label for="checkIn">Check-in *</label>
                <input id="checkIn" type="date" formControlName="checkIn" required />
              </div>
              <div class="field">
                <label for="checkOut">Check-out *</label>
                <input id="checkOut" type="date" formControlName="checkOut" required />
              </div>
              <div class="field">
                <label for="ospiti">N° ospiti *</label>
                <input id="ospiti" type="number" formControlName="ospiti" min="1" max="8" required />
              </div>
            </div>
            <div class="field" *ngIf="camere$ | async as camere">
              <label for="cameraPreferita">Camera preferita</label>
              <select id="cameraPreferita" formControlName="cameraPreferita">
                <option value="">Nessuna preferenza</option>
                <option *ngFor="let c of camere.camere" [value]="c.id">{{ c.nome }} ({{ c.tipo }})</option>
              </select>
            </div>
            <div class="field">
              <label for="occasione">Occasione</label>
              <select id="occasione" formControlName="occasione">
                <option value="">Nessuna in particolare</option>
                <option value="vacanza">Vacanza</option>
                <option value="anniversario">Anniversario</option>
                <option value="luna-di-miele">Luna di miele</option>
                <option value="compleanno">Compleanno</option>
                <option value="lavoro">Lavoro/Smart working</option>
                <option value="famiglia">Vacanza in famiglia</option>
              </select>
            </div>
            <div class="field">
              <label for="richieste">Richieste speciali</label>
              <textarea id="richieste" formControlName="richieste" rows="3" placeholder="Allergie alimentari, animale al seguito, necessità particolari..."></textarea>
            </div>
            <div class="field field--checkbox">
              <input id="privacy" type="checkbox" formControlName="privacy" />
              <label for="privacy">
                Accetto la privacy policy e il trattamento dei dati personali per la gestione della richiesta di prenotazione.
              </label>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="form.invalid">Invia richiesta</button>
            <p class="form-disclaimer">
              Demo non funzionale: nessuna prenotazione è realmente inviata. Per prenotare contatta direttamente il numero sopra.
            </p>
          </form>

          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou__icon" aria-hidden="true">🏖️</span>
              <h3>Grazie {{ form.value['nome'] }}!</h3>
              <p>
                La tua richiesta per {{ form.value['ospiti'] }} ospiti dal {{ form.value['checkIn'] }} al {{ form.value['checkOut'] }} è stata simulata con successo.
              </p>
              <p>In un sito reale riceveresti una email di conferma entro poche ore con i dettagli per il pagamento dell'acconto (30%).</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova richiesta</button>
            </div>
          </ng-template>
        </section>
      </div>
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
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 3rem;
      }
      .info-block h2 {
        margin: 1.5rem 0 0.75rem;
        font-size: 1.1rem;
      }
      .info-block h2:first-child {
        margin-top: 0;
      }
      .info-block p {
        font-size: 0.95rem;
        line-height: 1.7;
        margin: 0;
        color: var(--color-fg-default);
      }
      .contact-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .contact-list li {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
      .hours-list {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      .hours-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .servizi-info {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      .servizi-info li {
        font-size: 0.875rem;
        color: var(--color-fg-muted);
      }
      .form-block {
        background: var(--color-bg-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
      }
      .form-block h2 {
        margin: 0 0 1.5rem;
      }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .field input,
      .field textarea,
      .field select {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
        background: #ffffff;
      }
      .field input:focus,
      .field textarea:focus,
      .field select:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox input {
        margin-top: 0.2rem;
        flex-shrink: 0;
      }
      .field--checkbox label {
        font-weight: 400;
        font-size: 0.85rem;
        color: var(--color-fg-muted);
      }
      .row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.75rem;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        transition: background 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .form-disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.5rem;
      }
      .thankyou {
        text-align: center;
        padding: 2rem 0;
      }
      .thankyou__icon {
        font-size: 3rem;
        display: block;
        margin-bottom: 1rem;
      }
      .thankyou h3 {
        color: var(--color-success);
        margin: 0 0 1rem;
      }
      .thankyou p {
        color: var(--color-fg-muted);
        font-size: 0.95rem;
        margin-bottom: 0.75rem;
      }
      @media (max-width: 600px) {
        .row {
          grid-template-columns: 1fr;
        }
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContattiComponent {
  private readonly mockData = inject(MockDataService);
  private readonly fb = inject(FormBuilder);

  readonly info$ = this.mockData.info$;
  readonly camere$ = this.mockData.camere$;
  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^[+0-9 ]{6,}$/)]],
    checkIn: ['', Validators.required],
    checkOut: ['', Validators.required],
    ospiti: [2, [Validators.required, Validators.min(1), Validators.max(8)]],
    cameraPreferita: [''],
    occasione: [''],
    richieste: [''],
    privacy: [false, Validators.requiredTrue]
  });

  whatsAppLink(num: string): string {
    const clean = num.replace(/[^0-9]/g, '');
    return `https://wa.me/${clean}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ ospiti: 2, privacy: false });
    this.submitted.set(false);
  }
}
