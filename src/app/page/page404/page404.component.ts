import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page404',
  template: `
  <div class="page404">
  <h2>404</h2>
  <span>Not Found</span>
  </div>`,
  styleUrls: ['./page404.component.scss']
})
export class Page404Component {
  constructor(private titleService: Title,
    private metaService: Meta) {
    this.titleService.setTitle('404 Not Found');
    this.metaService.updateTag({ name: 'description', content: 'Not Found' });
  }
}
