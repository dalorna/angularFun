import { Component } from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TasksComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
