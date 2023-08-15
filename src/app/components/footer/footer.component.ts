import { Component } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';
import { LettersService } from 'src/app/services/letters.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public darkLightService:DarkLightService, public letterService:LettersService){}
}
