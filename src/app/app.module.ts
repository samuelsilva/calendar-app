import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarMonthViewComponent } from './components/calendar-month-view/calendar-month-view.component';
import { CalendarWeekViewComponent } from './components/calendar-week-view/calendar-week-view.component';
import { CalendarDayViewComponent } from './components/calendar-day-view/calendar-day-view.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';

import { ManagerService } from '../services/manager.service';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarMonthViewComponent,
    CalendarWeekViewComponent,
    CalendarDayViewComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentFormComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
