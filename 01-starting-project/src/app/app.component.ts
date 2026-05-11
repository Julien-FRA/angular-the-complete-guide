import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../utils/dummy-users';

type User = {
  id: string;
  name: string;
  avatar: string;
  age: number;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log('Selected user with id:', id);
  }
}
