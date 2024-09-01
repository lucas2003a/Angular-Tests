import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }

  getMessages() {

    return ['message 1', 'message 2', 'message 3'];
  }

  getPosts() : Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
