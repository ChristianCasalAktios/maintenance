import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-mantenimiento',
  templateUrl: './pagina-mantenimiento.html',
})
export class PaginaMantenimiento{
  public dateInit: Date;
  public dateEnd: Date;
  constructor() {
    console.log('Prueba de componente');
  }
}

