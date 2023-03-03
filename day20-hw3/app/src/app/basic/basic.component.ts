import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  profileForm = new FormGroup({
    firstName = new FormControl(''),
    lastName = new FormControl(''),
    price = new FormControl(''),
    category = new FormControl('')
  })
});

}
