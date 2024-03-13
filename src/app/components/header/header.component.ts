import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from '../button/button.component';
import {UIService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [ButtonComponent, NgIf],
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();
  constructor(private uiService: UIService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe(value => { this.showAddTask = value});
  }
  ngOnInit() {
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
