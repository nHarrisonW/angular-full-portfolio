import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LettersService } from 'src/app/services/letters.service';

@Component({
  selector: 'app-recomendation-page',
  templateUrl: './recomendation-page.component.html',
  styleUrls: ['./recomendation-page.component.scss']
})
export class RecomendationPageComponent {
  letter:any;
  constructor(private letterService:LettersService, private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.params.subscribe(params => {
      const projectReference = params['reference'];
  
      this.letter=this.letterService.letters.find(
        item => item.route === projectReference
      )
    })
  }
}
