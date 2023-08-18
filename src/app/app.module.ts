import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ProjectPageComponent } from './views/project-page/project-page.component';
import { RecomendationPageComponent } from './views/recomendation-page/recomendation-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsCardsComponent } from './components/skills-cards/skills-cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NightDaySwitchComponent } from './components/night-day-switch/night-day-switch.component';
import { LetterPageComponent } from './views/letter-page/letter-page.component';
import { AboutPageComponent } from './views/about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectPageComponent,
    RecomendationPageComponent,
    HeroComponent,
    SkillsCardsComponent,
    FooterComponent,
    ProjectSectionComponent,
    NavbarComponent,
    NightDaySwitchComponent,
    LetterPageComponent,
    AboutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
