import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  showBookCreate: boolean = false;
  idOpenBookDetail: number = 0;

  constructor(private router: Router) { }

  onCounterChanged() {
    this.counter++;
  }

  toggleChildGetBooksComponent() {
    this.navigateMain();
    this.showBook = !this.showBook; 
  }

  openBookDetailPage(id: number) {
    this.navigateMain();
    this.showBook = false;
    this.idOpenBookDetail = id;
    this.showBookDetail = true;
  }

  closeComponents() {
    this.showBook = false;
    this.showBookDetail = false;
  }

  navigateMain() {
    this.router.navigate(['/']);
  }

  togglerCreateBookComponent(): void {
    this.showBookCreate = !this.showBookCreate;
    if (this.showBookCreate) {
      this.closeComponents();
      this.router.navigate(['/create-book']);
    } else {
      this.navigateMain();
    }
  }
}
