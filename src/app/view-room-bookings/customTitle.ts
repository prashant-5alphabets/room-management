import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 
 export class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 
    month(event: CalendarEvent): string {
        return `${event.title} - <i>${event.desc}</i>`;
    }

    day(event: CalendarEvent): string {
        return `<div><strong>${event.title}</strong></div><div style="color: black;"><i>${event.desc}</i><div>`;
    }

    
 }