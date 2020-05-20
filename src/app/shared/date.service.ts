import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  countDown: any = null;
  constructor() {

  }
  public calculateTime(dateInit: any, dateEnd: any) {
    if (dateInit < dateEnd){
      if (dateInit > new Date()){
        // @ts-ignore
        this.countDown = (dateEnd - new Date()) / 1000 ;
        return this.countDown;
      } else {
        this.countDown = (dateEnd - dateInit) / 1000 ;
        return this.countDown;
      }
    } else {
      // @ts-ignore
    }
  }
  public randomDate(start, end, startHour, endHour) {
    const date = new Date(+start + Math.random() * (end - start));
    // tslint:disable-next-line:no-bitwise
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return date;
  }
}
