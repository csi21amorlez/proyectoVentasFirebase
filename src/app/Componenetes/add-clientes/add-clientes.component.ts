import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../Services/clientes.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css'],
})
export class AddClientesComponent implements OnInit {

  formulario: FormGroup;

  constructor(private cliService: ClientesService) {
    this.formulario = new FormGroup({
      id: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
    });
  }
  
  ngOnInit(): void {}

 async onSubmit(){
  //Para testear
  console.log(this.formulario.value)
  //Esparamos la promesa
  const res = await this.cliService.addCliente(this.formulario.value)
 }
}
