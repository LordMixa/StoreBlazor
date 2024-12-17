import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface BookModel {
  id: number;
  title: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://localhost:7056/api/books'; 

  constructor(private http: HttpClient) { }

  getMyModelData(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.apiUrl);
  }
}
