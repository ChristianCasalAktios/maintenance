import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginamantenimientoComponent } from './components/paginamantenimiento/paginamantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginamantenimientoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
