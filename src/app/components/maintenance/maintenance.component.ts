import {Component, Input, NgModule, OnInit} from '@angular/core';
import {DateService} from '../../shared/date.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})

export class MaintenanceComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() dateInit: Date;
  @Input() dateEnd: Date;
  countDown: number;

  constructor(private dateService: DateService) {
  }

  ngOnInit(): void {
    this.countDown = this.dateService.calculateTime(this.dateInit, this.dateEnd);
  }
}
