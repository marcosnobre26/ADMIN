import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TableService } from './table.service';
import 'rxjs/add/operator/switchMap';
import { Auth } from './Auth';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public auth: any;
    public pesos: any[];
    autenticacao: string;

    constructor(private tableService: TableService,
        private route: ActivatedRoute, private router: Router) { }


    ngOnInit(){
        this.informacoes();
        this.tableService.auth().
            subscribe(auth => {
                this.auth = auth;
                this.autenticacao=typeof(this.auth[0].id);
                if(this.autenticacao!='number')
                {
                    this.router.navigate(['']);
                }
        });
    }

    deletar(id: number){
        this.tableService.delete(id).subscribe();
        this.informacoes();
    }

    informacoes(){
        this.tableService.auth().subscribe(auth => {this.auth = auth;
            this.autenticacao=typeof(this.auth[0].id);
            
            this.tableService.pesos(this.auth[0].id)
                .subscribe(pesos => {this.pesos = pesos;});
        });
    }
}
