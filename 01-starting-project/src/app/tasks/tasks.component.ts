import { Component, input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from '../../utils/types/user.type';
import { Task } from '../../utils/types/task.type';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  user = input.required<User>();
  taskList = input.required<Task[] | null>();
}
