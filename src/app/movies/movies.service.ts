import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/observable';
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
      .subscribe(res => {
        console.log(res);
      });
      //...errors if any
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  private extractData(res: Response){
    console.log(res);
    let body = res.json();
    console.log(body);
    return body.data || {"test":"123"};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
