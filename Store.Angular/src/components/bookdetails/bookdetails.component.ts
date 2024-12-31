import { Component, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { BookdetailService } from '../../services/bookdetails/bookdetail.service'; 
import { BookModel } from '../../models/bookmodel'
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './bookdetails.component.html',
  imports: [CommonModule],
  styleUrl: './bookdetails.component.css',
})
export class BookDetailsComponent {
  bookDetail$!: Observable<BookModel>;

  @Output() countClicked = new EventEmitter<number>();
  @Input() id: number | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookdetailService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id !== undefined) {
      this.bookDetail$ = this.bookService.getBookById(this.id);
    }
  }

  increment() {
    this.countClicked.emit();
  }
}
