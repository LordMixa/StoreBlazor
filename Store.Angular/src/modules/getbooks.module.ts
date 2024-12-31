import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from '../components/books/books.component';
import { BookDetailsComponent } from '../components/bookdetails/bookdetails.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BookPageComponent,
    BookDetailsComponent
  ],
  exports: [
    BookPageComponent,
    BookDetailsComponent
  ] 
})
export class GetBookModule { }
