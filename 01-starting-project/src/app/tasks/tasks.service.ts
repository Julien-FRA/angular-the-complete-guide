import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../../utils/data/dummy-taskList';
import { type NewTask, type Task } from '../../utils/types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private taskList: Task[] = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.taskList = JSON.parse(tasks);
    } else {
        this.saveTasksToLocalStorage();
    }
  }

  getUserTasks(userId: string) {
    return this.taskList.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.taskList.push({
      id: taskData.id,
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.saveTasksToLocalStorage();
  }

  removeTasks(taskId: string) {
    this.taskList = this.taskList.filter((task) => task.id !== taskId);
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }
}
