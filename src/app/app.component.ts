import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web in maintenance';
  text = 'Please try again later';
  dateInit = new Date('Fri, 20 May 2020 18:00:00');
  dateEnd = new Date('Fri, 20 May 2020 19:30:00');
}
