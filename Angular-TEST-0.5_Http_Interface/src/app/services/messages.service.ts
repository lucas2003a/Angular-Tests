import { Post } from './../interfaces/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http : HttpClient) { }

  GetMessages(){
    return ['message 1', 'message 2', 'message 3'];
  }

  GetPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }
}
