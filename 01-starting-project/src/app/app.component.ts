import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../utils/data/dummy-users';
import { DUMMY_TASKS } from '../utils/data/dummy-taskList';
import { TasksComponent } from './tasks/tasks.component';
import { type Task } from '../utils/types/task.type';
import { type User } from '../utils/types/user.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  taskList: Task[] = DUMMY_TASKS;
  protected userIdSelected?: string;

  get userSelected(): User | undefined {
    return this.users.find((user) => user.id === this.userIdSelected);
  }

  get userTasks(): Task[] | null {
    return this.userIdSelected
      ? this.taskList.filter((task) => task.userId === this.userIdSelected)
      : null;
  }

  onSelectUser(id: string) {
    this.userIdSelected = id;
  }

  onUpdateUserTasks(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }
}
