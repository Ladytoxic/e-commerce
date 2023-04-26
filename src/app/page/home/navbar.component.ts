import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  template: `
<nav>
    <span>{{titulo}}</span>
    <app-search-product></app-search-product>
    <div class="cart">
      <button class="btn-cart" aria-label="Mostrar carrito de compra"
                    title="Mostrar carrito de compra"></button>
      <span class="acc_total" *ngIf="total !== 0">{{ total }}</span>
    </div>
</nav>`
})
export class NavbarComponent {
  titulo = 'Mi negocio de tortas fritas';
  total = 0;
  constructor(private dataServ: DataService){
  }

  ngOnInit(){
    this.dataServ.products.subscribe(resp=>{
      this.total = resp.length;
    })
  }
}
