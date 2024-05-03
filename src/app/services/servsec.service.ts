import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServSecService {
  constructor(private _HttpClient: HttpClient) {}
  GetDta(user: any): Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users/${user}`);
  }
}
