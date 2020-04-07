import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

const url: string = "http://localhost:51764/api/RequestLines";

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  list(requestId: any): Observable<Requestline[]> {
    return this.http.get(`${url}/list/${requestId}`) as Observable<Requestline[]>;
  }

  get(id: any): Observable<Requestline> {
    return this.http.get(`${url}/${id}`) as Observable<Requestline>;
  }

  update(requestLine: Requestline): Observable<any> {
    return this.http.put(`${url}/${requestLine.id}`, requestLine) as Observable<any>;
  }

  create(requestLine: Requestline): Observable<Requestline> {
    return this.http.post(`${url}`, requestLine) as Observable<Requestline>;
  }

  remove(requestLine: Requestline): Observable<any> {
    return this.http.delete(`${url}/${requestLine.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
