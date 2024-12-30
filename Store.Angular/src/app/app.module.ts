import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookPageComponent } from './components/books/books.component';
import { BookDetailsComponent } from './components/bookdetails/bookdetails.component';
import { CreateBookComponent } from './components/createbook/createbook.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BookPageComponent,
    BookDetailsComponent,
    CommonModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
