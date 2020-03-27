import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const url: string = "http://localhost:51764/api/Users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]> {
    return this.http.get(`${url}`) as Observable<User[]>;
  }

  get(id: any): Observable<User> {
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }

  update(user: User): Observable<any> {
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  }

  create(user: User): Observable<User> {
    return this.http.post(`${url}`, user) as Observable<User>;
  }

  remove(user: User): Observable<any> {
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  }

  constructor(private http: HttpClient) { }
}
