import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'Store.Angular';
  counter: number = 0;
  showBook: boolean = false;
  showBookDetail: boolean = false;
  idOpenBookDetail: number = 0;

  onCounterChanged() {
    this.counter++;
  }

  toggleChildComponent() {
    this.showBook = !this.showBook; 
  }

  openBookDetailPage(id: number) {
    this.showBook = false;
    this.idOpenBookDetail = id;
    this.showBookDetail = true;
  }
}
