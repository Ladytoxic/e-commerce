import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getProductos(): Observable<Producto[]> {
    const URL = './assets/data.json';
    return this.http.get<Producto[]>(URL);
  }
}
