import {Component, Input, OnInit} from '@angular/core';
import {DateService} from '../../shared/date.service';

interface CountDown{
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  dateEnd: Date;
  countDown: CountDown;

  constructor(private dateService: DateService) {
    this.dateEnd = new Date('Fri, 20 May 2020 13:30:00');
    // this.countDown = this.dateService.calculateTime(this.dateEnd);
    // setInterval(() => {
    //   this.countDown = this.dateService.calculateTime(this.dateEnd);
    // }, 1000);
  }

  ngOnInit(): void {
  }

}
