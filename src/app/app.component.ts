import { Component } from '@angular/core';

@Component({
  selector: 'nic-root',
  template: `
  <h1>
    {{title}}
  </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'nic works!';
}
