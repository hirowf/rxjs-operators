import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  template: `
    <h3>
      A representation of any set of values over any amount of time. This is the
      most basic building block of RxJS.
    </h3>
  `,
})
export class ObservableComponent implements OnInit {
  ngOnInit(): void {
    this.initObservable();
  }

  initObservable() {
    const observable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next('string');
      subscriber.next(true);
      subscriber.next({ name: 'Gojo' });
      subscriber.complete();
    });
    const it = interval(1000);

    const subscription = observable.subscribe({
      next: (value) => console.log('observer next value', value),
      error: (error) => console.error('observer error', error),
      complete: () => console.log('observer complete'),
    });

    setTimeout(() => {
      subscription2.unsubscribe();
    }, 4000);

    subscription.unsubscribe();
    const subscription2 = it.subscribe(console.log);
  }
}
