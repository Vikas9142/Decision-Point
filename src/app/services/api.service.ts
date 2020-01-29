import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  userList = function() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  };

  userPost = function(param) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + param);
  };
}
