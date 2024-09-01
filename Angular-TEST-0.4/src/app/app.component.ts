import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-TEST-0.4';
  TextBtn : string = "Mi botón";
  Counter : number = 0;
  Notas : any[] = [
    {id:1, nombres:"Juan", nota:"A"},
    {id:2, nombres:"Pedro", nota:"B"},
    {id:3, nombres:"Carlos", nota:"C"},
    {id:4, nombres:"Luis", nota:"AD"},
    {id:5, nombres:"Manuel", nota:"C"},
    {id:4, nombres:"Luis Matías", nota:"AD"},
  ];

  //Binding attribute
  ImgAngular :string = "../assets/img/angular_img.jpg";
  isDisabled: boolean = false;

  //binding style
  borderRadius : string = "10px";
  BackgroundImg : string = "background-color: red; padding: 10px; margin: 10px;";

  MostarEstadoHabilitacion(){
    this.isDisabled = this.isDisabled ? false : true;

    alert("Estado de habilitación: " + this.isDisabled);
  }

  AumentarContador(){
    this.Counter++;
  }
}
