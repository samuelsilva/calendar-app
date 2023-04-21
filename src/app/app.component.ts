import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar-app';

  selectedDate: Date;

  constructor() {
    this.selectedDate = new Date();
  }
}
