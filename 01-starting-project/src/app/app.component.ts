import { Component, inject } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../utils/data/dummy-users';
import { DUMMY_TASKS } from '../utils/data/dummy-taskList';
import { TasksComponent } from './tasks/tasks.component';
import { NewTask, type Task } from '../utils/types/task.type';
import { type User } from '../utils/types/user.type';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  protected userIdSelected?: string;

  get userSelected(): User | undefined {
    return this.users.find((user) => user.id === this.userIdSelected);
  }

  onSelectUser(id: string) {
    this.userIdSelected = id;
  }
}
