import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieService {
  private restURL = 'http://movieapp-sitepointdemos.rhcloud.com/api/movies';
  movieName = 'Angular 2';

  constructor (private http: Http){}

  getMovies(): Observable <Movie[]>
  {
    return this.http.get(this.restURL)
      .map((res:Response) => res.json())
      .do(data=>console.log(JSON.stringify(data)))
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }


}
