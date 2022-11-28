import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-add-articulos',
  templateUrl: './add-articulos.component.html',
  styleUrls: ['./add-articulos.component.css']
})
export class AddArticulosComponent implements OnInit {

  formulario: FormGroup;
  constructor(private artService: ArticulosService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(),
      familia: new FormControl(),
      precio: new FormControl(),
      stock: new FormControl(),
    });
  }

  ngOnInit(): void {}
  async onSubmit() {
    console.log(this.formulario.value);
    const response = await this.artService.addArticulo(this.formulario.value);
    console.log(response);
  }

}
