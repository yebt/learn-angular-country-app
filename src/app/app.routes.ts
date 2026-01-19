import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '', // Default route
    component: HomePageComponent, // no lazy load cause is the default view
  },

  {
    path: 'country',
    loadChildren: () => import('./country/country.routes')
  },

  // ============================================
  {
    path: '**',
    redirectTo: '',
  },
];
