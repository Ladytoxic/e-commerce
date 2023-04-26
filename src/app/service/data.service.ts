import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cartProducts: Producto[] = [];
  private _products: BehaviorSubject<Producto[]>;

  constructor(private http: HttpClient) {
    this._products = new BehaviorSubject<Producto[]>([]);
  }

  get products(){
    return this._products.asObservable();
  }

  addNewProduct(producto: Producto) {
    this.cartProducts.push(producto);
    this._products.next(this.cartProducts);
  }

  getProductos(): Observable<Producto[]> {
    const URL = './assets/data.json';
    return this.http.get<Producto[]>(URL);
  }

  deleteProduct(index: number){
    this.cartProducts.splice(index, 1);
    this._products.next(this.cartProducts);
  }
}
