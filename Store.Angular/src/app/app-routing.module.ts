import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './components/books/books.component';
import { BookDetailsComponent } from './components/bookdetails/bookdetails.component';
import { CreateBookComponent } from './components/createbook/createbook.component';

const routes: Routes = [
  { path: 'book', component: BookPageComponent },
  { path: 'book-detail/:id', component: BookDetailsComponent },
  { path: 'create-book', component: CreateBookComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
