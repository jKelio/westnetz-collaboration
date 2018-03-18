import { Component, Input } from '@angular/core';

import { Process } from '../../Process';

@Component({
  selector: 'contact-history',
  templateUrl: 'contact-history.html'
})
export class ContactHistoryComponent {

  @Input() process: Process;

  constructor() {
    
  }

}
