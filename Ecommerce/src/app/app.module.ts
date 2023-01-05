import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { ComprasComponent } from '../compras/compras.component';
import { CarritoComponent } from '../carrito/carrito.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ 
    LoginComponent, 
    ErrorComponent, 
    ComprasComponent, 
    CarritoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
