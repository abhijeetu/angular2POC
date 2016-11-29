import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movies/movie.details.component';

import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {MovieService} from './movies/movies.service';
import {NewMovieComponent} from './movies/movie.new.component.ts';


import {GoogleplaceDirective} from './googleplace.directive.ts';
import { GoogleComponent } from './google/google.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapComponent } from "./google/google-map/google-map.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCy_iIR-UAa-oO4lrFycjTyQkS14GXbQys'
    }),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CarouselComponent,
    DetailsComponent,
    MoviesComponent,
    MovieDetailsComponent,
    NewMovieComponent,
    GoogleplaceDirective,
    GoogleComponent,
    GoogleMapComponent
  ],
  providers: [
    ApiService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
