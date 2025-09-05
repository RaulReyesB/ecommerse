import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories-bar',
  imports: [],
  templateUrl: './categories-bar.component.html',
  styleUrl: './categories-bar.component.scss'
})
export class CategoriesBarComponent {
  @Input() categories: string[] = [];
  @Input() selected: string | null = null;

  @Output() select = new EventEmitter<string | null> ();
}
