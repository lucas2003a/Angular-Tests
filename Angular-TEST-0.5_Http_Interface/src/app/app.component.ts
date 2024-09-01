import { Post } from './interfaces/post';
import { MessagesService } from './services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages : string[] = [];
  posts: any[] = [];

  constructor(private MessagesService : MessagesService) {
    this.messages = this.MessagesService.GetMessages();
  }

  ngOnInit(){
    this.MessagesService.GetPosts().subscribe({
      next: (response : Post[]) =>{
        this.posts = response;
      },
      error : error =>{
        console.error(error);
      },
      complete : () =>{
        console.log(this.posts);
      }
    })
  }
  title = 'Angular-TEST-0.5_Http_Interface';
}
