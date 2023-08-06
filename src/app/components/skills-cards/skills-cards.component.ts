import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-cards',
  templateUrl: './skills-cards.component.html',
  styleUrls: ['./skills-cards.component.scss']
})
export class SkillsCardsComponent {
@Input()skills:any;
}
