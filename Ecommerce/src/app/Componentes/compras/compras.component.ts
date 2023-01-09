import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor() { }
  Com: any;
  ngOnInit(): void {
  }
  comprado()
  {
    this.router.navigate(['web3'])
    this.Com = localStorage.getItem('Com');
  }
}

