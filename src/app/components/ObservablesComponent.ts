import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  template: ``,
})
export class ObservablesComponent implements OnInit {
  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('string');
      subscriber.next(true);
      subscriber.next({ name: 'João' });
      subscriber.complete();
    });

    observable.subscribe(
      {
        next: (result: unknown) => console.log(result),
      },
      (error: Error) => {
        console.log(error);
      },
      () => {
        console.log('Completou o observable!');
      }
    );
  }
}
