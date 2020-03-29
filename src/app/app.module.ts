import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SociallinklistComponent } from './sociallinklist/sociallinklist.component';
import { SociallinkComponent } from './sociallink/sociallink.component';
import { SectiontitleComponent } from './sectiontitle/sectiontitle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SociallinklistComponent,
    SociallinkComponent,
    SectiontitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
