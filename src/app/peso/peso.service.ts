import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class PesoService {

  constructor(private http: Http) { }

  pesos(id: any): Observable<any[]> {
        return this.http.get('http://localhost:3000/pesos?idusuario='+id)
            .map(response => response.json() as any[]);
  }

  user(id: any): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios?idUsuario='+id)
            .map(response => response.json() as any[]);
  }

  delete(id: any) {
        return this.http.delete('http://localhost:3000/pesos/' + id)
            .map(response => response.json());
    }
}