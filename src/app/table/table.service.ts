import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import { Auth } from './Auth';

@Injectable()
export class TableService {

  constructor(private http: Http) { }

  auth(): Observable<Auth[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as Auth[]);
  }

  pesos(id: any): Observable<any[]> {
        return this.http.get('http://localhost:3000/pesos?idusuario='+id)
            .map(response => response.json() as any[]);
  }

  delete(id: any): Observable<any[]> {
        return this.http.delete('http://localhost:3000/pesos/'+id)
            .map(response => response.json() as any[]);
  }
}