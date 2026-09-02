import { Routes } from '@angular/router';
import { Home } from './features/pages/home/home';
import {Hire} from './features/pages/hire/hire';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: Home},
  {path: 'hire', component: Hire}
];
