import { AfterViewInit, Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "erkam"
  surname: string = "sis";
  title = 'app';

  change() {
    this.name = "burak";
    this.surname = "akkaya";
  }
 
}
