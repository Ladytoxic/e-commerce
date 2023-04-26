import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  titulo = 'TortaFritas';
  constructor(private titleService: Title,
    private metaService: Meta) {
    this.titleService.setTitle('Tienda online de ' + this.titulo);
    this.metaService.updateTag({ name: 'description', content: 'Tienda online de ' + this.titulo });
  }
}
