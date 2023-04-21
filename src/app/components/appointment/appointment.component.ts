import { Component, Input } from '@angular/core';
import { Appointment } from '../../../interfaces/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  @Input() appointment: Appointment;
}
