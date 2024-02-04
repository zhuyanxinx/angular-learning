import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { SvgComponent } from './svg/svg.component';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [CommonModule, FormsModule,
    MatButtonModule, MatDividerModule, MatFormFieldModule,
    SizerComponent, SvgComponent],
  templateUrl: './template-syntax.component.html',
  styles: ``
})
export class TemplateSyntaxComponent {
  imgUrl = '../assets/angular.svg';
  isUnchanged = true;
  actionName = 'binding';
  clickMessage = 'Clicked';

  fontSizePx = 16;
}
