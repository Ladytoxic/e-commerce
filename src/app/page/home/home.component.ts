import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private titleService: Title,
    private metaService: Meta) {
    this.titleService.setTitle('HOME');
    this.metaService.updateTag({ name: 'description', content: 'Nueva descripción de la página' });
  }
}
