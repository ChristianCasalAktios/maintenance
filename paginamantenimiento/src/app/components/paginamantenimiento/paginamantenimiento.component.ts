import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginamantenimiento',
  templateUrl: './paginamantenimiento.component.html',
  styleUrls: ['./paginamantenimiento.component.css']
})
export class PaginamantenimientoComponent implements OnInit {
  public dateInit: Date;
  public dateEnd: Date;
  public title: string;

  constructor() {
    this.dateInit = new Date('May 18, 2020 16:40:00');
    this.dateEnd = new Date('May 18, 2020 19:30:00');
    this.title = 'Página en mantenimiento';
  }

  ngOnInit(): void {
  }

}
