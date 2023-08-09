import { Component } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';

@Component({
  selector: 'app-night-day-switch',
  templateUrl: './night-day-switch.component.html',
  styleUrls: ['./night-day-switch.component.scss']
})
export class NightDaySwitchComponent {

  constructor(private darkLightService:DarkLightService){}

  toggle_theme():void{
    this.darkLightService.change_mode();
  }
}
