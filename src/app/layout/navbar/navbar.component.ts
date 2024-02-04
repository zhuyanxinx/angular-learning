import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, SidenavComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
