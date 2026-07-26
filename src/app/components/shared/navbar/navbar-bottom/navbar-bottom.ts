import { Component } from '@angular/core';
import {NavbarBottomButton} from './navbar-bottom-button/navbar-bottom-button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar-bottom',
  imports: [
    NavbarBottomButton,
    RouterLink
  ],
  templateUrl: './navbar-bottom.html',
  styleUrl: './navbar-bottom.css',
})
export class NavbarBottom {

}
