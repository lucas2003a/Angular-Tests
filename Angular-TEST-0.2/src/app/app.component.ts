import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-TEST-0.2';
  students: any[] = [];

  LoginForm : FormGroup = new FormGroup({
    email :  new FormControl('', [Validators.required, Validators.email]),
    password : new  FormControl('', Validators.required)
  });

  DeleteStudent(index: number){
    this.students.splice(index,1);
  }
  OnSubmit(){
    console.log(this.LoginForm.valid);  // => ¿La validación formulario es válida? (true o false)
    console.log(this.LoginForm.invalid);  // => ¿La validación de formulario es invalida? (true o false)
    console.log(this.LoginForm.value);  // => Valores ingresados en el formulario

    if(this.LoginForm.invalid){

      if(this.LoginForm.get("email")?.errors){

        let error = this.LoginForm.get("email")?.errors;

        if(error?.["required"]){
          alert("El campo email es requerido");
        }else if(error?.["email"]){
          alert("El campo email debe ser un correo electrónico");
        }
      }else if (this.LoginForm.get("password")?.errors){
        let error = this.LoginForm.get("password")?.errors;

        if(error?.["required"]){
          alert("El campo password es requerido");
        }
      }else{
        alert("Completa el formulario");
      }
      return;
    }

    alert("Formulario validado");
    this.students.push(this.LoginForm.value);
  }
}
