import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import { Auth } from './Auth';

@Injectable()
export class LoginService {

  private options = null;
  private headers = null;
  API_URL = "http://localhost:3000";

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers });
   }

  auth(): Observable<any[]> {
        return this.http.get('http://localhost:3000/auth')
            .map(response => response.json() as any[]);
  }

  login(email: string, senha: string): Observable<any[]> {
        return this.http.get('http://localhost:3000/usuarios?email='+email+'&senha='+senha)
            .map(response => response.json() as any[]);
  }

  teste(): Observable<any[]> {
        return this.http.get('http://localhost:3000/teste')
            .map(response => response.json() as any[]);
  }

  addUser(id: Number, nome: String, email: String, senha: String, datanascimento: String, altura: String, peso: String, sexo: String, datacadastro: String, status: String): Observable<any> {
    const user = {'nome': nome, 'email': email , 'senha': senha, 'datanascimento': datanascimento, 'altura': altura, 'peso': peso, 'sexo': sexo, 'datacadastro': datacadastro, 'status':status};
    return this.http.post('http://localhost:3000/auth', user)
                         .map(response => response.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
}
