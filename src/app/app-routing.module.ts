import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientesComponent } from "./Componenetes/clientes/clientes.component";
import { AddClientesComponent } from "./Componenetes/add-clientes/add-clientes.component";
import { MenuComponent } from "./Componenetes/menu/menu.component";
import { ArticulosComponent } from "./Componenetes/articulos/articulos.component";
import { AddArticulosComponent } from "./Componenetes/add-articulos/add-articulos.component";

const routes: Routes = [
  { path: "Clientes", component: ClientesComponent },
  { path: "CrearClientes", component: AddClientesComponent },
  { path: "Articulos", component: ArticulosComponent },
  { path: "CrearArticulo", component: AddArticulosComponent },
  { path: "Clientes/:id", component: ClientesComponent },
  //En caso de que la ruta sea nula nos reenvia al menu
  { path: "**", component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
