import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  Total: any;
  Canilleras: any;
  Saco: any;
  Guantes: any;
  Banco: any;
  Mancuernas: any;
  Tomatodos: any;
  Rodilleras: any;
  constructor() { }
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar()
  {
    this.Banco = localStorage.getItem('Banco');
    this.Mancuernas = localStorage.getItem('Mancuernas');
    this.Tomatodos = localStorage.getItem('Tomatodos');
    this.Guantes = localStorage.getItem('Guantes');
    this.Rodilleras = localStorage.getItem('Rodilleras');
    this.Canilleras = localStorage.getItem('Canilleras');
    this.Saco = localStorage.getItem('Saco');
  }
  suma(){
    this.Banco = 270;
    this.Mancuernas =70 ;
    this.Tomatodos = 15;
    this.Guantes = 32;
    this.Rodilleras = 28;
    this.Canilleras = 17;
    this.Saco = 39;
  }
  Tot(){
    this.Total= this.suma();
  }
}
