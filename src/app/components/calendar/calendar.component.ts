import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Appointment } from '../../../interfaces/appointment';
import { ManagerService } from '../../../services/manager.service';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  appointments$: Observable<Appointment[]>;
  today: Date;

  constructor(private managerService: ManagerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.appointments$ = this.managerService.getAppointments();
    this.today = new Date();
  }

  openAppointmentDialog(): void {
    this.dialog.open(AppointmentFormComponent);
  }
}
