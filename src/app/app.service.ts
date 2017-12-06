import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import { Auth } from './table/Auth';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  auth(): Observable<Auth[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as Auth[]);
  }
}