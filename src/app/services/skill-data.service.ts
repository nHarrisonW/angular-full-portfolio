import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillDataService {

  constructor() { }

  dev=[
    {
      name:'Angular',
      img_src:'/assets/angular.svg',
    },
    {
      name:'Javascript',
      img_src:'/assets/js.svg',
    },
    {
      name:'Typescript',
      img_src:'/assets/typescript.svg',
    },
    {
      name:'Node.Js',
      img_src:'/assets/nodejs.svg',
    },
    {
      name:'CSS',
      img_src:'/assets/css.svg',
    },
    {
      name:'HTML5',
      img_src:'/assets/html5.svg',
    },
    {
      name:'Material UI',
      img_src:'/assets/mui.svg',
    },
    {
      name:'Postman',
      img_src:'/assets/postman.svg',
    },
    {
      name:'React',
      img_src:'/assets/react.svg',
    },
    {
      name:'TailwindCSS',
      img_src:'/assets/tailwindcss.svg',
    },
    {
      name:'Unity',
      img_src:'/assets/unity.svg',
    },
    {
      name:'Visual Studio',
      img_src:'/assets/vscode.svg',
    },
    {
      name:'C#',
      img_src:'/assets/csharp.svg',
    },
    {
      name:'Bootstrap',
      img_src:'/assets/bootstrap.svg',
    },
    {
      name:'Angular',
      img_src:'/assets/angular.svg',
    },
    {
      name:'Angular',
      img_src:'/assets/angular.svg',
    },
    
    
    
  ]
  work_flow=[
    {
      name:'Apple',
      img_src:'/assets/apple.svg',
    },
    {
      name:'Azure',
      img_src:'/assets/azure.svg',
    },
    {
      name:'Jira',
      img_src:'/assets/jira.svg',
    },
    {
      name:'Notion',
      img_src:'/assets/notion.svg',
    },
    {
      name:'Postman',
      img_src:'/assets/postman.svg',
    },
    {
      name:'Slack',
      img_src:'/assets/angular.svg',
    },
    {
      name:'Windows',
      img_src:'/assets/windows.svg',
    },
    {
      name:'Filezilla',
      img_src:'/assets/filezilla.svg',
    },
    {
      name:'Github',
      img_src:'/assets/github.svg',
    },
    
  ]
  ui_ux=[
    {
      name:'Adobe Photoshop',
      img_src:'assets/photoshop.svg',
    },
    {
      name:'Adobe Illustrator',
      img_src:'assets/illustrator.svg',
    },
    {
      name:'Adobe InDesign',
      img_src:'assets/photoshop.svg',
    },
    {
      name:'Figma',
      img_src:'/assets/figma.svg',
    },
  ]

  skills={
    dev:this.dev,
    work_flow:this.work_flow,
    ui_ux:this.ui_ux,
  }
}
