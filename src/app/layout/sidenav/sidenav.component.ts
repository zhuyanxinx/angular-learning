import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card'
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,
    MatSidenavModule, MatListModule, MatCardModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  fillerNav = Array.from({ length: 20 }, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    { length: 30 },
    () =>
      `Lorem ipsum dolor sit amet, c`,
  );
}
