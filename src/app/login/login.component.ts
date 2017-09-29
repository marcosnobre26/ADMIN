import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //login: any[];
  login: any;

  constructor(private loginService: LoginService,
        private router: Router) { }


  

  ngOnInit() {
    this.loginService.all().
            subscribe(login => {this.login = login;});
  }

  onSubmit(formulario){
    let resposta: any;
    //let id: any;
    let id: any=this.buscaID(this.login, formulario.value.usuario, formulario.value.senha);;
    //console.log(formulario.value.usuario);
    resposta = this.verificacao(this.login, formulario.value.usuario, formulario.value.senha);
    //console.log(id);

    if(resposta==true)
    {
      this.router.navigate(['/pesos/'+id]);
    }
  }

  verificacao(login: any[], user: any, senha: any)
  {
    for (let usuario of this.login) {
            //this.var=this.var+1;
            //console.log(usuario.nome);
            /*usuario.email==user*/
            if(usuario.senha==senha || usuario.email==user)
            {
              //console.log('senha e email iguais');
              return true
            }
            //console.log(user);
        }
  }

  buscaID(login: any[], user: any, senha: any)
  {
    for (let usuario of this.login) {
            //this.var=this.var+1;
            //console.log(usuario.nome);
            /*usuario.email==user*/
            if(usuario.senha==senha || usuario.email==user)
            {
              //console.log('senha e email iguais');
              //return true
              return usuario.idUsuario;
            }
            //console.log(user);
        }
  }

}
