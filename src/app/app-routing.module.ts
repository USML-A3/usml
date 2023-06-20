import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentcomComponent } from './pages/centcom/centcom.component';
import { HomeComponent } from './pages/home/home.component';
import { IntelligenceComponent } from './pages/intelligence/intelligence.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'centcom',
    component: CentcomComponent,
    children: [{ path: 'inteligencia', component: IntelligenceComponent }],
  },
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
];
