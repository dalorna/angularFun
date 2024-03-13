import { Component } from '@angular/core';
import {RouterLink, Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router) {
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
