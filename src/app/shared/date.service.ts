import { Injectable } from '@angular/core';
import {Time} from '@angular/common';
import {TimeInterval} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {
  }
  public calculateTime(dateInit: Date, dateEnd: Date) {
    return new Date(dateInit).getTime() - new Date(dateEnd).getTime();
  }
}
