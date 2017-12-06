import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { UsuarioRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    //UsuarioRoutingModule
  ],
  declarations: [ UserComponent ],
  providers: [UserService],
})
export class UserModule { }
