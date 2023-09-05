import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `{{ title }}`,
})
export class AppComponent {
  title = 'rxjs-operators';
}
