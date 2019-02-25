import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  private url: string;
  private httpOptions: object;
  // tslint:disable-next-line:max-line-length
  private token = '';

  constructor(private http: HttpClient) {
    console.log('service-construtor');
  }

  build(url) {
    this.url = `http://127.0.0.1:8000/api/v1/${url}`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${window.localStorage.getItem('token')}`
      })
    };
    return this;
  }

  list(page = null) {
    let url = this.url;
    if (page) {
      url = `${this.url}?page=${page}`;
    }
    return this.http.get(url, this.httpOptions);
  }
  search(term, page = 1) {
    let url = `${this.url}?q=${term}`;
    if (page) {
      url += `&page=${page}`;
    }

    return this.http.get(url, this.httpOptions);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  get(id) {
    return this.http.get(`${this.url}/${id}`, this.httpOptions);
  }

  update(id, data) {
    return this.http.put(`${this.url}/${id}`, data, this.httpOptions);
  }

  create(data) {
    return this.http.post(this.url, data, this.httpOptions);
  }

  login() {
    let url = `http://127.0.0.1:8000/oauth/authorize?`;

    url += `client_id=3&`;
    url += `redirect_uri=http://localhost:4200/users&`;
    url += `response_type=token&`;
    url += `scope=`;

    window.location.href = url;
  }

}
