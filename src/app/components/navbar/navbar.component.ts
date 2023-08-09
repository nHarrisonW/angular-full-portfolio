import { Component, Input } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() projectsData!: any[]; 
  constructor(public darkLightService:DarkLightService){}
}
