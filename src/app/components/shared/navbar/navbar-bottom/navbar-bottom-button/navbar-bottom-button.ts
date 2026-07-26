import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar-bottom-button',
  imports: [],
  templateUrl: './navbar-bottom-button.html',
  styleUrl: './navbar-bottom-button.css',
})
export class NavbarBottomButton {
  @Input() namePage!: string;

}
