import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MapLaunchProvider } from 'ext-ionic';

@IonicPage()
@Component({
  selector: 'page-run-map',
  templateUrl: 'run-map.html',
})
export class RunMapPage {

  longitude: number;

  latitude: number;

  constructor(private mapLaunchProvider: MapLaunchProvider) {
    this.latitude = 39.98871;
    this.longitude = 116.43234;
  }

  runMap() {
    this.mapLaunchProvider.launch({
      lng: this.longitude,
      lat: this.latitude
    });
  }
}
