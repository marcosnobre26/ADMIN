import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './app.service';
import 'rxjs/add/operator/switchMap';
import { Auth } from './table/Auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  auth: any[];
  autenticacao: string;

  constructor(private appService: AppService,
        private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
        this.appService.auth().
            subscribe(auth => {this.auth = auth;

              if(auth.length==1)
                {
                  this.autenticacao="autenticado";
                }
                else{
                  this.autenticacao="login";
                }
        });
    }
}
