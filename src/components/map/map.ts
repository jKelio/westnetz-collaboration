import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';

debugger;

declare var google: any;

@Component({
  selector: 'map',
  templateUrl: 'map.html'
})
export class MapComponent implements AfterViewInit {

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

  constructor() {}

  ngAfterViewInit(): void {

    let mapEle = this.mapElement.nativeElement;

    let map = new google.maps.Map(mapEle, {
      center: this.mapData.find((d: any) => d.center),
      zoom: 16
    });

    this.mapData.forEach((markerData: any) => {
      let infoWindow = new google.maps.InfoWindow({
        content: `<h5>${markerData.name}</h5>`
      });

      let marker = new google.maps.Marker({
        position: markerData,
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
