import { Component, inject, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../../utils/types/user.type';
import { type Task } from '../../utils/types/task.type';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  private taskService = inject(TasksService);

  user = input.required<User>();

  isAddingTask = false;

  get userTasks(): Task[] | null {
    return this.taskService.getUserTasks(this.user().id) || null;
  }

  onAddingTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCloseModal(isModalOpen: boolean) {
    this.isAddingTask = isModalOpen;
  }
}
