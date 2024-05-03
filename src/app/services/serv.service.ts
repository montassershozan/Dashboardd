import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  constructor(private _HttpClient: HttpClient) {}
  GetDta(numPg: any): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users?page=${numPg}`)
  }
}