import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../item';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styles: ``
})
export class ItemDetailsComponent {
  items: Item[] = [];
  @Input() item!: Item;
}
