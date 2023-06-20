import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentcomComponent } from './pages/centcom/centcom.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'centcom',
    component: CentcomComponent,
    // children: [
    //   {path: 'test', component: TestComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [CentcomComponent, HomeComponent];
