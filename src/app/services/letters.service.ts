import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LettersService {
  constructor() {}

  letters = [
    {
      reference: 'assets/InezALetter.pdf',
      route: 'costco',
      src: 'https://i.imgur.com/anKLobh.jpg',
      name: 'Inez Aravelo',
      html: `
      <div>
        
      </div>
      `,
    },
    {
      reference: 'assets/JasmineLLetter.pdf',
      route: 'inshape',
      src: 'https://i.imgur.com/xOy9enk.jpg',
      name: 'Jasmine Lee',
      html: `
      <img src="" class="letter">
      `,
    },
    {
      reference: 'assets/isaiahFLetter.pdf',
      route: 'csa',
      src: 'https://i.imgur.com/l2mXvtR.jpg',
      name: 'Isaiah Ferguson',
      html: `
      <img src="" class="letter">
      `,
    },
  ];
}
