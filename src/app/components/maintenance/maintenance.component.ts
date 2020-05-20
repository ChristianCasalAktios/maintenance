import {Component, Input, NgModule, OnInit, ViewChild} from '@angular/core';
import {DateService} from '../../shared/date.service';
import {Router} from '@angular/router';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() url: any;
  @Input() dateInit: Date;
  @Input() dateEnd: Date;
  @ViewChild('countdown', { static: false }) private countdown: CountdownComponent;
  countDown: number;

  constructor(private dateService: DateService, private router: Router) {
  }

  ngOnInit(): void {
    this.countDown = this.dateService.calculateTime(this.dateInit, this.dateEnd);
  }
  handleEvent($event) {
    if ($event.left === 0) {
      console.log('¡Al lio!.');
      // this.router.navigateByUrl(this.url);
    }
  }
}
