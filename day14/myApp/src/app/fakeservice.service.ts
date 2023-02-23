import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './models/post';
import { from, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FakeserviceService {

  constructor(private httpClient:HttpClient) {}

  getPost() {

    let userId = 1;

    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts").pipe(switchMap(x=>from(x)), map(x=>`${x.id}-${x.title}`))
  }

  getPostGood() {

    let userId = 1;

    const params = new HttpParams()
    .set('userId', '1')
    .set('abc', 'abc');

    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts").pipe(switchMap(x => from(x)), map(x => `${x.id}-${x.title}`))
  }
}