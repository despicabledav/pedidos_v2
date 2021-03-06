import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { PedidoVenta } from '../models/pedido-venta';
import { Observable, throwError, from } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://localhost:3000/pedidoventas';
 
  constructor(private http: HttpClient) { console.log('Hello RestService Service'); }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 
 
  // Create a new item
  createItem(item): Observable<PedidoVenta> {
    return this.http
      .post<PedidoVenta>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get single pedidoventa data by ID
  getItem($id): Observable<PedidoVenta> {
    return this.http
      .get<PedidoVenta>(this.base_path + '/' + $id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get pedidosventa data
  getList(): Observable<PedidoVenta> {
    return this.http
      .get<PedidoVenta>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem($id, item): Observable<PedidoVenta> {
    return this.http
      .put<PedidoVenta>(this.base_path + '/' + $id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem($id) {
    return this.http
      .delete<PedidoVenta>(this.base_path + '/' + $id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}