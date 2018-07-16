import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { BookModule } from './Model/BookModule';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  URLRESTAPI = 'http://localhost:3000/books';
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getdataFormRestAPI(): Observable<BookModule[]> {
    return this.http.get<BookModule[]>(this.URLRESTAPI, this.httpOption).pipe(
      tap(result => console.log(result)),
      catchError(err => of([]))
    );
  }
  AdddataToRESTAPI(book: Object): Observable<BookModule[]> {
    return this.http.post<BookModule[]>(this.URLRESTAPI, book, this.httpOption).pipe(
      tap(result => console.log('Da nap du lieu thanh cong'))
    );
  }
  RemoveToRESTAPI(id: string): Observable<BookModule> {
    return this.http.delete<BookModule>(this.URLRESTAPI + "/" + id, this.httpOption).pipe(
      tap(result => console.log('xoa du lieu thanh cong'))
    )
  }
}
