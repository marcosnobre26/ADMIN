import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class SidebarService {

  constructor(private http: Http) { }

  auth(): Observable<any[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as any[]);
  }

  logout(id: any): Observable<any[]> {
        return this.http.delete('http://localhost:3000/auth/'+id)
            .map(response => response.json() as any[]);
  }
}