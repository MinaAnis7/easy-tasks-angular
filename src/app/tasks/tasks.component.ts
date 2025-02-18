import { Component, Input } from '@angular/core';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone: false,
})
export class TasksComponent {
  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  constructor(private taskService: TaskService) {}

  get userTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  openNewTaskDialog() {
    this.isAddingTask = true;
  }

  onDismissDialog() {
    this.isAddingTask = false;
  }
}
