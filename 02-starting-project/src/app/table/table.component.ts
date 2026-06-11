import { Component, inject, input, signal } from '@angular/core';
import { InvestmentService } from '../../utils/services/investment.service';
import { Investment, InvestmentData } from '../../utils/types/investment';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  investmentService = inject(InvestmentService);

  newInvestment = input<InvestmentData[] | null>(null);
}
