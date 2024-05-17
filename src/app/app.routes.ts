import { AboutComponent } from './about-shop/components/about/about.component';
import { HomeComponent } from './home/components/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'about' , component: AboutComponent},
];
