import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.page';
import { AboutPageComponent } from './pages/about/about.page';
import { ServicesPageComponent } from './pages/services/services.page';
import { GalleryPageComponent } from './pages/gallery/gallery.page';
import { TeamPageComponent } from './pages/team/team.page';
import { DonatePageComponent } from './pages/donate/donate.page';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Vasudhaivnidam Foundation' },
  { path: 'about', component: AboutPageComponent, title: 'About Us — Vasudhaivnidam Foundation' },
  { path: 'services', component: ServicesPageComponent, title: 'Our Services — Vasudhaivnidam Foundation' },
  { path: 'gallery', component: GalleryPageComponent, title: 'Gallery — Vasudhaivnidam Foundation' },
  { path: 'team', component: TeamPageComponent, title: 'Our Team — Vasudhaivnidam Foundation' },
  { path: 'donate', component: DonatePageComponent, title: 'Donate — Vasudhaivnidam Foundation' },
  { path: '**', redirectTo: '' },
];
