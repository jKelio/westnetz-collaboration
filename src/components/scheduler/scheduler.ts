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
    debugger;
    const element: JQuery = $(this.elementRef.nativeElement);
    element.fullCalendar({
      schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
      resourceAreaWidth: 230,
      editable: true,
      height: "parent",
      scrollTime: "00:00",
      header: {
        left: "promptResource today prev,next",
        center: "title",
        right: "timelineDay,timelineThreeDays,agendaWeek,month"
      },
      defaultView: "timelineDay",
      views: {
        timelineThreeDays: {
          type: "timeline",
          duration: { days: 3 }
        }
      },
      resourceLabelText: "Beteiligte",
      resources: this.resources,
      events: this.events
    });
  }
}
