import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OthercomponentComponent } from './components/othercomponent/othercomponent.component';
import { FormsModule } from '@angular/forms';
import {CountdownModule} from 'ngx-countdown';


@NgModule({
  declarations: [
    AppComponent,
    MaintenanceComponent,
    OthercomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
