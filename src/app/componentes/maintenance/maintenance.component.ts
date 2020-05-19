import { Component, OnInit } from '@angular/core';
import {Time} from '@angular/common';
import {DateService} from '../../shared/date.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  title: string;
  text: string;
  subText: string;
  dateInit: Date;
  dateEnd: Date;
  timer: number;

  constructor(private dateService: DateService) {
    this.title = 'Web in maintenance';
    this.text = 'Please try again later.';
    this.subText = 'Please try again later';
    this.timer = this.dateService.calculateTime(this.dateInit, this.dateEnd);
  }

  ngOnInit(): void {
  }

}
