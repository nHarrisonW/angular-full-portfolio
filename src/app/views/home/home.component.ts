import { Component } from '@angular/core';
import { SkillDataService } from '../../services/skill-data.service';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  skillsData:any;
  projectsData:any;

constructor(private skillData:SkillDataService, private projectData:ProjectDataService){
  this.skillsData=skillData.skills;
  this.projectsData=projectData;
}
}
