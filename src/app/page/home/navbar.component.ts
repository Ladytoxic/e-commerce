import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
<nav>
    <span>{{titulo}}</span>
    <app-search-product></app-search-product>
    <button class="btn-cart"></button>
</nav>`
})
export class NavbarComponent {
  titulo = 'Mi Negocio';
  acc = 0;
}
