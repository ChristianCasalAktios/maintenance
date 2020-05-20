import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OthercomponentComponent} from './components/othercomponent/othercomponent.component';
import {MaintenanceComponent} from './components/maintenance/maintenance.component';

const routes: Routes = [
  { path: 'first-component', component: OthercomponentComponent },
  { path: 'second-component', component: MaintenanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
