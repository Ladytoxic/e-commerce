import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
<nav>
    <span>{{titulo}}</span>
    <app-search-product></app-search-product>
    <div class="cart">
      <button class="btn-cart"></button>
      <span class="acc_total">{{ total }}</span>
    </div>
</nav>`
})
export class NavbarComponent {
  titulo = 'Mi negocio de tortas fritas';
  total = 0;
}
