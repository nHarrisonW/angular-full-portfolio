import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LettersService {

  constructor() { }

  letters=[
    {
      src:'',
      name:'Inez Aravelo'
    },
    {
      src:'',
      name:'Jasmine Lee'
    },
    {
      src:'',
      name:'Isaiah Ferguson'
    },
  ]
}
