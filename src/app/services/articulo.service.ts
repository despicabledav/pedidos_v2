import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Articulos } from '../models/articulos';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  // API path
  base_path = 'https://localhost:44381/api/saArticulos';
 
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
  createItem(item): Observable<Articulos> {
    return this.http
      .post<Articulos>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get single student data by ID
  getItem($id): Observable<Articulos> {
    return this.http
      .get<Articulos>(this.base_path + '/' + $id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get students data
  getList(): Observable<Articulos> {
    return this.http
      .get<Articulos>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Update item by id
  updateItem($id, item): Observable<Articulos> {
    return this.http
      .put<Articulos>(this.base_path + '/' + $id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem($id) {
    return this.http
      .delete<Articulos>(this.base_path + '/' + $id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
