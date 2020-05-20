import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
