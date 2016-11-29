import { Component, OnInit } from '@angular/core';
import { GoogleMapComponent } from "./google-map/google-map.component";

@Component({
  selector: 'google-api',
  templateUrl: './google.component.html'
})
export class GoogleComponent implements OnInit {

  mapValue1:any;
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  public address: Object;

  getAddress(place: Object) {
    this.address = place['formatted_address'];
    var location = place['geometry']['location'];
    var lat = location.lat();
    var lng = location.lng();
    //mapValue1 = { latitue:lat, logitude:lng };
    //this.mapValue1 = new cordinates(latitude: lat, longitude: lng);

    this.mapValue1 = {
      latitude:lat,
      longitude:lng
    }

    console.log("Address Object", place);
  }
}


