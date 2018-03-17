import { Component } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import * as moment from "moment";

import { Project } from '../../Project';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';
import { FilePage } from "../file/file";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProjectDummyProvider]
})
export class HomePage {
  private project: Project;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private ps: ProjectDummyProvider) {
      this.project = ps.getDummy();
  }

  fileModal(file: {path: string, name: string, geo: string}):void {
    let modal = this.modalCtrl.create(FilePage);
    modal.present();
  }
}
