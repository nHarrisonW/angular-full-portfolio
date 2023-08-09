import { Component } from '@angular/core';
import { ProjectDataService } from './services/project-data.service';
import { DarkLightService } from './services/dark-light.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode!:boolean;
  constructor(public darkLightService:DarkLightService){}
  getMode(){
    this.darkMode=this.darkLightService.darkMode;
  }

}

