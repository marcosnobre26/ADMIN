import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ CommonModule,CommonModule,
    BrowserModule,
    FormsModule ],
    declarations: [ LoginComponent ],
    exports: [  ],
    providers: [LoginService]
})

export class LoginModule {}
