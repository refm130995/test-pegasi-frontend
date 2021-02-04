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
    return localStorage.getItem('token');
  }

  getUserData(): Promise<any> {
    return this.api.get('user/loggedin', null, true);
  }

  setConfigClient(data: Token) {
    for (const k in data) {
      localStorage.setItem(k, JSON.stringify(data[k]));
    }
    this.router.navigateByUrl('user/dashboard');
  }

  signIn(params: any): Promise<any> {
    return this.api.post('user/login', params);
  }

  signUp(params: any): Promise<any> {
    return this.api.post('user/register', params);
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
