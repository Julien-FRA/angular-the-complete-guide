import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  isModalOpen = output<boolean>();

  onCloseModal() {
    this.isModalOpen.emit(false);
  }
}
