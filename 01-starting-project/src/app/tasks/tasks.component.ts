import { Component, input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type User } from '../../utils/types/user.type';
import { type Task } from '../../utils/types/task.type';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  taskList = input.required<Task[] | null>();

  completeTaskId = output<string>();

  isAddingTask = false;

  onCompleteTask(taskId: string) {
    this.completeTaskId.emit(taskId);
  }

  onAddTask() {
    this.isAddingTask = !this.isAddingTask;
  }

  onCloseModal(isModalOpen: boolean) {
    this.isAddingTask = isModalOpen;
  }
}
