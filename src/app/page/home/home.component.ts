import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template:`
  <app-navbar></app-navbar>
  <app-hero></app-hero>
  <main>
    <app-product-list></app-product-list>
    <app-shopping-cart></app-shopping-cart>
  </main>
  <app-footer></app-footer>`
})
export class HomeComponent {

  constructor(private titleService: Title,
    private metaService: Meta) {
    this.titleService.setTitle('HOME');
    this.metaService.updateTag({ name: 'description', content: 'Nueva descripción de la página' });
  }
}
