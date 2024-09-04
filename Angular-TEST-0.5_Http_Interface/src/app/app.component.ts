import { Post } from './interfaces/post';
import { Cursos, Data, Estudiantes } from './interfaces/data';
import { Lenguajes } from './interfaces/data';
import { MessagesService } from './services/messages.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular-TEST-0.5_Http_Interface';

  LenguajesCargados : boolean = false;
  CursosCargados : boolean = false;
  EstudiantesCargados : boolean = false;

  lenguajes : Lenguajes[] = [];
  cursos : Cursos[] = [];
  estudiantes : Estudiantes[] = [];

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
        console.log("Publicaciones cargadas");
      }
    })
  }

  ObtenerLenguajes(){
    this.MessagesService.GetLanguages().subscribe(
      {
        next: (response : Lenguajes[]) =>{
          this.lenguajes = response;
        },
        error : err => {
          console.error(err);
        },
        complete : () =>{
          console.log("Complete");
        }
      }
    )
  }

  ResetVariables(){
    this.LenguajesCargados = false;
    this.CursosCargados = false;
    this.EstudiantesCargados = false;
  }

  ObtenerCursos(){
    this.MessagesService.GetCourses().subscribe({
      next: (response : Cursos[]) =>{
        this.cursos = response;
      },
      error : err =>{
        console.error(err);
      },
      complete : () =>{
        console.log("Cursos Cargados");
      }
    })
  }
  ObtenerEstudiantes(){
    this.MessagesService.GetStudents().subscribe({
      next : (response : Estudiantes[]) =>{
        this.estudiantes = response;
      },
      error : err =>{
        console.error(err);
      }, complete : () =>{
        console.log("Estudiantes Cargados");
      }
    })
  }
  CargarCursos(){
    if(this.CursosCargados){
      return;
    }
    
    this.ResetVariables();
    this.CursosCargados = true;
    this.ObtenerCursos();
  }
  CargarLenguajes(){

    if(this.LenguajesCargados){
      return;
    }

    this.ResetVariables();
    this.LenguajesCargados = true;
    this.ObtenerLenguajes();
  }
  CargarEstudiantes(){

    if(this.EstudiantesCargados){
      return;
    }

    this.ResetVariables();
    this.EstudiantesCargados = true;
    this.ObtenerEstudiantes();
  }
}
