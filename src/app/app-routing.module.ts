import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewRoomBookingsComponent } from './view-room-bookings/view-room-bookings.component';

const routes: Routes = [
  { path: 'room_booking_status', component: ViewRoomBookingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
