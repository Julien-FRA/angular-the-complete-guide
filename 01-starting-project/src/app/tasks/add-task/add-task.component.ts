import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../../../utils/types/task.type';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  private tasksService = inject(TasksService);

  userId = input.required<string>();

  isModalOpen = output<boolean>();
  
  title = signal('');
  summary = signal('');
  date = signal('');

  onCloseModal() {
    this.isModalOpen.emit(false);
  }

  onSubmit() {
    this.tasksService.addTask({
      id: Math.random().toString(),
      title: this.title(),
      summary: this.summary(),
      date: this.date(),
    }, this.userId());

    this.isModalOpen.emit(false);
  }
}
