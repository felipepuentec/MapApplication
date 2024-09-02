import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];

  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw 'Map div not found';
    if (!this.lngLat) throw "LngLat can't be null";

    //mapa
    const map = new Map({
      container: this.divMap.nativeElement, // container ID - Mandamos como un elemento HTML
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 12, // starting zoom
      interactive: false,
    });
    // marker
    new Marker({ color: 'red' }).setLngLat(this.lngLat).addTo(map);
  }
}
