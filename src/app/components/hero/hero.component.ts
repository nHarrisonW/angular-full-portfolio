import { Component } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
constructor(public darkLightService:DarkLightService){}
}
