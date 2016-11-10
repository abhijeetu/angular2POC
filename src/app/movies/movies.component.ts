import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MovieService} from "./movies.service";
import {Movie} from "./movie";


@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies:Movie[];
  private errorMessage:string;
  constructor(private movieService:MovieService,private router:Router) {
    // Do stuff
  }


  ngOnInit() :void{

    this.movieService.getMovies().subscribe(movies=>this.movies=movies,error=>this.errorMessage = error);
    console.log(this.movies);
  }

  public gotoMovieDetails(id){
    this.router.navigate(['/movieDetails',id]);
  }

  public createNewMovie(){
    this.router.navigate(['/createNewMovie']);
  }

}
