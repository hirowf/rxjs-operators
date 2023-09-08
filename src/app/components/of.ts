import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  standalone: true,
  template: `<p>Of operator</p>`,
})
export class OfComponent implements OnInit {
  ngOnInit(): void {
    this.ofOperator();
  }

  showName = () => 'Jhon Doe';

  ofOperator = () => {
    const a = of([1, 2, 3, 4, 5]);
    const s = of('hello world');
    const multValue = of(
      {
        name: 'Jhon',
      },
      true,
      this.showName()
    );

    s.subscribe((v) => console.log(v));
    multValue.subscribe((v) => console.log(v));
  };
}
