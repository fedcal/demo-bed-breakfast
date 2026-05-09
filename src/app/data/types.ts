// Tipi TypeScript per i dati mock del B&B Casa Lucia

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  whatsapp: string;
  email: string;
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export interface OrariCheckInOut {
  checkIn: string;
  checkOut: string;
}

export interface ServiziBB {
  consegnaDomicilio: boolean;
  parcheggioConvenzionato: boolean;
  distanzaParcheggioMetri: number;
  accessibileDisabili: boolean;
  petFriendly: boolean;
  wifiGratuito: boolean;
  ariaCondizionata: boolean;
  terrazzeVistaMare: boolean;
  colazioneInclusa: boolean;
  numeroCamere: number;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariCheckInOut;
  servizi: ServiziBB;
  metaSeo: MetaSeo;
}

export interface ServizioCamera {
  nome: string;
  incluso: boolean;
}

export interface Camera {
  id: number;
  nome: string;
  tipo: 'Singola' | 'Matrimoniale' | 'Tripla' | 'Suite';
  metriQuadri: number;
  descrizione: string;
  prezzoBassStagione: number;
  prezzoMediaStagione: number;
  prezzoAltaStagione: number;
  servizi: ServizioCamera[];
  vista: 'mare' | 'giardino' | 'cortile';
  occupazioneMax: number;
  emoji: string;
}

export interface Camere {
  camere: Camera[];
}

export interface ProdottoColazione {
  nome: string;
  descrizione: string;
  tipico: boolean;
}

export interface TipologiaColazione {
  id: string;
  nome: string;
  descrizione: string;
  prodotti: ProdottoColazione[];
}

export interface Colazione {
  tipologie: TipologiaColazione[];
}

export interface Membro {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  image: string;
  specialita: string[];
}

export interface Team {
  team: Membro[];
}

export interface FaqItem {
  domanda: string;
  risposta: string;
}

export interface Faq {
  faq: FaqItem[];
}
