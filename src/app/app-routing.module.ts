import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';

const routes: Routes = [
  {
    path: "",
    component: ComingsoonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
