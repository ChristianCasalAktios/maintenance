import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othercomponent',
  templateUrl: './othercomponent.component.html',
  styleUrls: ['./othercomponent.component.css']
})
export class OthercomponentComponent implements OnInit {
  title = 'Web in maintenance';
  text = 'Please try again later';
  url = 'http://localhost/first-component';
  dateInit = new Date('Fri, 20 May 2020 19:30:00 GMT+02:00');
  dateEnd = new Date('Fri, 20 May 2020 19:30:05 GMT+02:00');
  constructor() { }

  ngOnInit(): void {
  }

  chanceText($event: Event) {

  }
}
