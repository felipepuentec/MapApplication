import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.css',
})
export class FullScreenPageComponent implements AfterViewInit {
  // En vez de hacer referencia con el ID vamos a hacer referencia usando el ViewChild
  // Nos permite tomar una referencia a un elemento HTML, en este caso basado en la referencia local mapa
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) {
      console.log(this.divMap);
      throw 'El elemento HTML no fue encontrado';
    }

    const map = new Map({
      container: this.divMap.nativeElement, // container ID - Mandamos como un elemento HTML
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
