import {Component, Input} from '@angular/core';
import {CostIcon} from '../cost-icon/cost-icon';

@Component({
  selector: 'app-skill-block',
  imports: [
    CostIcon
  ],
  templateUrl: './skill-block.html',
  styleUrl: './skill-block.css',
})
export class SkillBlock {

  @Input() boon: any;

  protected readonly Object = Object;

  protected getNum(boon: any) {
    console.log(boon.info)
    return [];
  }
}
