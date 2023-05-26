import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NbMenuModule, NbMenuService } from '@nebular/theme';

import { AppRoutingModule } from '../app/app-routing.module';

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
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NbMenuModule],
  providers: [NbMenuService],
  bootstrap: [],
  exports: [
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
    ContactComponent,
  ],
})
export class SharedModule {}
