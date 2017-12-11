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
    email: string;
    senha: string;
    erro = null;

    constructor(private loginService: LoginService,
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        this.loginService.auth().
            subscribe(auth => {this.auth = auth;

            if(auth.length==1)
            {
                this.router.navigate(['table']);
                window.location.reload();
            }
        });
    }

    entrar() {
        let log: any;
        this.loginService.login(this.email, this.senha).
            subscribe(log => {log = log;
                if(log.length==1)
                {
                    this.loginService.addUser(log[0].id, log[0].nome,log[0].email,log[0].senha,log[0].datanascimento,log[0].altura,log[0].peso,log[0].sexo,log[0].datacadastro, log[0].status).subscribe();

                    this.router.navigate(['table']);
                }
                else
                {
                    alert("Informe seu email e senha corretamente.");
                    this.email="";
                    this.senha="";  
                }               
            });                     
        }
}
