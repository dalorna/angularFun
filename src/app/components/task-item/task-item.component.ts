import {Component, Input} from '@angular/core';
import {Task} from '../../Tasks';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes= faTimes;

}
