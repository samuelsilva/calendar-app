import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styleUrls: ['./calendar-month-view.component.css']
})
export class CalendarMonthViewComponent {
  @Input() selectedDate: Date;

  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days: number[] = [];

  getDaysInMonth(month: number, year: number): number[] {
    const numDays = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: numDays }, (_, i) => i + 1);
  }

  ngOnInit() {
    this.days = this.getDaysInMonth(this.selectedDate.getMonth(), this.selectedDate.getFullYear());
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }

  get year() {
    return this.selectedDate.getFullYear();
  }

  get monthName() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return monthNames[this.selectedDate.getMonth()];
  }
}
