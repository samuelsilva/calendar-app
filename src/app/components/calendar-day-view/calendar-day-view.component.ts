/*import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-calendar-day-view',
  templateUrl: './calendar-day-view.component.html',
  styleUrls: ['./calendar-day-view.component.css']
})
export class CalendarDayViewComponent implements OnInit {
  @Input() date: Date;
  @Output() newAppointment = new EventEmitter<Appointment>();

  selectedDate: Date;
  appointments: Appointment[] = [];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.selectedDate = this.date;
    this.getAppointmentsForSelectedDate();
  }

  removeAppointment(id: number): void {
    this.managerService.removeAppointment(id);
    this.getAppointmentsForSelectedDate();
  }

  onNewAppointment(date: Date): void {
    const start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 10, 0, 0);
    const end = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 11, 0, 0);
    const appointment: Appointment = {
      id: null,
      title: '',
      start,
      end,
      description:''
    };
    this.newAppointment.emit(appointment);
  }

  getAppointmentsForSelectedDate(): void {
    this.managerService.getAppointments().subscribe(appointments => {
      this.appointments = appointments.filter(appointment => appointment.start.toDateString() === this.date.toDateString());
    });
  }
}
*/
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';
import { ManagerService } from '../../../services/manager.service';

@Component({
  selector: 'app-calendar-day-view',
  templateUrl: './calendar-day-view.component.html',
  styleUrls: ['./calendar-day-view.component.css']
})
export class CalendarDayViewComponent implements OnInit {
  @Input() date: Date;
  @Output() newAppointment = new EventEmitter<Appointment>();

  selectedDate: Date;
  appointmentsForSelectedDate: Appointment[] = [];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.selectedDate = this.date;
    this.getAppointmentsForSelectedDate();
  }

  removeAppointment(id: number): void {
    this.managerService.removeAppointment(id);
    this.getAppointmentsForSelectedDate();
  }

  onNewAppointment(): void {
    const start = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 10, 0, 0);
    const end = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 11, 0, 0);
    const appointment: Appointment = {
      id: null,
      title: '',
      start,
      end,
      description:''
    };
    this.newAppointment.emit(appointment);
  }

  getAppointmentsForSelectedDate(): void {
    this.managerService.getAppointments().subscribe(appointments => {
      this.appointmentsForSelectedDate = appointments.filter(appointment => appointment.start.toDateString() === this.selectedDate.toDateString());
    });
  }
}
