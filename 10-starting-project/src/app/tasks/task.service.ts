import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>([]);

  allTasks() {
    return this.tasks();
  }

  addTask(title: string, description?: string) {
    const newTask: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: 'OPEN',
    };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }
}
