import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [ButtonComponent],
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  constructor() {
  }
  ngOnInit() {
  }
  toggleAddTask() {
    console.log('toggle Add Task')
  }
}
