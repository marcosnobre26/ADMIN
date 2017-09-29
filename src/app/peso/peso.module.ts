import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesoRoutingModule } from './peso-routing.module';

import { PesoService } from './peso.service';

import { PesoComponent } from './peso.component';

@NgModule({
  imports: [
    CommonModule,
    PesoRoutingModule
  ],
  declarations: [ PesoComponent ],
  providers: [ PesoService ],
})
export class PesoModule { }
