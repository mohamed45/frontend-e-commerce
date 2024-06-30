// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Options, Product } from '../../types';
// import { Environment } from '../../environments/environment.prod';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   constructor(private httpClient: HttpClient) {}

//   private apiUrl =Environment.apiUrl;
//   // Used to make a GET request to the API
//   get<T>(endpoint: string, options: Options): Observable<T> {
//     const url=`${this.apiUrl}${endpoint}`
//     return this.httpClient.get<T>(url, options) as Observable<T>;
//   }

//   post<T>(endpoint: string, body: Product, options: any): Observable<T> {
//     const url=`${this.apiUrl}${endpoint}`
//     return this.httpClient.post<T>(url, body, options) as Observable<T>;
//   }
//   put<T>(endpoint: string, body: Product, options: any): Observable<T> {
//     const url=`${this.apiUrl}${endpoint}`
//     return this.httpClient.put<T>(url, body, options) as Observable<T>;
//   }
//   delete<T>(endpoint: string, options: any): Observable<T> {
//     const url=`${this.apiUrl}${endpoint}`
//     return this.httpClient.delete<T>(url, options) as Observable<T>;
//   }
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options, Product } from '../../types';
import { Environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = Environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  get<T>(endpoint: string, options: Options): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  post<T>(endpoint: string, body: Product, options: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
  }

  put<T>(endpoint: string, body: Product, options: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    return this.httpClient.put<T>(url, body, options) as Observable<T>;
  }

  delete<T>(endpoint: string, options: any): Observable<T> {
    const url = `${this.apiUrl}${endpoint}`;
    return this.httpClient.delete<T>(url, options) as Observable<T>;
  }
}
