import { Component } from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  constructor() {
    GoogleMapsLoader.KEY = 'AIzaSyCpNqmrx55YZFF3lwPioDSnbXmGMI_8LLU';
    GoogleMapsLoader.load(function(google) {
      var test = new google.maps.Map('map_canvas', {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      debugger
    });
  }

}
