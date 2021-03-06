import { Component, Output, EventEmitter } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import * as moment from "moment";

import { Project } from "../../Project";
import { AttachedFile } from "../../AttachedFile";

import { ProjectDummyProvider } from "../../providers/project-dummy/project-dummy";
import { FilePage } from "../file/file";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [ProjectDummyProvider]
})
export class HomePage {
  @Output() openModal = new EventEmitter<any>();
  private project: Project;

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private ps: ProjectDummyProvider
  ) {
    this.project = ps.getDummy();
  }

  fileModal(file: AttachedFile): void {
    let modal = this.modalCtrl.create(FilePage, file);
    modal.present();
  }
}
