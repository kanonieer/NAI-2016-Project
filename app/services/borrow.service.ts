import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Borrow } from './../models/borrow.model';

@Injectable()
export class BorrowService {
    private url = 'http://localhost:8081/api';

    private headers = new Headers(
        { 'Content-Type':'application/json',
          'Accept':'application/json'
           });
    private options = new RequestOptions({ headers: this.headers});

    constructor(private http: Http) {
    }
    borrowMovies (data: Borrow):Observable<any>{
        return this.http.post(this.url+'/borrow', JSON.stringify(data), this.options)
            .map( (res: Response) => BorrowService.json(res))
            .catch( this.handleError);
    }

    private handleError(error:any){
        console.log('Borrow Service Error', error);
        return Observable.throw(error || 'Server error');
    }

    private static json(res: Response):any {
        return res.text() === "" ? res : res.json();
    }
}