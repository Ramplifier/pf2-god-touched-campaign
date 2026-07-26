import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cost-icon',
  imports: [],
  templateUrl: './cost-icon.html',
  styleUrl: './cost-icon.css',
})
export class CostIcon {

  @Input() cost:number = 99;

}
