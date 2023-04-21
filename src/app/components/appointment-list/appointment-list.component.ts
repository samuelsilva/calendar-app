import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';
import { ManagerService } from '../../../services/manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  selectedDate: Date;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.appointments$ = this.managerService.getAppointments();
    this.selectedDate = new Date();
  }

  addAppointment() {
    const newAppointment: Appointment = {
      id: Date.now(),
      title: 'New Appointment',
      start: new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 10, 0, 0),
      end: new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate(), 11, 0, 0)
    };
    this.managerService.addAppointment(newAppointment);
  }

  getAppointmentsForSelectedDate(appointments: Appointment[]) {
    return appointments.filter(appointment => appointment.start.toDateString() === this.selectedDate.toDateString());
  }

  deleteAppointment(appointment: Appointment) {
    this.managerService.removeAppointment(appointment.id);
  }
}
