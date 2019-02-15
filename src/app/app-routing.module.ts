import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { LandingPageComponent } from './page/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: "",
    component: ComingsoonComponent,
  },
  {
    path: "home", component: LandingPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
