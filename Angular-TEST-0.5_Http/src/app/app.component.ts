import { MessagesService } from './services/messages.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  messages : string[] = [];
  posts: any[] = [];

  constructor(private MessagesService: MessagesService) {
    this.messages = this.MessagesService.getMessages();
  }

  /*
    Forma 1 de obtener los datos con subscribe
    ngOnInit(){
    this.MessagesService.getPosts().subscribe(
      response =>{
      this.posts = response;
    }, error =>{
      console.error(error);
    });
  } */

  //Forma 2 de obtener los datos con subscribe
  ngOnInit(){
    this.MessagesService.getPosts().subscribe(
    {
      next: response =>{
        this.posts = response;
      },
      error: error =>{
        console.error(error);
      },
      complete : ()=>{
        console.log(this.posts);
        console.log("Complete");
      }
    });
  }
  title = 'Angular-TEST-0.5_Http';
}
