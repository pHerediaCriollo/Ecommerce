import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { LoginComponent } from './Componentes/login/login.component';


const routes: Routes = [

  {
    path: '', component:LoginComponent
  },
  {
    path: 'web2', component: ComprasComponent
  }
  {
    path: 'web3', component: CarritoComponent
  }
  {
    path: 'error', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
