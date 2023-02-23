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
  title = 'myApp';

  constructor(private fakeService:FakeserviceService) {
    this.fakeService.getPostGood().subscribe(x=> {
      console.log(x);
    })

    // FILTER OPERATOR
    // FIRST OPERATOR

    var fromOperator = from([10, 20, 30, 40, 50, 60, 70]);

    var fromOperatorByProduct = from([
      { id: 1, name: 'pencil 1', price: 100 },
      { id: 2, name: 'pencil 2', price: 200 },
      { id: 3, name: 'pencil 3', price: 300 }
    ])

    // MAP
    fromOperator.pipe(map(x=>x*2)).subscribe(x=>{
      console.log(x);
    })


    // fromOperator.pipe(first()).subscribe(x => {
    //   console.log(x);
    // })

    // FIND
    // fromOperatorByProduct.pipe(find(x => x.id==2)).subscribe(x => {
    //   console.log(x)
    // })

    // FILTER
    // fromOperatorByProduct.pipe(filter(x => x.id >= 2)).subscribe(x => {
    //   console.log(x)
    // })

    // TAKE
    // fromOperatorByProduct.pipe(take(2)).subscribe(x => {
    //   console.log(x)
    // })
    
    //TAKELAST
    fromOperatorByProduct.pipe(takeLast(2)).subscribe(x => {
      console.log(x)
    })


    // Create Observable
    // let myObservable = Observable.create((observer: any) => {
    //   observer.next('Hey guys!');
    //   observer.next('Hey guys! 2');
    //   observer.next('Hey guys! 3');
    //   observer.complete();
    // })

    // myObservable.subscribe((x: any) => {
    //   console.log(x);
    // })

    // myObservable.subscribe({
    //   next: (value: any) => console.log(value),
    //   error: (err: Error) => { console.log(err) },
    //   complete: () => { console.log("data alma işlemi tamamlandı.") }
    // })



    //Ajax
    // ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").subscribe(x => {
    //   console.log(x);
    // })

    //range
    // range(1,20).subscribe(x=>{
    //   console.log(x);
    // })

    //timer
    // timer(5000).subscribe(x=>{
    //   console.log(x);

    //   alert("kampanay var");
    // })

    //Of
    // let ofOperator = of(1, 2, 3, 4, 5);
    // ofOperator.subscribe(x => {
    //   console.log(x)

    // })
    //interval
    // interval(1000).subscribe(x=>{
    //   console.log(x);
    // })

  }
}