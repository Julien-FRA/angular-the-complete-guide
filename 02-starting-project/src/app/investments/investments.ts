import { Component, inject } from '@angular/core';
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

  get investments() {
    return this.investmentService.getInvestments();
  }
}
