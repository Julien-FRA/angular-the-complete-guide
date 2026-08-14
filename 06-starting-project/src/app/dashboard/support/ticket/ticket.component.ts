import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../utils/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  isOpen = signal<boolean>(false);
  updateTicket = output();

  onOpenTicket() {
    this.isOpen.set(!this.isOpen());
  }

  onMarkAsCompleted() {
    console.log('ttest');
    this.updateTicket.emit();
  }
}
