import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  router: any;

  constructor() { }
  Canilleras: any;
  Saco: any;
  Guantes: any;
  Banco: any;
  Mancuernas: any;
  Tomatodos: any;
  Rodilleras: any;
  ngOnInit(): void {
  }
  comprado()
  {
    this.router.navigate(['web3'])
    this.Banco = localStorage.getItem('Banco');
    this.Mancuernas = localStorage.getItem('Mancuernas');
    this.Tomatodos = localStorage.getItem('Tomatodos');
    this.Guantes = localStorage.getItem('Guantes');
    this.Rodilleras = localStorage.getItem('Rodilleras');
    this.Canilleras = localStorage.getItem('Canilleras');
    this.Saco = localStorage.getItem('Saco');
  }
}

