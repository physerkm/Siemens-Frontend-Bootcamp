import { Component } from '@angular/core';
import { SubjectProviderService } from '../subject-provider.service';

@Component({
  selector: 'app-subscriber1',
  templateUrl: './subscriber1.component.html',
  styleUrls: ['./subscriber1.component.css']
})
export class Subscriber1Component {  
  constructor(private subjectProviderService: SubjectProviderService) {
    this.subjectProviderService.mysubject.subscribe({
      next: (data) => console.log("subscriber1", data),
      complete: () => console.log("Data yayınlama sona ermiş subscriber1"),
      error: (err) => { console.log(err) }

    })
  }

}
