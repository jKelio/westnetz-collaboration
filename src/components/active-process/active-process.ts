import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Process } from '../../Process';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

@Component({
  selector: 'active-process',
  templateUrl: 'active-process.html',
  providers: [ProjectDummyProvider]
})
export class ActiveProcessComponent {

  private process: Process;

  constructor(public navCtrl: NavController, private ps: ProjectDummyProvider) {
      this.process = ps.getDummy().getProcess(new Date());
  }

}
