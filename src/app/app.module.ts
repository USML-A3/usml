import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { BranchesComponent } from './components/branches/branches.component';
import { MembersComponent } from './components/members/members.component';
import { SocialComponent } from './components/social/social.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { AboutComponent } from './components/about/about.component';
import { CounterUpComponent } from './components/counter-up/counter-up.component';
import { MediaGridComponent } from './components/media-grid/media-grid.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroSectionComponent,
    FooterComponent,
    BranchesComponent,
    MembersComponent,
    SocialComponent,
    TestimonialsComponent,
    CtaComponent,
    AboutComponent,
    CounterUpComponent,
    MediaGridComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
