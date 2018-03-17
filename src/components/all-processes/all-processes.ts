import { Component } from '@angular/core';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

import { Process } from '../../Process';

@Component({
  selector: 'all-processes',
  templateUrl: 'all-processes.html',
  providers: [ProjectDummyProvider]
})
export class AllProcessesComponent {

  public processes: Array<Process> = [];

  constructor(ps: ProjectDummyProvider) {
    console.log(ps.getDummy().getProcesses());
    debugger
    this.processes = ps.getDummy().getProcesses();
  }

}
