import { Component, OnInit } from '@angular/core';
import {MovieService} from "./movies.service";
import {Movie} from "./movie";


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies:Movie[];
  private errorMessage:string;
  constructor(private movieService:MovieService) {
    // Do stuff
  }


  ngOnInit() :void{

    this.movieService.getMovies().subscribe(movies=>this.movies=movies,error=>this.errorMessage = error);
    console.log(this.movies);
  }

}
