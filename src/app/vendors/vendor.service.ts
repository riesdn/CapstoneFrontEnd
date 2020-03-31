import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendor } from './vendor.class';
import { Observable } from 'rxjs';

const url: string = "http://localhost:51764/api/Vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<Vendor[]> {
    return this.http.get(`${url}`) as Observable<Vendor[]>;
  }

  get(id: any): Observable<Vendor> {
    return this.http.get(`${url}/${id}`) as Observable<Vendor>;
  }
  
  check(code: any): Observable<Vendor> {
    return this.http.get(`${url}/check/${code}`) as Observable<Vendor>;
  }

  update(vendor: Vendor): Observable<any> {
    return this.http.put(`${url}/${vendor.id}`, vendor) as Observable<any>;
  }

  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${url}`, vendor) as Observable<Vendor>;
  }

  remove(vendor: Vendor): Observable<any> {
    return this.http.delete(`${url}/${vendor.id}`) as Observable<any>;
  }
  constructor(private http: HttpClient) { }
}
