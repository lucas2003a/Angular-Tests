import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-TEST-0.5_Pipes';

  today : number = Date.now();

  currency: number = 1.3465;
}
