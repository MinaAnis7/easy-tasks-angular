import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  taskService = inject(TaskService);

  onCompleted() {
    this.taskService.removeTask(this.task.id);
  }
}
