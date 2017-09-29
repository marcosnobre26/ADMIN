import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoComponent } from './peso.component';

const routes: Routes = [
  { path: 'pesos/:id', component: PesoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesoRoutingModule { }
