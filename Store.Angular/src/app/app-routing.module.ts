import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from '../components/books/books.component';
import { BookDetailsComponent } from '../components/bookdetails/bookdetails.component';
import { CreateBookComponent } from '../components/createbook/createbook.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  { path: 'books', component: BookPageComponent, loadChildren: () => import('../modules/getbooks.module').then(m => m.GetBookModule) },
  { path: 'book-detail/:id', component: BookDetailsComponent },
  { path: 'create-book', component: CreateBookComponent, canActivate: [AuthGuard], loadChildren: () => import('../modules/createbook.module').then(m => m.CreateBookModule) },
  { path: 'login', component: LoginComponent, loadChildren: () => import('../modules/auth.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
