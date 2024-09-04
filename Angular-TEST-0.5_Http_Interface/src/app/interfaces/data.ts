import { NumberSymbol } from "@angular/common";

export interface Data {
}

interface Alternativas{
  nombre : string;
  popularidad : number;
}

export interface Lenguajes{
  id : number;
  nombre : string;
  paradigma: string;
  dificultad : string;
  caracteristicas : string[];
  popularidad : number;
  versiones : number[];
  activo : boolean;
  alternativas : Alternativas[] | null;
}

interface Habilidades{
  habilidad : string;
  nivel : string;
}

interface Profesor{
  nombre : string;
  experiencia : string;
  habilidades : Habilidades[];
}

export interface Cursos{
  id : number;
  nombre : string;
  lenguaje : string;
  duracion : string;
  nivel : string;
  profesor : Profesor;
  recursos : string[];
}

interface Desempeno{
  cursoId : number;
  nota : number;
  asistencias : number;
  completado : boolean;
}

interface Calificaciones{
  [cursoId : number] : string;
}

export interface Estudiantes{
  id : number;
  nombre : string;
  edad : number;
  cursosInscritos :number[];
  calificaciones : Calificaciones;
  desempeno : Desempeno[];

}
