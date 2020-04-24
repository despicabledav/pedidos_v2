import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LineaArticulo } from '../models/linea-articulo';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LineaarticuloService {

  // API path
  base_path = 'https://localhost:44381/api/saLineaArticulos';
 
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
  createItem(item): Observable<LineaArticulo> {
    return this.http
      .post<LineaArticulo>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get single student data by ID
  getItem($id): Observable<LineaArticulo> {
    return this.http
      .get<LineaArticulo>(this.base_path + '/' + $id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get students data
  getList(): Observable<LineaArticulo> {
    return this.http
      .get<LineaArticulo>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getListByID() {
    return this.http
      .get(this.base_path)
      .pipe(
        map((res: any) => {
          console.log("Before mapping: ", res);
          return res.data.children.filter(post => {
            return post.data.co_lin == "1001";
          });
        })
      );
  }
 
  // Update item by id
  updateItem($id, item): Observable<LineaArticulo> {
    return this.http
      .put<LineaArticulo>(this.base_path + '/' + $id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem($id) {
    return this.http
      .delete<LineaArticulo>(this.base_path + '/' + $id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}
