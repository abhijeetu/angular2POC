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
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getSingleMovie(id:number): Observable <Movie>
  {
    return this.http.get(this.restURL + '/' + id)
      .map((res:Response) => res.json())
      .do(data=>console.log(JSON.stringify(data)))
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  addMovie (body: Object): Observable<any> {
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.post(this.restURL, body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateMovie (body: Object): Observable<Movie[]> {
    let bodyString = JSON.stringify(body);
    let headers      = new Headers({ 'Content-Type': 'application/json' });
    let options       = new RequestOptions({ headers: headers });

    return this.http.put(`${this.restURL}/${body['_id']}`, body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeMovie (id:number): Observable<Movie[]> {
    return this.http.delete(`${this.restURL}/${id}`)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
