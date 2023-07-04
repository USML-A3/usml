import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentcomComponent } from './pages/centcom/centcom.component';
import { HomeComponent } from './pages/home/home.component';
import { IntelligenceComponent } from './pages/centcom/intelligence/intelligence.component';
import { IntelligenceMissionComponent } from './pages/centcom/intelligence/intelligence-mission/intelligence-mission.component';
import { LoginComponent } from './pages/login/login.component';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
} from '@nebular/auth';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'test',
    component: LoginComponent,
    children: [
      {
        path: 'auth',
        component: NbAuthComponent,
        children: [
          { path: 'login', component: NbLoginComponent },
          { path: 'logout', component: NbLogoutComponent },
        ],
      },
    ],
  },
  {
    path: 'centcom',
    component: CentcomComponent,
    children: [
      {
        path: 'inteligencia',
        component: IntelligenceComponent,
      },
      { path: 'inteligencia/:id', component: IntelligenceMissionComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CentcomComponent,
  HomeComponent,
  IntelligenceComponent,
  IntelligenceMissionComponent,
  LoginComponent,
];
