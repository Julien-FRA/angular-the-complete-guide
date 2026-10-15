import { Component, signal, inject } from '@angular/core';
import { TaskService } from '../task.service';

import { TaskItemComponent } from './task-item/task-item.component';
import { Task } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  private taskService = inject(TaskService);
  selectedFilter = signal<string>('all');
  tasks = signal<Task[]>(this.taskService.allTasks());

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
