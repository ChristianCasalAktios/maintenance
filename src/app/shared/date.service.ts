import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  countDown: any = null;
  constructor() {

  }
  public calculateTime(dateInit: any, dateEnd: any) {
      console.log('inicio menor que end');
      if (dateInit > new Date()){
        // @ts-ignore
        this.countDown = (dateEnd - new Date()) / 1000 ;
        return this.countDown;
      } else {
        this.countDown = (dateEnd - dateInit) / 1000 ;
        return this.countDown;
      }
      // @ts-ignore
  }
}
