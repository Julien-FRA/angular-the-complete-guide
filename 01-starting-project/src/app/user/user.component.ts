import { Component, computed, input, Input, output } from '@angular/core';
import { User } from '../../utils/types/user.type';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  selected = input<boolean>(false);

  select = output<string>();

  imagePath = computed(() => {
    return `assets/users/${this.user().avatar}`;
  });

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
