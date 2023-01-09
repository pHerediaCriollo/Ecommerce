import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router){}
  correo: any;
  contra: any;
  ngOnInit(): void {
    this.contra;
    this.correo;
    //localStorage.clear()
  }
  registrado()
  {
    this.router.navigate(['web2'])
    localStorage.setItem('correo', this.correo);
    localStorage.setItem('contra', this.contra);
  }
}
