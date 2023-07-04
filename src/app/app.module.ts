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
  NbCardModule,
} from '@nebular/theme';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'home-theme' }),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbSidebarModule,
    NbCardModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy .setup({
          name: 'email',
          login: {
            redirect: {
              success: "/centcom/",
              failure: null
            }
          }
        })
      ]
    })
  ],
  providers: [NbMenuService, NbSidebarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
