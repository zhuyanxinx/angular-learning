import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemSwitchComponent } from './item-switch/item-switch.component';
import { StoutItemComponent } from './stout-item/stout-item.component';
import { DeviceItemComponent, Item, BestItemComponent, LostItemComponent, UnknownItemComponent, ItemSwitchComponents } from './item';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    FormsModule,
    JsonPipe,
    ItemDetailsComponent,
    ItemSwitchComponents,
  ],
  templateUrl: './directives.component.html',
  styles: ``
})
export class DirectivesComponent implements OnInit {
  canSave = true;
  isSpecial = true;
  isUnchanged = true;
  isActive = true;
  nullCustomer: string | null = null;
  currentCustomer = {
    name: 'Laura',
  };
  item!: Item; // defined to demonstrate template context precedence
  items: Item[] = [];
  currentItem!: Item;
  // trackBy change counting
  itemsNoTrackByCount = 0;
  itemsWithTrackByCount = 0;
  itemsWithTrackByCountReset = 0;
  itemIdIncrement = 1;
  currentClasses: Record<string, boolean> = {};
  currentStyles: Record<string, string> = {};
  ngOnInit() {
    this.resetItems();
    this.setCurrentClasses();
    this.setCurrentStyles();
    this.itemsNoTrackByCount = 0;
  }
  setUppercaseName(name: string) {
    this.currentItem.name = name.toUpperCase();
  }
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }
  isActiveToggle() {
    this.isActive = !this.isActive;
  }
  giveNullCustomerValue() {
    this.nullCustomer = 'Kelly';
  }
  resetItems() {
    this.items = []; //Item.items.map((item) => item.clone());
    this.currentItem = this.items[0];
    this.item = this.currentItem;
  }
  resetList() {
    this.resetItems();
    this.itemsWithTrackByCountReset = 0;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
  }
  changeIds() {
    this.items.forEach((i) => (i.id += 1 * this.itemIdIncrement));
    this.itemsWithTrackByCountReset = -1;
    this.itemsNoTrackByCount = ++this.itemsNoTrackByCount;
    this.itemsWithTrackByCount = ++this.itemsWithTrackByCount;
  }
  clearTrackByCounts() {
    this.resetItems();
    this.itemsNoTrackByCount = 0;
    this.itemsWithTrackByCount = 0;
    this.itemIdIncrement = 1;
  }
  trackByItems(index: number, item: Item): number {
    return item.id;
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
