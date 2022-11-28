import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Cliente } from '../Interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private fires: Firestore) {}

  addCliente(cliente: Cliente) {
    const REF = collection(this.fires, 'Clientes');
    return addDoc(REF, cliente);
  }

  getClientes(): Observable<Cliente[]> {
    const REF = collection(this.fires, 'Clientes');
    return collectionData(REF, { idField: 'id' }) as Observable<Cliente[]>;
  }

  deleteCliente(cliente: Cliente) {
    const ClientDocRef = doc(this.fires, `Clientes/${cliente.id}`);
    return deleteDoc(ClientDocRef);
  }

  updateCliente(cliente: Cliente) {
    const ClientDocRef = doc(this.fires, `Clientes/${cliente.id}`);
    // return updateDoc();
  }
}
