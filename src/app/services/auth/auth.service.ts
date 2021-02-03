import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiService, private router: Router) {}

  isAuthenticated(): any {
    return localStorage.getItem(environment.storageKeys.user);
  }

  setConfigClient(data: Token) {
    for (const k in data) {
      localStorage.setItem(environment.storageKeys[k], JSON.stringify(data[k]));
    }
    this.router.navigateByUrl('user/dashboard');
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
