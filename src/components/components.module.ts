import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActiveProcessComponent } from './active-process/active-process';
import { AllProcessesComponent } from './all-processes/all-processes';
import { MapComponent } from './map/map';
import { DocHistoryComponent } from './doc-history/doc-history';

@NgModule({
	declarations: [ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent],
	imports: [],
	exports: [ActiveProcessComponent,
    AllProcessesComponent,
    MapComponent,
    DocHistoryComponent],
})
export class ComponentsModule {}
