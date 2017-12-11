import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  auth(): Observable<any[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as any[]);
  }

  pesos(id): Observable<any[]> {
        return this.http.get('http://localhost:3000/pesos?idusuario='+id)
            .map(response => response.json() as any[]);
  }

  editUser(id: Number, nome: String, email: String, senha: String, datanascimento: Date, altura: Number, peso: Number): Observable<any> {
    const user = {'id':id, 'nome': nome, 'email': email , 'senha': senha, 'datanascimento': datanascimento, 'altura': altura, 'peso': peso };
    console.log(user);
    return this.http.patch('http://localhost:3000/usuarios/'+id,user);
  }

  editAuth(id: Number, nome: String, email: String, senha: String, datanascimento: Date, altura: Number, peso: Number): Observable<any> {
    const user = {'id':id, 'nome': nome, 'email': email , 'senha': senha, 'datanascimento': datanascimento, 'altura': altura, 'peso': peso };
    console.log(user);
    return this.http.patch('http://localhost:3000/auth/'+id,user);
  }
}