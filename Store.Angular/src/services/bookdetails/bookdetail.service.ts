import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../../models/bookmodel'

@Injectable({
  providedIn: 'root'
})
export class BookdetailService {

  private apiUrl = 'https://localhost:7056/api/books';

  constructor(private http: HttpClient) { }

  getBookById(id: number): Observable<BookModel> {
    return this.http.get<BookModel>(`${this.apiUrl}/${id}`);
  }
}
