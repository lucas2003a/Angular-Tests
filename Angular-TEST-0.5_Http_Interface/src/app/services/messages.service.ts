import { Post } from './../interfaces/post';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Data, Estudiantes } from '../interfaces/data';
import { Lenguajes } from '../interfaces/data';
import { Cursos } from '../interfaces/data';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private url = "https://jsonplaceholder.typicode.com/posts";
  private UrlBase = "http://localhost:11111/";
  constructor(private http : HttpClient) { }

  GetMessages(){
    return ['message 1', 'message 2', 'message 3'];
  }

  GetPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.url);
  }

  GetLanguages() : Observable<Lenguajes[]>{
    const UrlConsulta =  `${this.UrlBase}lenguajes`;
    return this.http.get<Lenguajes[]>(UrlConsulta);
  }

  GetCourses(): Observable<Cursos[]>{
    const UrlCosulta = `${this.UrlBase}cursos`;
    return this.http.get<Cursos[]>(UrlCosulta);
  }

  GetStudents() : Observable<Estudiantes[]>{
    const UrlConsulta = `${this.UrlBase}estudiantes`;
    return this.http.get<Estudiantes[]>(UrlConsulta);
  }
}

//Esto seria la api
//Mejor dicho aqui es done conecto con la api
//y obtener los datos
