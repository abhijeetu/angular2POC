import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import {Movie} from "./movie";
import {MovieService} from "./movies.service";


@Component({
  selector: 'movie-details',
  templateUrl: './movie.details.component.html'
})
export class MovieDetailsComponent implements OnInit {

  movieId:string;
  private movie = new Movie();
  private errorMessage:string;

  constructor(private router:Router,private route : ActivatedRoute,private movieService:MovieService) {

  }

  ngOnInit() {
    //this.productID = route.snapshot.params['id']; // 3
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
    //  this.movieService.getMovies().subscribe(movies=>this.movies=movies,error=>this.errorMessage = error);
      //console.log(this.movies);
      console.log('***' + this.movieId);


        this.movieService.getSingleMovie(this.movieId).subscribe(movie=>this.movie=movie,error=>this.errorMessage = error);


      console.log(this.movie);

    });

    console.log('Movie Details Page');
  }

  editMovie(id){
    this.router.navigate(['/createNewMovie',id]);
  }

}
