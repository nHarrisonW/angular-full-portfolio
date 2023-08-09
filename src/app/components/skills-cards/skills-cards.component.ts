import { Component, Input } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';

@Component({
  selector: 'app-skills-cards',
  templateUrl: './skills-cards.component.html',
  styleUrls: ['./skills-cards.component.scss']
})
export class SkillsCardsComponent {
@Input()skills:any;

constructor(public darkLightService:DarkLightService){}

}
