import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../../services/books/book.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BookModel } from '../../models/bookmodel'
import { BookDetailsComponent } from '../../components/bookdetails/bookdetails.component'

@Component({
  selector: 'app-book-page',
  templateUrl: './books.component.html',
  imports: [CommonModule],
  styleUrl: './books.component.css'
})
export class BookPageComponent implements OnInit {
  bookModelData: BookModel[] = []; 

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.bookService.GetBooks().subscribe({
      next: (data) => (this.bookModelData = data),
      error: (err) => console.error('Error loading data:', err),
    });
  }

  onItemClick(id: number): void {
    this.openBookDetail.emit(id);
  }

  @Output() openBookDetail = new EventEmitter<number>();

}
