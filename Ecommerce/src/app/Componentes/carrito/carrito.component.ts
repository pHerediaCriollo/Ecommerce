import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor() { }
  Banco: any;
  Mancuernas: any;
  Tomatodos: any;
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar()
  {
    this.Banco = localStorage.getItem('Banco');
    this.Mancuernas = localStorage.getItem('Mancuernas');
    this.Tomatodos = localStorage.getItem('Tomatodos');
  }
}
