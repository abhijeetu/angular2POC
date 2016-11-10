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

  movieId:string;
  private movie = new Movie();
  private editing = false;

  constructor(private router:Router,private route : ActivatedRoute,private movieService:MovieService) {

  }

  ngOnInit() {
  }

  addMovie(){
    // Variable to hold a reference of addComment/updateComment
    let commentOperation:Observable<Movie[]>;


    if(!this.editing){
      // Create a new comment
      commentOperation = this.movieService.addMovie(this.movie)
    } else {
      // Update an existing comment
      //commentOperation = this.commentService.updateMovie(this.movie)
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
