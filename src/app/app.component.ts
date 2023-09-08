import { Component } from '@angular/core';
import {
  FromComponent,
  ObservableComponent,
  SubjectComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <!-- <app-observable /> -->
    <!-- <app-subject /> -->
    <app-from />
  `,
  imports: [ObservableComponent, SubjectComponent, FromComponent],
})
export class AppComponent {
  title = 'rxjs-operators';
}
