import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

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

  constructor(private router: Router, private authService: AuthService,) { }

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
    this.closeComponents();
    this.router.navigate(['/create-book']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
