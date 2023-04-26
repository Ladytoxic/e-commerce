import { Component } from '@angular/core';
import { Producto } from 'src/app/interface/product.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-list',
  template: `
  <section>
    <h2>Catalogo de Productos</h2>
    <div class="cards">
        <div class="card" *ngFor="let producto of products">
            <div class="card-header">
                <h3>{{ producto.nombre }}</h3>
            </div>
            <div class="card-body">
                <p>{{ producto.descripcion }}</p>
                <p>Categoría: {{ producto.categoria }}</p>
                <p>Precio: {{ producto.precio | currency }}</p>
                <p>Stock: {{ producto.stock }}</p>
            </div>
        </div>
        <p *ngIf="!products">No hay productos</p>
    </div>
</section>`,
})
export class ProductListComponent {
  products!: Producto[];
  constructor(private dataServ: DataService) { }
  ngOnInit() {
    this.dataServ.getProductos().subscribe(products => {
      this.products = Object.values(products);
    });
  }
}