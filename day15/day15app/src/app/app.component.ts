import { Component } from '@angular/core';
import { filter, find, first, from, interval, map, Observable, of, range, take, takeLast, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { FakeserviceService } from './fakeservice.service';

interface product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day15app';

  constructor(private fakeService: FakeserviceService) {
    // this.fakeService.getParallelWithForkJoinOperator().subscribe(x=>console.log(x.posts))
    this.fakeService.getPostsWithUserId(1).subscribe(x => {
      console.log(x)
    })
    
    //this.fakeService.getPostsWithUserId(1).subscribe(x => {
    //  console.log(x)
    // })

    // this.fakeService.UpdatePut({id:1, title:'title 1',body:'body 1', userId:2}).subscribe({
    //  next:(data)=>console.log(data),
    //  error:(err)=> console.log(err.message),
    //  complete:()=>console.log("Completed!")
      
    //  })


    // this.fakeService.SavePostWithError({id:1, title:'title 1',body:'body 1', userId:2}).subscribe({
    // next:(data)=>console.log(data),
    // error:(err)=> console.log(err.message),
    // complete:()=>console.log("tamamalandı.")

    // })

    // this.fakeService.GetPostsWithHeader().subscribe(x=>{
    //  console.log(x);
    // })
  }
}