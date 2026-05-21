import { Component, inject, input, output } from '@angular/core';
import { type Task } from '../../../utils/types/task.type';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  private taskService = inject(TasksService);

  task = input.required<Task>();

  onCompleteTask() {
    this.taskService.removeTasks(this.task().id);
  }
}
