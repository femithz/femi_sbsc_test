import { Injectable, resolveForwardRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const api_url = "https://604a2d3b9251e100177ce1ae.mockapi.io/api/v2/dashboard";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
          constructor(private _http: HttpClient) { }
          // Function To data
          getInfo() {
            return this._http.get(`${api_url}`,   {
              observe: 'body',
              headers: new HttpHeaders().append('Content-Type', 'application/json')
            });
          }
}
