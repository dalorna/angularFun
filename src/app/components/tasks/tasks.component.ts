import {Component, OnInit} from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { Task } from '../../Tasks'
import {TaskItemComponent} from "../task-item/task-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() {
  }

  ngOnInit() {
  }
}
