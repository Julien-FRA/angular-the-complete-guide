import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../utils/data/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { find } from 'rxjs';

type User = {
  id: string;
  name: string;
  avatar: string;
  age: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  protected userIdSelected: string = '';

  get userNameSelected() {
    return this.users.find(user => user.id === this.userIdSelected)?.name;
  }

  onSelectUser(id: string) {
    this.userIdSelected = id;
  }
}
