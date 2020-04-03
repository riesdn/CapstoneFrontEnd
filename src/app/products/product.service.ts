import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class';

const url: string = "http://localhost:51764/api/Products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list(): Observable<Product[]> {
    return this.http.get(`${url}`) as Observable<Product[]>;
  }

  get(id: any): Observable<Product> {
    return this.http.get(`${url}/${id}`) as Observable<Product>;
  }

  check(partNbr: any): Observable<Product> {
    return this.http.get(`${url}/check/${partNbr}`) as Observable<Product>;
  }

  update(product: Product): Observable<any> {
    return this.http.put(`${url}/${product.id}`, product) as Observable<any>;
  }

  create(product: Product): Observable<Product> {
    return this.http.post(`${url}`, product) as Observable<Product>;
  }

  remove(product: Product): Observable<any> {
    return this.http.delete(`${url}/${product.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
