import { Component } from '@angular/core';
import { ContactSectionComponent } from './components/contact-section/contact-section';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HeroSectionComponent } from './components/hero-section/hero-section';
import { ProcessSectionComponent } from './components/process-section/process-section';
import { ProjectsSectionComponent } from './components/projects-section/projects-section';
import { ServicesSectionComponent } from './components/services-section/services-section';
import { TeamSectionComponent } from './components/team-section/team-section';
import { WhySoftCodeSectionComponent } from './components/why-softcode-section/why-softcode-section';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    WhySoftCodeSectionComponent,
    ProcessSectionComponent,
    TeamSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
