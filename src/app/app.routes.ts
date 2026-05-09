import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Casa Lucia — B&B nel cuore del Salento | Otranto'
  },
  {
    path: 'camere',
    loadComponent: () => import('./pages/camere/camere.component').then((m) => m.CamereComponent),
    title: 'Camere — Casa Lucia B&B Otranto'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then((m) => m.ChiSiamoComponent),
    title: 'Chi siamo — Casa Lucia B&B Otranto'
  },
  {
    path: 'galleria',
    loadComponent: () => import('./pages/galleria/galleria.component').then((m) => m.GalleriaComponent),
    title: 'Galleria — Casa Lucia B&B Otranto'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then((m) => m.ContattiComponent),
    title: 'Prenota — Casa Lucia B&B Otranto'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
