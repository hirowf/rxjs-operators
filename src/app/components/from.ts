import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  standalone: true,
  template: `<p>From Operator</p>`,
})
export class FromComponent implements OnInit {
  ngOnInit(): void {
    this.operatorFrom();
  }

  operatorFrom = () => {
    const arr = from([1, 2, 3, 4]);
    const promisse = from(new Promise((resolve) => resolve('hello world')));
    const str = from('aeiou');

    arr.subscribe({
      next: (v) => console.log(v), // 1,2,3,4 in sequence
    });

    promisse.subscribe((r) => console.log(r)); // promisse value resolved
    str.subscribe((v) => console.log(v)); // a,e,i,o,u in sequence
  };
}
