import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaginaMantenimiento } from './components/pagina-mantenimiento/pagina-mantenimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaMantenimiento
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
