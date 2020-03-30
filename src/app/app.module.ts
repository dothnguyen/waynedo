import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SociallinklistComponent } from './sociallinklist/sociallinklist.component';
import { SociallinkComponent } from './sociallink/sociallink.component';
import { SectiontitleComponent } from './sectiontitle/sectiontitle.component';
import { CareersummaryComponent } from './careersummary/careersummary.component';
import { ExperienceentryComponent } from './experienceentry/experienceentry.component';
import { SkillitemComponent } from './skillitem/skillitem.component';
import { SkilllistComponent } from './skilllist/skilllist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SociallinklistComponent,
    SociallinkComponent,
    SectiontitleComponent,
    CareersummaryComponent,
    ExperienceentryComponent,
    SkillitemComponent,
    SkilllistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
