import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NbThemeModule,
  NbLayoutModule,
  NbMenuModule,
  NbMenuService,
  NbIconModule,
  NbDialogModule,
  NbSidebarModule,
  NbSidebarService,
} from '@nebular/theme';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbSidebarModule,
  ],
  providers: [NbMenuService, NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
