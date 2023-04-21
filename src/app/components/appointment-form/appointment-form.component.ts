import { Component, EventEmitter, Output } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css'],
})
export class AppointmentFormComponent {
  @Output() appointmentAdded = new EventEmitter<Appointment>();

  appointment: Appointment = {
    id: 0,
    title: '',
    start: null,
    end: null,
    description: '',
  };

  addAppointment() {
    this.appointmentAdded.emit({...this.appointment, start: new Date(this.appointment.start), end: new Date(this.appointment.end)});
    this.appointment = {
      id: 0,
      title: '',
      start: null,
      end: null,
      description: '',
    };
  }
}
