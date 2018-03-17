import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Project } from '../../Project';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProjectDummyProvider]
})
export class HomePage {
  private project: Project;

  constructor(public navCtrl: NavController, private ps: ProjectDummyProvider) {
      this.project = ps.getDummyProject();
  }

}
