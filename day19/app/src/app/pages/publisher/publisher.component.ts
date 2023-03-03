import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {
  ngOnInit(): void{}
  mySelectMenu: NgModel | undefined;
  change(data: any) {
    console.log(data);
  }
}
