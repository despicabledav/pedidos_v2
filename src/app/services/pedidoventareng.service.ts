import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Pedidoventareng } from '../models/pedidoventareng';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoventarengService {

  // API path
  base_path = 'https://localhost:44381/api/sapedidoventarengs';
 
  constructor(private http: HttpClient) { }
 
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
  createItem(item): Observable<Pedidoventareng> {
    return this.http
      .post<Pedidoventareng>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get single student data by ID
  getItem($id): Observable<Pedidoventareng> {
    return this.http
      .get<Pedidoventareng>(this.base_path + '/' + $id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get students data
  getList(): Observable<Pedidoventareng> {
    return this.http
      .get<Pedidoventareng>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem($id, item): Observable<Pedidoventareng> {
    return this.http
      .put<Pedidoventareng>(this.base_path + '/' + $id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem($id) {
    return this.http
      .delete<Pedidoventareng>(this.base_path + '/' + $id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
