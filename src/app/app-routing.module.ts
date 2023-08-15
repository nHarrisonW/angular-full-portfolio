import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProjectPageComponent } from './views/project-page/project-page.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'project/:reference',component:ProjectPageComponent},
  {path:'letter/:reference',component:ProjectPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
