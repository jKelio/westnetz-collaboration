import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import * as moment from "moment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  todayDate = moment().startOf("day");
  YESTERDAY = this.todayDate
    .clone()
    .subtract(1, "day")
    .format("YYYY-MM-DD");
  TODAY = this.todayDate.format("YYYY-MM-DD");
  TOMORROW = this.todayDate
    .clone()
    .add(1, "day")
    .format("YYYY-MM-DD");

  events: Array<{
    id: string;
    resourceId: string;
    start: string;
    end: string;
    title: string;
  }> = [
    {
      id: "1",
      resourceId: "b",
      start: this.TODAY + "T02:00:00",
      end: this.TODAY + "T07:00:00",
      title: "event 1"
    },
    {
      id: "2",
      resourceId: "c",
      start: this.TODAY + "T05:00:00",
      end: this.TODAY + "T22:00:00",
      title: "event 2"
    },
    {
      id: "3",
      resourceId: "a",
      start: this.YESTERDAY,
      end: this.TOMORROW,
      title: "event 3"
    },
    {
      id: "4",
      resourceId: "b",
      start: this.TODAY + "T03:00:00",
      end: this.TODAY + "T08:00:00",
      title: "event 4"
    },
    {
      id: "5",
      resourceId: "c",
      start: this.TODAY + "T00:30:00",
      end: this.TODAY + "T02:30:00",
      title: "event 5"
    }
  ];

  resources: Array<{
    id: string;
    title: string;
  }> = [
    { id: "a", title: "Auditorium A" },
    { id: "b", title: "Auditorium G" },
    { id: "c", title: "Auditorium H" }
  ];

  constructor(public navCtrl: NavController) {}
}
