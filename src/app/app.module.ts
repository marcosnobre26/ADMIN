import { BrowserModule } from '@angular/platform-browser';
import { NgModule/*, Component, OnInit*/ } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

//import { UsuarioComponent } from './usuario/usuario.component';
//import { PesoComponent } from './peso/peso.component';

import { AppRoutingModule } from './app-routing.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PesoModule } from './peso/peso.module';

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //UsuarioComponent,
    //PesoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    UsuarioModule,
    PesoModule,
    AppRoutingModule,
    HttpModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
