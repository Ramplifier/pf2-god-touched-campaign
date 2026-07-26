import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  imports: [],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css',
})
export class HomeView {
  protected openCamp: boolean = true;
  protected openChar: boolean = false;
  protected openWorld: boolean = false;

}
