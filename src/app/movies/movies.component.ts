import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movies.service";

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MovieService) {
    // Do stuff
  }

  ngOnInit() {
    console.log(this.movieService.getMovies());
    console.log('Hello Movie');
  }

}
