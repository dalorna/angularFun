import {Component, OnInit} from '@angular/core';
import { Task } from '../../interfaces/Tasks'
import {TaskItemComponent} from '../task-item/task-item.component';
import {TaskService} from '../../services/task.service';
import {AddTaskComponent} from '../add-task/add-task.component';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskItemComponent,
    AddTaskComponent,
    FooterComponent,
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTask().subscribe((t) => this.tasks = t)
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.saveTask(task).subscribe((t) => {
      this.tasks.push(t);
    })
  }
}
