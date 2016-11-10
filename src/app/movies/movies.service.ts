import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
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

  addMovie (body: Object): Observable<Movie[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.restURL, body, options) // ...using post request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
/*
  // Update a comment
  updateComment (body: Object): Observable<Comment[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(`${this.commentsUrl}/${body['id']}`, body, options) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }

  // Delete a comment
  removeComment (id:string): Observable<Comment[]> {
    return this.http.delete(`${this.commentsUrl}/${id}`) // ...using put request
      .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }
*/

}
