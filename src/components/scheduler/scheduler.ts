import { Component, ElementRef, Input, AfterViewInit } from "@angular/core";
import $ from "jquery";
//import "fullcalendar";
import "fullcalendar-scheduler";

@Component({
  selector: "scheduler",
  templateUrl: "scheduler.html"
})
export class SchedulerComponent implements AfterViewInit {
  @Input()
  events: Array<{
    id: string;
    resourceId: string;
    start: string;
    end: string;
    title: string;
  }>;

  @Input()
  resources: Array<{
    id: string;
    title: string;
  }>;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const element: JQuery = $(this.elementRef.nativeElement);
    element.fullCalendar({
      schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
      //resourceAreaWidth: 230,
      editable: true,
      height: "parent",
      scrollTime: "00:00",
      header: {
        left: "promptResource today prev,next",
        center: "title",
        right: "timelineMonth,month"
      },
      views: {
        timelineMonth: {
          buttonText: 'Zeitleiste',
          slotLabelFormat: [
            '[KW] w',
            'dd DD', 
          ]
        },
        month: {
          buttonText: 'Kalender'
        }
      },
      defaultView: "timelineMonth",
      resourceLabelText: "Akteure",
      resourceAreaWidth: '10em',
      resources: [{
        id: "kommune",
        title: "Kommune",
        eventColor: "#00aae1"
      },{
        id: "tiefbauer",
        title: "Tiefbauer",
        eventColor: "#e60050"
      }, {
        id: "vermesser",
        title: "Vermesser",
        eventColor: " #f59b00"
      }, {
        id: "techniker",
        title: "Systemdienstleiter",
        eventColor: "#009ba5"
      }, {
        id: "aufmaß",
        title: "Aufmaß",
        eventColor: "#e60050"
      }],
      events: this.events
    });
  }
}
