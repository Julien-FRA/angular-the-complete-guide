import { Component, inject, output } from '@angular/core';
import { InvestmentService } from '../../utils/services/investment.service';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [],
  templateUrl: './investments.html',
  styleUrl: './investments.css',
})
export class Investments {
  private investmentService = inject(InvestmentService);

  selectedInvestmentId = output<number>();

  get investments() {
    return this.investmentService.getInvestments();
  }

  onSelectInvestment(id: number) {
    this.selectedInvestmentId.emit(id);
  }
}
