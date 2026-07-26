import { Routes } from '@angular/router';
import {BoonView} from './components/views/boon-view/boon-view';
import {HomeView} from './components/views/home-view/home-view';

export const   routes: Routes = [
  {
    path: '',
    component: HomeView,
    title: 'Home Page',
  },
  {
    path: 'boon',
    component: BoonView,
    title: 'Home Page',
  }
];
