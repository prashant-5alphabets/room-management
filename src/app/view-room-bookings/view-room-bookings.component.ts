import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-view-room-bookings',
  templateUrl: './view-room-bookings.component.html',
  styleUrls: ['./view-room-bookings.component.css']
})
export class ViewRoomBookingsComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  activeDayIsOpen: boolean = true;
  view: string = 'day';
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  events: CalendarEvent[] = [
    {
      //start: new Date(1534323600000 - 27000000)
      start: new Date(1534303800000),
      // end: new Date(1534330800000 - 27000000)
      end: new Date(1534311000000),
      title: 'Meeting done',
      color: colors.red
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }


}
