import { Component, inject, output, signal } from '@angular/core';
import { Investment, InvestmentData } from '../../utils/types/investment';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../utils/services/investment.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  investmentService = inject(InvestmentService);
  simulName = signal<string>('');
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);

  newInvestment = output<InvestmentData[]>();

  onSubmit() {
    let investment: Investment = {
      id: Date.now() + Math.floor(Math.random()),
      simulName: this.simulName(),
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    };

    this.investmentService.addInvestment(investment);

    let investmentResult =
      this.investmentService.calculateInvestment(investment);

    this.newInvestment.emit(investmentResult);
  }
}
