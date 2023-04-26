import { Component } from '@angular/core';
import { Producto } from 'src/app/interface/product.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-shopping-cart',
  template:`
  <section class="box">
    <h4>Mi carrito</h4>
    <ul>
        <li *ngFor="let product of products; let indice =index;">
            <div class="card-header">
                <em>{{ product.marca ? product.marca.toUpperCase() : '' }}</em>
                <h3>{{ product.nombre }}</h3>
            </div>
            <div class="card-body">
                <ng-container *ngIf="product.descuento !== undefined; else sinDescuento">
                    <span class="precio-tachado">{{ product.precio | currency }}</span>
                    <p><span class="price">{{ precioDescuento(product.precio, product.descuento) |
                            currency}}</span><span *ngIf="product.descuento" class="discount">{{ product.descuento }}%
                            OFF</span></p>
                </ng-container>
                <ng-template #sinDescuento>
                    <p><span class="price">{{ product.precio | currency }}</span><span *ngIf="product.descuento"
                            class="discount">{{ product.descuento }}% OFF</span></p>
                </ng-template>
                <button (click)="deleteProduct(indice)" aria-label="Borrar este producto"
                    title="Borrar este producto">Borrar</button>
            </div>
        </li>
    </ul>
    <div class="box_total">
        <em>TOTAL:</em>
        <em>{{total | currency}}</em>
    </div>
    <button aria-label="Iniciar Compra" title="Iniciar Compra">Iniciar Compra</button>
</section>`
})
export class ShoppingCartComponent {
  products: Producto[] = [];
  total = 0;
  constructor(private dataServ: DataService) { }
  ngOnInit() {
    this.dataServ.products.subscribe(products => {
      this.products = Object.values(products);
      this.total = products.reduce((prev, curr)=> prev + curr.precio, 0)
    })
  }

  precioDescuento(precio: number, descuento: number): number {
    const descuentoDecimal = descuento / 100;
    const precioConDescuento = precio - (precio * descuentoDecimal);
    return precioConDescuento;
  }

  deleteProduct(indice: number) {
    this.dataServ.deleteProduct(indice);
  }
}
