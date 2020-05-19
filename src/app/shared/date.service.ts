import { Injectable } from '@angular/core';

interface CountDown{
  hours: number;
  minutes: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root',
})
export class DateService {
  countDown: CountDown = null;

  constructor() {
    // Crear un observable y su subject usando rxjs.
    // LLamar a un metodo de este servicio (getDate);
    // Desde el componente subscribirlo al servicio;
    // Crear un boton que asigne un punto next y posteriormente un subscribe desde el componente.
    // Implementar el ciclo onDestroy(hacer un desubscribirte).
  }
  public calculateTime(dateEnd: Date) {

  }
}
