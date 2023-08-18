import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectPageComponent } from './views/project-page/project-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { RecomendationPageComponent } from './views/recomendation-page/recomendation-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'project/:reference',component:ProjectPageComponent},
  {path:':reference/letter',component:RecomendationPageComponent},
  {path:'about/:reference',component:AboutPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
