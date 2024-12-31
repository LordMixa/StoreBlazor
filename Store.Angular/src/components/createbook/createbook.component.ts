import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookCreateService } from '../../services/bookcreate/bookcreate.service';
import { BookCreateModel } from '../../models/bookcreatemodel';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-book',
  standalone: false,
  templateUrl: './createbook.component.html',
  styleUrl: './createbook.component.css'
})
export class CreateBookComponent {
  bookForm: FormGroup;
  observable: Observable<number> | undefined;
  bookId: number | null = null;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private bookCreateService: BookCreateService) {

    this.bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.minLength(3)],
      price: ['', [Validators.required, Validators.min(1), Validators.max(1000)]],
      dateOfPublication: ['', [Validators.required, Validators.min(new Date('868-02-01').getTime()), Validators.max(new Date().getFullYear())]] 
    });
  }

  submitForm() {
    if (this.bookForm.valid) {
      const book: BookCreateModel = new BookCreateModel(
        this.bookForm.value.title,
        this.bookForm.value.description,
        this.bookForm.value.price,
        new Date(this.bookForm.value.dateOfPublication)
      );

      this.observable = this.bookCreateService.CreateBook(book);  
      this.observable.subscribe({
        next: (bookId) => {
          this.bookId = bookId;  
        },
        error: (err) => {
          this.errorMessage = 'Error creating book: ' + err;  
        }
      });
    }
  }
}
