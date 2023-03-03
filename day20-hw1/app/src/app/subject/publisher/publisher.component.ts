import { Component, OnInit } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
  });

  ngOnInit() {
    
  }
  

}
