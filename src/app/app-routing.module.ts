import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentcomComponent } from './pages/cetcom/centcom.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'centcom',
    component: CentcomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [CentcomComponent, HomeComponent];
