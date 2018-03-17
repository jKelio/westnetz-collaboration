import { Component, Input } from '@angular/core';
import { ProjectDummyProvider } from '../../providers/project-dummy/project-dummy';

import { Process } from '../../Process';

@Component({
  selector: 'doc-history',
  templateUrl: 'doc-history.html'
})
export class DocHistoryComponent {
  @Input() process: Process;

  constructor() {
    
  }

}
