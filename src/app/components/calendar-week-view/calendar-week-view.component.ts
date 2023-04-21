import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';
import { ManagerService } from '../../../services/manager.service';

@Component({ 
  selector: 'app-calendar-week-view',
  templateUrl: './calendar-week-view.component.html',
  styleUrls: ['./calendar-week-view.component.css']
})
export class CalendarWeekViewComponent implements OnInit {
  dates: Date[] = [];
  appointments: Appointment[] = [];
  startOfWeek: Date;
  endOfWeek: Date;
  daysOfWeek: Date[];

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    const today = new Date();
    const dayOfWeek = today.getDay() - 1; // Consider Sunday as the first day of the week
    today.setDate(today.getDate() - dayOfWeek);

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.dates.push(date);
    }

    this.startOfWeek = this.dates[0];
    this.endOfWeek = this.dates[6];
    this.daysOfWeek = this.dates;

    this.managerService.getAppointments().subscribe(appointments => {
      this.appointments = appointments.filter(appointment => {
        const appointmentStartDate = new Date(appointment.start);
        return appointmentStartDate >= this.dates[0] && appointmentStartDate <= this.dates[6];
      });
    });
  }

  removeAppointment(id: number): void {
    this.managerService.removeAppointment(id);
  }
}
