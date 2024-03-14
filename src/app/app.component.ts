import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/layout/menu/menu.component';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, RouterOutlet, FooterComponent, MenuComponent, MatIcon, MatListItem, MatNavList, MatSidenav, MatSidenavContainer, MatSidenavContent, NgIf, MatIconButton, MatToolbar, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isCollapsed = true;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
