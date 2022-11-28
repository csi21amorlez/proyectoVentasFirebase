import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../Interfaces/cliente';
import { ClientesService } from '../../Services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes?: Cliente[];
  constructor(private cliService: ClientesService) {}

  async delete(cliente: Cliente) {
    const response = await this.cliService.deleteCliente(cliente);
    console.log(response);
  }

  ngOnInit(): void {
    this.cliService.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

}
