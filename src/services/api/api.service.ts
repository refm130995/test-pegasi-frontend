import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.URL_API_BASE;
  constructor(public http: HttpClient) {}

  async get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {};
    } else {
      reqOpts = {
        headers: new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: await environment.getToken(),
        }),
      };
    }
    // Query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (const k in params) {
        if (params[k] !== undefined) {
          reqOpts.params = reqOpts.params.append(k, params[k]);
        }
      }
    }
    return this.http.get(this.url + '/' + endpoint, reqOpts).toPromise();
  }

  async post(endpoint: string, body: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        headers: new HttpHeaders({
          Accept: 'application/json',
        }),
      };
    } else {
      reqOpts = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          Authorization: await environment.getToken(),
        }),
      };
    }
    return this.http.post(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts).toPromise();
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts).toPromise();
  }
}
