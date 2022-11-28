import { Component, OnInit } from '@angular/core';
import { Articulo } from '../../Interfaces/articulos';
import { ArticulosService } from '../../Services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos?: Articulo[];
  constructor(private artService: ArticulosService) {}

  async delete(articulo: Articulo) {
    const response = await this.artService.deleteArticulo(articulo);
    console.log(response);
  }

  ngOnInit(): void {
    this.artService.getArticulo().subscribe((articulos) => {
      this.articulos = articulos;
    });
  }

}
