import { Component } from '@angular/core';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

import { Process } from '../../Process';

@Component({
  selector: 'all-processes',
  templateUrl: 'all-processes.html',
  providers: [ProjectDummyProvider]
})
export class AllProcessesComponent {

  public selected: Process;
  public processes: Array<Process> = [];

  public openModal = new EventEmitter<any>();

  constructor(ps: ProjectDummyProvider) {
    console.log(ps.getDummy().getProcesses());
    this.processes = ps.getDummy().getProcesses();
    this.selected = this.processes[0];
  }

  public click(process: Process): void {
    this.selected = process;
  }

  fileModal(page): void {
    this.openModal.emit(page);
  }

}
