import { Component, OnInit } from '@angular/core';
import { BookService, BookModel } from '../services/book.service';
import { CommonModule } from '@angular/common';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: '../components/components.component.html',
  imports: [CommonModule],
  styleUrl: '../components/components.component.css'
})
export class BookPageComponent implements OnInit {
  bookModelData: BookModel[] = []; 

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.bookService.getMyModelData().subscribe({
      next: (data) => (this.bookModelData = data),
      error: (err) => console.error('Error loading data:', err),
    });
  }
}
