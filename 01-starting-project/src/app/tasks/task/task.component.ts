import { Component, input, output } from '@angular/core';
import { type Task } from '../../../utils/types/task.type';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();

  complete = output<string>();

  onCompleteTask() {
    this.complete.emit(this.task().id);
  }
}
