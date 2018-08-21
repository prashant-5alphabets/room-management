import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewRoomBookingsComponent } from './view-room-bookings/view-room-bookings.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalendarModule } from 'angular-calendar';
import { CalendarEvent, CalendarEventTitleFormatter } from 'angular-calendar';
import { CustomEventTitleFormatter } from './view-room-bookings/customTitle';

@NgModule({
  declarations: [
    AppComponent,
    ViewRoomBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule.forRoot()
  ],
  providers: [{
    provide: CalendarEventTitleFormatter,
    useClass: CustomEventTitleFormatter
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
