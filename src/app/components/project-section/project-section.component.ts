import { Component, Input,Renderer2,ElementRef } from '@angular/core';
import { DarkLightService } from 'src/app/services/dark-light.service';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
@Input()projects:any;
constructor(private renderer: Renderer2, private el: ElementRef, public darkLightService:DarkLightService) {}

  setMaxHeight(event: Event, item: any) {
    const imgHeight = (event.target as HTMLImageElement).height;
    const descriptionElement = this.el.nativeElement.querySelector(`#desc-${item.reference}`);
    this.renderer.setStyle(descriptionElement, 'max-height', `${imgHeight}px`);
  }

  getMaxHeight(item: any) {
    const imgElement = this.el.nativeElement.querySelector(`#img-${item.reference}`);
    return imgElement ? imgElement.height : 0;
  }
}
