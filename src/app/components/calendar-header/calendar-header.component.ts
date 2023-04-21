import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.css']
})
export class CalendarHeaderComponent {
  @Input() currentDate: Date;
  @Output() dateChange = new EventEmitter<Date>();

  previousMonth(): void {
    const newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.dateChange.emit(newDate);
  }

  nextMonth(): void {
    const newDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.dateChange.emit(newDate);
  }
}
