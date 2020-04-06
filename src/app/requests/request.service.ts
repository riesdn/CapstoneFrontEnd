import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';
import { SystemService } from '../system/system.service';

const url: string = "http://localhost:51764/api/Requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  // REQUEST REVIEW METHODS
  reviewList(): Observable<Request[]> {
    return this.http.get(`${url}/review/${this.sys.loggedInUser.id}`) as Observable<Request[]>;
  }

  setToReview(request: Request): Observable<any> {
    return this.http.put(`${url}/review/${request.id}`, request) as Observable<any>;
  }

  reject(request: Request): Observable<any> {
    return this.http.put(`${url}/reject/${request.id}/${request.rejectionReason}`, request) as Observable<any>;
  }

  approve(request: Request): Observable<any> {
    return this.http.put(`${url}/approve/${request.id}`, request) as Observable<any>;
  }

  // GENERAL METHODS
  list(): Observable<Request[]> {
    return this.http.get(`${url}`) as Observable<Request[]>;
  }

  get(id: any): Observable<Request> {
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  }

  update(request: Request): Observable<any> {
    return this.http.put(`${url}/${request.id}`, request) as Observable<any>;
  }

  create(request: Request): Observable<Request> {
    return this.http.post(`${url}`, request) as Observable<Request>;
  }

  remove(request: Request): Observable<any> {
    return this.http.delete(`${url}/${request.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient,
    private sys: SystemService
  ) { }
}
