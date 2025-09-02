import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommers-rrb';
}
