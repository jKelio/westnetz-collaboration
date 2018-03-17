import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActiveProcessComponent } from './active-process/active-process';
import { ScheduleComponent } from './schedule/schedule';
import { AllProcessesComponent } from './all-processes/all-processes';
import { MapComponent } from './map/map';
@NgModule({
	declarations: [ActiveProcessComponent,
    ScheduleComponent,
    AllProcessesComponent,
    MapComponent],
	imports: [],
	exports: [ActiveProcessComponent,
    ScheduleComponent,
    AllProcessesComponent,
    MapComponent],
})
export class ComponentsModule {}
