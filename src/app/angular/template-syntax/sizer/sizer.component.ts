import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './sizer.component.html',
  styles: ''
})
export class SizerComponent {
  @Input() size!: string | number;
  @Output() sizeChange = new EventEmitter<number>();

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
}
