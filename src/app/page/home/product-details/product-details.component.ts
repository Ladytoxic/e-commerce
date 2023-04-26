import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Producto } from 'src/app/interface/product.interface';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  titulo = 'TortaFritas';
  products!: Producto[];
  img_default = 'https://www.theseasonedhome.com/content/images/thumbs/default-image_450.png'
  constructor(private titleService: Title,
    private metaService: Meta,
    private dataServ: DataService) {
    this.titleService.setTitle('Tienda online de ' + this.titulo);
    this.metaService.updateTag({ name: 'description', content: 'Tienda online de ' + this.titulo });
  }
  ngOnInit() {
    this.dataServ.getProductos().subscribe(products => {
      this.products = Object.values(products);
    });
  }
}
