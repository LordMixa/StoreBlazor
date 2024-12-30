import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookCreateModel } from '../../models/bookcreatemodel'

@Injectable({
  providedIn: 'root'
})
export class BookCreateService {
  private apiUrl = 'https://localhost:7056/api/books';

  constructor(private http: HttpClient) { }

  CreateBook(bookModel: BookCreateModel): Observable<number>{
    return this.http.post<number>(this.apiUrl, bookModel);
  }
}
