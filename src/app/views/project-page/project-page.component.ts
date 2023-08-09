import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DarkLightService } from 'src/app/services/dark-light.service';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent {
project:any;
constructor(private route:ActivatedRoute, private projectDataService:ProjectDataService, public darkLightService:DarkLightService) {}

ngOnInit():void{
  this.route.params.subscribe(params => {
    const projectReference = params['reference'];

    this.project=this.projectDataService.project.find(
      item => item.reference === projectReference
    )
  })
}

}
