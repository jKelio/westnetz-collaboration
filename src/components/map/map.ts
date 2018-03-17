import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {
  latitude: number;
  longitude: number;
  constructor() {}

}
