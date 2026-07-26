import { Component, signal } from '@angular/core';
import {RouterOutlet, Routes} from '@angular/router';
import {BoonView} from './components/views/boon-view/boon-view';
import {Navbar} from './components/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('pf2e-god-touched-campaign');

  routes: Routes = [
    {
      path: '',
      component: BoonView,
      title: 'Home Page',
    },
    {
      path: 'boon',
      component: BoonView,
      title: 'Home Page',
    }
  ];


}
