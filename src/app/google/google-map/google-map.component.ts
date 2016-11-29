import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'google-map-api',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './google-map.component.html',
  styleUrls: ['app.component.css']
})
export class GoogleMapComponent  implements OnInit,OnChanges {
  @Input() mapValue: any;

  // google maps zoom level
  zoom: number = 8;

  // initial center position for the map
  lat: number;
  lng: number;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  currgeocoder:any;
  public counterValue:number = 0;

  ngOnInit() {
    console.log(this.mapValue);
    /*this.lat = 18;
    this.lng = 73;*/
    this.getCurrentPosition();
    //console.log("***" + result);
  };

  ngOnChanges(changes:SimpleChanges)
  {
    console.log(changes)
  }

  private getCurrentPosition(): any{
    //var currgeocoder;
    var html5Lat, html5Lon, html5TimeStamp, html5Accuracy, geo_loc, currLatLong;

    //Set geo location lat and long
    navigator.geolocation.getCurrentPosition((position)=> {

      geo_loc = this.processGeolocationResult(position);
      currLatLong = geo_loc.split(",");
      this.initializeCurrent(currLatLong[0], currLatLong[1]);
      return position;
    });
  }

//Get geo location result

  public processGeolocationResult(position) {
    var html5Lat = position.coords.latitude; //Get latitude
    var html5Lon = position.coords.longitude; //Get longitude
    var html5TimeStamp = position.timestamp; //Get timestamp
    var html5Accuracy = position.coords.accuracy; //Get accuracy in meters
    return (html5Lat).toFixed(8) + ", " + (html5Lon).toFixed(8);
  }

//Check value is present or not & call google api function

  public initializeCurrent(latcurr, longcurr) {
    this.currgeocoder = new google.maps.Geocoder();
    console.log(latcurr + "-- ######## --" + longcurr);

    // this.lat = 0;
    // this.lng = 0;
    console.log(this.lat + "@@@@@" + this.lng);
    if (latcurr != '' && longcurr != '') {
      var myLatlng = new google.maps.LatLng(latcurr, longcurr);
      this.markers =[{
        lat: latcurr,
        lng: longcurr,
        label: 'A',
        draggable: true
      }];
      return this.getCurrentAddress(myLatlng);
    }
  }

//Get current address

  public getCurrentAddress(location) {
    this.currgeocoder.geocode({
      'location': location

    }, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results[0]);
        //$("#address").html(results[0].formatted_address);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  markers: marker[] = [
    {
      lat: this.lat,
      lng: this.lng,
      label: 'A',
      draggable: true
    }
  ]
}
// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
