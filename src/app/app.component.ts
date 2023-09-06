import { Component } from '@angular/core';
import { ObservableComponent } from './components/observables';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
    <app-observable />
  `,
  imports: [ObservableComponent],
})
export class AppComponent {
  title = 'rxjs-operators';
}
