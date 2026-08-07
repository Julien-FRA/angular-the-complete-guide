import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../utils/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
})
export class SupportComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticket: Ticket): void {
    this.tickets.push(ticket);
  }
}
