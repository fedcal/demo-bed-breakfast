import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ImagePlaceholder {
  id: number;
  caption: string;
  emoji: string;
  category: string;
}

@Component({
  selector: 'app-galleria',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Galleria</h1>
        <p>Le camere, la terrazza sul mare, la colazione salentina, il giardino con gli ulivi. Questi sono placeholder demo.</p>
      </div>
    </section>

    <article class="demo-container content">
      <ul class="gallery-grid">
        <li *ngFor="let img of images" class="gallery-item" [attr.data-cat]="img.category">
          <div class="gallery-item__placeholder" [attr.aria-label]="img.caption">
            <span class="gallery-item__emoji" aria-hidden="true">{{ img.emoji }}</span>
          </div>
          <p class="gallery-item__caption">{{ img.caption }}</p>
        </li>
      </ul>

      <p class="disclaimer">
        Per il sito reale di un B&B reale (cliente Federico), le immagini placeholder vengono sostituite con servizio fotografico professionale delle camere, della colazione e degli esterni. Costo medio fotografo specializzato hospitality Italia: €400–700 per servizio completo.
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
      .content {
        padding: 3rem 1rem;
      }
      .gallery-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .gallery-item {
        text-align: center;
      }
      .gallery-item__placeholder {
        aspect-ratio: 4 / 3;
        background: linear-gradient(135deg, #e8f4ff, #d0e8ff);
        border-radius: var(--radius-md);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        margin-bottom: 0.5rem;
      }
      .gallery-item__caption {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin: 0;
      }
      .disclaimer {
        font-size: 0.85rem;
        color: var(--color-fg-muted);
        font-style: italic;
        text-align: center;
        margin: 3rem auto 0;
        max-width: 720px;
        padding: 1rem;
        border: 1px dashed var(--color-border);
        border-radius: var(--radius-md);
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleriaComponent {
  readonly images: ImagePlaceholder[] = [
    { id: 1,  caption: 'Suite Tramonto — terrazza vista mare',  emoji: '🌅', category: 'camere' },
    { id: 2,  caption: 'Camera Azzurra — balcone sul mare',     emoji: '🌊', category: 'camere' },
    { id: 3,  caption: 'Camera degli Ulivi — letto matrimoniale', emoji: '🛏️', category: 'camere' },
    { id: 4,  caption: 'Camera Bianca — volta in tufo',         emoji: '🏠', category: 'camere' },
    { id: 5,  caption: 'Colazione salentina — pasticciotto fresco', emoji: '🍰', category: 'colazione' },
    { id: 6,  caption: 'Marmellata di fichi fatta in casa',     emoji: '🫙', category: 'colazione' },
    { id: 7,  caption: 'Terrazza panoramica — tramonto',        emoji: '🌴', category: 'esterni' },
    { id: 8,  caption: 'Giardino con ulivi centenari',          emoji: '🌿', category: 'esterni' },
    { id: 9,  caption: 'Vista sul castello Aragonese di Otranto', emoji: '🏰', category: 'dintorni' },
    { id: 10, caption: 'Spiaggia di Otranto — mare cristallino', emoji: '🏖️', category: 'dintorni' },
    { id: 11, caption: 'Lucia e Sofia alla colazione',          emoji: '👩‍👩‍👧', category: 'team' },
    { id: 12, caption: 'Dettagli ceramiche salentine',          emoji: '🎨', category: 'dettagli' }
  ];
}
