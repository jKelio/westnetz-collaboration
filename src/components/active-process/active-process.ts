import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Process } from '../../Process';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

/**
 * Generated class for the ActiveProcessComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'active-process',
  templateUrl: 'active-process.html'
})
export class ActiveProcessComponent {

  private process: Process;

  constructor(public navCtrl: NavController, private ps: ProjectDummyProvider) {
      this.process = ps.getDummyProject().getProcess(new Date());
  }

}
