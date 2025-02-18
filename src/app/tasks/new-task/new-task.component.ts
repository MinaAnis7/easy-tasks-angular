import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone: false,
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() dismissDialog = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>();
  taskService = inject(TaskService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onDismiss() {
    this.dismissDialog.emit();
  }

  onAddTask() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDate,
      },
      this.userId
    );

    this.dismissDialog.emit();
  }
}
