import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableService } from './table.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ TableComponent ],
  providers: [TableService],
})
export class TableModule { }
