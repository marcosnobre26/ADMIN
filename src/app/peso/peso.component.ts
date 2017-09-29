import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PesoService } from './peso.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-peso',
  templateUrl: './peso.component.html',
  styleUrls: ['./peso.component.css']
})
export class PesoComponent implements OnInit {

  login: any[];
  pesos: any[];
  idUsuario: any;
  //login: any;
  //id: number = Number.parseInt(params['id']);

  constructor(private pesoService: PesoService,private route: ActivatedRoute,
        private router: Router) { }


  

  ngOnInit() {
    this.route.params
            .switchMap(params => {
                let id: number = Number.parseInt(params['id']);
                this.idUsuario=id;
                return this.pesoService.user(id);
            })
            .subscribe(login => {
                this.login = login;
                //this.getArtigosEvento(this.evento.id);
            }
            );


    //this.pesoService.user(2).
            //subscribe(login => {this.login = login; /*console.log(login);*/});
    this.pesoService.pesos(this.idUsuario).
            subscribe(pesos => {this.pesos = pesos; /*console.log(pesos);*/});
  }

  deletar(id: any){
    //console.log(id);
    this.pesoService.delete(id);
  }

  sair(){
    this.router.navigate(['/login']);
  }

}
