import {Component, OnInit} from '@angular/core';
import { Observable, of} from 'rxjs';
import { Task } from '../../Tasks'
import {TaskItemComponent} from '../task-item/task-item.component';
import {TaskService} from '../../services/task.service';

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
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.tasks = this.taskService.getTask();
  }
}
