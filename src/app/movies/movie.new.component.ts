import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

import {Movie} from "./movie";
import {MovieService} from "./movies.service";

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'movie-details',
  templateUrl: './movie.new.component.html'
})
export class NewMovieComponent implements OnInit {

  movieId:number;
  private movie = new Movie();
  private editing = false;
  private errorMessage="";

  constructor(private router:Router,private route : ActivatedRoute,private movieService:MovieService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      if(this.movieId){
        this.editing = true;
        this.movieService.getSingleMovie(this.movieId).subscribe(movie=>this.movie=movie,error=>this.errorMessage = error);
      }
    });
  }

  addMovie(){
    // Variable to hold a reference of addComment/updateComment
    let commentOperation:Observable<Movie[]>;


    if(!this.editing){
      // Create a new comment
      commentOperation = this.movieService.addMovie(this.movie)
    } else {
      // Update an existing comment
      commentOperation = this.movieService.updateMovie(this.movie)
    }

    // Subscribe to observable
    commentOperation.subscribe(
      comments => {
        // Emit list event
        //EmitterService.get(this.listId).emit(comments);
        // Empty model
        this.movie = new Movie();
        // Switch editing status
        if(this.editing) this.editing = !this.editing;
      },
      err => {
        // Log errors if any
        console.log(err);
      });
    this.router.navigate(['/movies']);
  }


}
