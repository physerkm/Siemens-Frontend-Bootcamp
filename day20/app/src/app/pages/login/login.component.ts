import { Component } from '@angular/core';
import { UserStateService } from 'src/app/services/user-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userState: UserStateService) {}

  login() {
    this.userState.currentUser = {id: 1, name: 'Erkam', email:'erkam.sis@outlook.com'};
  }

  change() {
    this.userState.currentUser!.email = "cahitsis@gmail.com"
  }

}
