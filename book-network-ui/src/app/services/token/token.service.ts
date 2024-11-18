import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  get token(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  set token(value: string | null) {
    if (typeof window !== 'undefined') {
      if (value) {
        localStorage.setItem('token', value);
      } else {
        localStorage.removeItem('token');
      }
    }
  }
}
