import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkLightService {

  constructor() { }
  darkMode!:boolean;
  change_mode():void{
    this.darkMode=!this.darkMode;
    console.log(this.darkMode + ': darkMode');
  }
}
