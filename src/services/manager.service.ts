import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private appointments: BehaviorSubject<Appointment[]> = new BehaviorSubject<Appointment[]>([]);

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return this.appointments.asObservable();
  }

  addAppointment(appointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    this.appointments.next([...currentAppointments, appointment]);
  }

  removeAppointment(id: number): void {
    const currentAppointments = this.appointments.getValue();
    const updatedAppointments = currentAppointments.filter(appointment => appointment.id !== id);
    this.appointments.next(updatedAppointments);
  }

  updateAppointment(updatedAppointment: Appointment): void {
    const currentAppointments = this.appointments.getValue();
    const index = currentAppointments.findIndex(appointment => appointment.id === updatedAppointment.id);
    if (index > -1) {
      currentAppointments[index] = updatedAppointment;
      this.appointments.next(currentAppointments);
    }
  }
}

/*
export class ManagerService {

  private appointments: Appointment[] = [];

  constructor() { }

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  deleteAppointment(appointment: Appointment) {
    const index = this.appointments.indexOf(appointment);
    if (index >= 0) {
      this.appointments.splice(index, 1);
    }
  }

  moveAppointment(appointment: Appointment, newStart: Date, newEnd: Date) {
    appointment.start = newStart;
    appointment.end = newEnd;
  }

  getAppointmentsForDay(date: Date): Appointment[] {
    const appointmentsForDay = [];
    for (const appointment of this.appointments) {
      if (appointment.start.getFullYear() === date.getFullYear() &&
        appointment.start.getMonth() === date.getMonth() &&
        appointment.start.getDate() === date.getDate()) {
        appointmentsForDay.push(appointment);
      }
    }
    return appointmentsForDay;
  }

}
*/