import {Component, OnInit} from '@angular/core';
import {BoonService} from '../../shared/services/boon-service';
import {SkillBlock} from './components/skill-block/skill-block';

@Component({
  selector: 'app-boon-view',
  imports: [SkillBlock],
  templateUrl: './boon-view.html',
  styleUrl: './boon-view.css',
})
export class BoonView implements OnInit{
  boonList:any;
  constructor(public boonService:BoonService) {
  }

  ngOnInit(): void {
    this.boonList = this.boonService.giveBoons();
    console.log(this.boonList);
  }
}
