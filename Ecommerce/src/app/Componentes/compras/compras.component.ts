import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }
  Banco: any;
  Mancuernas: any;
  Tomatodos: any;
  ngOnInit(): void {
  }
  comprado()
  {
    this.router.navigate(['web3'])
    this.Banco = localStorage.getItem('Banco');
    this.Mancuernas = localStorage.getItem('Mancuernas');
    this.Tomatodos = localStorage.getItem('Tomatodos');
  }
}

