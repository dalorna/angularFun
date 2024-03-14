import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Task} from '../../interfaces/Tasks';
import {UIService} from '../../services/ui.service';
import {Subscription} from 'rxjs';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UIService) {
    this.subscription = this.uiService.onToggle().subscribe(value => { this.showAddTask = value})
  }
  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.text) {
      alert('Please Add Task');
      return;
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
