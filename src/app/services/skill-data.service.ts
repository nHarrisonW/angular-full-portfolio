import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {

  constructor() { }

  dev=[
    {
      name:'Angular',
      img_src:'https://i.imgur.com/RZADRRW.png',
    },
    {
      name:'Node.Js',
      img_src:'https://i.imgur.com/7lzMo8T.png',
    },
    {
      name:'Typescript',
      img_src:'https://i.imgur.com/dECq6xj.png',
    },
    {
      name:'Javascript',
      img_src:'https://i.imgur.com/sebEcQT.png',
    },
    {
      name:'CSS',
      img_src:'https://i.imgur.com/MRssf9Z.png',
    },
    {
      name:'HTML5',
      img_src:'https://i.imgur.com/y0EE3OX.png',
    },
    {
      name:'Material UI',
      img_src:'https://i.imgur.com/saS7OKX.png',
    },
    {
      name:'React',
      img_src:'https://i.imgur.com/mqJJnWN.png',
    },
    {
      name:'TailwindCSS',
      img_src:'https://i.imgur.com/M46w1bh.png',
    },
    {
      name:'Unity',
      img_src:'https://i.imgur.com/YpC5CSq.png',
    },
    {
      name:'Visual Studio',
      img_src:'https://i.imgur.com/01yDaXh.png',
    },
    {
      name:'C#',
      img_src:'https://i.imgur.com/SloTg3Z.png',
    },
    {
      name:'Bootstrap',
      img_src:'https://i.imgur.com/iGSrx9j.png',
    },
    
  ]
  work_flow=[
    {
      name:'Azure',
      img_src:'https://i.imgur.com/an2nhpm.png',
    },
    {
      name:'Jira',
      img_src:'https://i.imgur.com/jw6HxQ0.png',
    },
    {
      name:'Notion',
      img_src:'https://i.imgur.com/zv1sggK.png',
    },
    {
      name:'Postman',
      img_src:'https://i.imgur.com/IIwO7wD.png',
    },
    {
      name:'Slack',
      img_src:'https://i.imgur.com/ss6b89k.png',
    },
    {
      name:'Filezilla',
      img_src:'https://i.imgur.com/TRqRHrt.png',
    },
    {
      name:'Windows',
      img_src:'https://i.imgur.com/gtKmiv6.png',
    },
    {
      name:'Apple',
      img_src:'https://i.imgur.com/Ouk9QjH.png',
    },
  ]
  ui_ux=[
    {
      name:'Adobe Photoshop',
      img_src:'https://i.imgur.com/pLOMnDp.png',
    },
    {
      name:'Adobe Illustrator',
      img_src:'https://i.imgur.com/WSjjtLg.png',
    },
    {
      name:'Adobe InDesign',
      img_src:'https://i.imgur.com/H44ysus.png',
    },
    {
      name:'Figma',
      img_src:'https://i.imgur.com/aBpFwNp.png',
    },
  ]

  skills={
    dev:this.dev,
    work_flow:this.work_flow,
    ui_ux:this.ui_ux,
  }
}
