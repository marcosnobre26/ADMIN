import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios')
            .map(response => response.json() as any[]);
  }
}
