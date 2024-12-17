import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../../models/bookmodel'

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:7056/api/books'; 

  constructor(private http: HttpClient) { }

  GetBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.apiUrl);
  }
}
