import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './Componenetes/clientes/clientes.component';
import { AddClientesComponent } from './Componenetes/add-clientes/add-clientes.component';
import { MenuComponent } from './Componenetes/menu/menu.component';

const routes: Routes = [  
{ path: 'clientes', component: ClientesComponent },
{ path: 'crear', component: AddClientesComponent },
{ path: 'clientes/:id', component: ClientesComponent },
//En caso de que la ruta sea nula nos reenvia al menu
{path:'**', component:MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
