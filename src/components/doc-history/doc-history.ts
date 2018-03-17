import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

import { Process } from '../../Process';

@Component({
  selector: 'doc-history',
  templateUrl: 'doc-history.html'
})
export class DocHistoryComponent {
  @Input() process: Process;
  @Output() openModal = new EventEmitter<any>();

  constructor() {
    
  }

  fileModal(page): void {
    this.openModal.emit(page);
  }

}
