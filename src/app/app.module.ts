import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClientesComponent } from './Componenetes/add-clientes/add-clientes.component';
import { ArticulosComponent } from './Componenetes/articulos/articulos.component';
import { ClientesComponent } from './Componenetes/clientes/clientes.component';
import { MenuComponent } from './Componenetes/menu/menu.component';
import { from } from 'rxjs';
import { AddArticulosComponent } from './Componenetes/add-articulos/add-articulos.component';
import { ClientesService } from './Services/clientes.service';
import { ArticulosService } from './Services/articulos.service';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddArticulosComponent,
    AddClientesComponent,
    ArticulosComponent,
    ClientesComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
  ],
  providers: [ClientesService, ArticulosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
