import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'movie-details',
  templateUrl: './movie.details.component.html'
})
export class MovieDetailsComponent implements OnInit {

  movieId:string;

  constructor(private route : ActivatedRoute) {

  }

  ngOnInit() {
    //this.productID = route.snapshot.params['id']; // 3
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log('***' + this.movieId);
    });

    console.log('Movie Details Page');
  }

}
