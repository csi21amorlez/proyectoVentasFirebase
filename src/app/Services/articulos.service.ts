import { Injectable } from '@angular/core';
import {Firestore, collection, addDoc, collectionData, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Cliente } from '../Interfaces/cliente';
import { Articulo } from '../Interfaces/articulos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private fires:Firestore) { }

  addArticulo(art:Articulo) {
    const REF = collection(this.fires, 'Articulos');
    return addDoc(REF, art);
  }

  getArticulo(): Observable<Articulo[]> {
    const ref = collection(this.fires, 'Articulos');
    return collectionData(ref, { idField: 'id' }) as Observable<Articulo[]>;
  }

  deleteArticulo(articulo: Articulo) {
    const ClientDocRef = doc(this.fires, `Articulos/${articulo.id}`);
    return deleteDoc(ClientDocRef);
  }
}
