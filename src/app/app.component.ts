import { Component } from '@angular/core';
import {
  FromComponent,
  ObservableComponent,
  OfComponent,
  SubjectComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <!-- <app-observable /> -->
    <!-- <app-subject /> -->
    <!-- <app-from /> -->
    <app-of />
  `,
  imports: [ObservableComponent, SubjectComponent, FromComponent, OfComponent],
})
export class AppComponent {
  title = 'rxjs-operators';
}
