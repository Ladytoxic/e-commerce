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
            <img [src]="producto.img" [alt]="'imagen de '+ producto.nombre" (error)="producto.img = '{{img_default}}'" *ngIf="producto.img">
            <img [src]="img_default" [alt]="'imagen de '+ producto.nombre" *ngIf="!producto.img">
            <em>{{ producto.marca ? producto.marca.toUpperCase() : '' }}</em>
            <h3>{{ producto.nombre }}</h3>
          </div>
          <div class="card-body">
              <p><span class="label">Categoría:</span> {{ producto.categoria }}</p>
              <p><span class="label">Descripción:</span> {{ producto.descripcion }}</p>
              <ng-container *ngIf="producto.descuento !== undefined; else sinDescuento">
                <span class="precio-tachado">{{ producto.precio | currency }}</span>
                <p><span class="price">{{ precioDescuento(producto.precio, producto.descuento) | currency }}</span><span *ngIf="producto.descuento" class="discount">{{ producto.descuento }}% OFF</span></p>
              </ng-container>
              <ng-template #sinDescuento>
                <p><span class="price">{{ producto.precio | currency }}</span><span *ngIf="producto.descuento" class="discount">{{ producto.descuento }}% OFF</span></p>
               </ng-template>
              <p class="stock"><span class="label">Stock:</span> <span>{{ producto.stock }} {{ producto.stock === 1 ? 'Disponible' : 'Disponibles' }}</span></p>
           </div>
           <button>Agregar</button>
       </div>
        <p *ngIf="!products">No hay productos</p>
    </div>
</section>`,
})
export class ProductListComponent {
  products!: Producto[];
  img_default = 'https://www.theseasonedhome.com/content/images/thumbs/default-image_450.png'
  constructor(private dataServ: DataService) { }
  ngOnInit() {
    this.dataServ.getProductos().subscribe(products => {
      this.products = Object.values(products);
    });
  }
  precioDescuento(precio: number, descuento: number): number {
    const descuentoDecimal = descuento / 100;
    const precioConDescuento = precio - (precio * descuentoDecimal);
    return precioConDescuento;
  }
}