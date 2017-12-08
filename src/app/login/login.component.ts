import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import 'rxjs/add/operator/switchMap';
import { Auth } from './Auth';

@Component({
    selector: 'login-cmp',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    //styleUrls: ['login.css']
})

export class LoginComponent implements OnInit{
    auth: any[];
    autenticacao: string;
    email: string;
    senha: string;
    erro = null;

    constructor(private loginService: LoginService,
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        this.loginService.auth().
            subscribe(auth => {this.auth = auth;
                this.autenticacao=typeof(this.auth[0].id);
            
            if(this.autenticacao=='number')
            {
                this.router.navigate(['user']);
            }
        });
    }

    entrar() {
        let log: any;
        let criterio: any;
        this.loginService.login(this.email, this.senha).
            subscribe(log => {log = log;
                criterio =typeof(log[0].id);
                console.log("log: "+log);

                if(criterio=='[object Object]')
                {
                    this.router.navigate(['user']);
                }                
            });
            alert("Informe seu email e senha corretamente.");
            this.email="";
            this.senha="";
            
        }
        

    /*entrar() {
    this.authService.auth(this.email, this.senha)
      .subscribe(usuarios => {
        if (usuarios.length > 0) {
          this.erro = null;
          this.authService.set(usuarios[0]);
          this.router.navigate(['admin']);
        } else {
          this.erro = 'Login ou senha incorretos';
        }
      });
  }*/
}
