import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  mapData: any = [{
    center: true,
    lat: 0.0,
    lng: 0.0
  }, {
    center: false,
    lat: 30.0,
    lng: 50.0
  }];

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      this.loadMap();
    });
  }

  private loadMap(): void {
    let mapEle = this.mapElement.nativeElement;

    let map = new google.maps.Map(mapEle, {
      center: new google.maps.LatLng(43.071584, -89.380120),
      zoom: 16
    });

    this.mapData.forEach((markerData: any) => {
      let infoWindow = new google.maps.InfoWindow({
        content: `<h5>${markerData.name}</h5>`
      });

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.071584, -89.380120),
        map: map,
        title: markerData.name
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
}
