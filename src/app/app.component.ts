import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodegaComponent } from './bodega/bodega.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodegaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'bodega';
}
