import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'authToken';  
  private testToken = 'test-token-12345';

  constructor() { }

  isAuthenticated(): boolean {
    return sessionStorage.getItem(this.tokenKey) === this.testToken;
  }

  login(token: string): void {
    if (token === this.testToken) {  
      sessionStorage.setItem(this.tokenKey, token);  
    } else {
      console.error('Invalid token');  
    }
  }

  logout(): void {
    sessionStorage.removeItem(this.tokenKey);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.tokenKey);
  }
}
