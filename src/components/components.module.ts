import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActiveProcessComponent } from './active-process/active-process';
import { AllProcessesComponent } from './all-processes/all-processes';
import { MapComponent } from './map/map';
import { DocHistoryComponent } from './doc-history/doc-history';
import { ContactHistoryComponent } from './contact-history/contact-history';

@NgModule({
	declarations: [ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent,
    ContactHistoryComponent],
	imports: [],
	exports: [ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent,
    ContactHistoryComponent],
})
export class ComponentsModule {}
