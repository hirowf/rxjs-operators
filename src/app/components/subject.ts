import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  template: `<p>Subject & Behavior Subject</p>`,
})
export class SubjectComponent implements OnInit {
  ngOnInit(): void {
    this.initSubject();
  }

  initSubject = () => {
    const subject = new Subject<number>();
    const subject2 = new BehaviorSubject<number>(0);

    subject2.subscribe({
      next: (v) => console.log(v), // shows the last value of our Behavior
    });

    subject.next(10);
    subject2.next(12);
  };
}
