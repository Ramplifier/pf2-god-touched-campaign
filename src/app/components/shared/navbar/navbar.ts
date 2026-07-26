import { Component } from '@angular/core';
import {NavbarBottom} from './navbar-bottom/navbar-bottom';

@Component({
  selector: 'app-navbar',
  imports: [
    NavbarBottom
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
