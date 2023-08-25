import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DarkLightService } from 'src/app/services/dark-light.service';


interface Route {
  label: string;
  routerLink: string;
  active: boolean;
  hidden:boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() projectsData!: any[]; 
  constructor(public darkLightService:DarkLightService, private router:Router){}

  routes: Route[] = [
    { label: 'Home', routerLink: '', active: true, hidden: false },
    { label: 'Stockton Mayor Website', routerLink: 'project/StocktonMayorWebsite', active: false, hidden: true },
    { label: 'CORSACRAFT', routerLink: 'project/CORSACRAFT', active: false, hidden: true },
    { label: 'SuppWorld!', routerLink: 'project/SuppWorld', active: false, hidden: true },
    { label: 'Angular Password Generator', routerLink: 'project/NgPasswordGenerator', active: false, hidden: true },
    { label: 'About Me', routerLink: 'about/me', active: false, hidden: true },
  ];

  
  toggleRoutes(){
    this.routes.forEach(route => {
      if(!route.active){
        route.hidden=!route.hidden;
      }
    })
  }
  navigate(routerlink:any){
    this.router.navigate(routerlink)
  }


}
