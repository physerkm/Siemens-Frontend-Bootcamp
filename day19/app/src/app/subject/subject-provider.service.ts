import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubjec, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectProviderService {
  private subject;
  public observableSubject = new Observable<any>();
  constructor() {
    this.subject = new Anysc<any>();
    this.observableSubject = this.subject.asObservable();
  }
  publish(data: any) {
    this.subject.next(data);
  }
  complete() {
    this.subject.complete();
  }
}
