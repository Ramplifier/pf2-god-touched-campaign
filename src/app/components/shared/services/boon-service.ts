import {Injectable, OnInit} from '@angular/core';
import boon from '../../../../assets/json/boon.json';

@Injectable({
  providedIn: 'root',
})
export class BoonService implements OnInit{

  ngOnInit(): void {
  }

  giveBoons(){
    return boon;
  }
}
