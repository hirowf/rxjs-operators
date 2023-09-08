import { Component } from '@angular/core';
import { ObservableComponent, SubjectComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <!-- <app-observable /> -->
    <app-subject />
  `,
  imports: [ObservableComponent, SubjectComponent],
})
export class AppComponent {
  title = 'rxjs-operators';
}
