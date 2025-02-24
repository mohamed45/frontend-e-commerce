import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}
export interface Products {
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
  }
  
  export interface Product {
    id?: number;
    price: string;
    name: string;
    image: string;
    rating: number;
  }
  
  export interface PaginationParams {
    [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
  }



  // get<T>(url: string, options: Options): Observable<T> {
  //   const urle = `${this.apiUrl}${url}`;
  //   return this.httpClient.get<T>(urle, options) as Observable<T>;
  // }