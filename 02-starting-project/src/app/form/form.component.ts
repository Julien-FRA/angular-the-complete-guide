import { Component, inject, signal } from '@angular/core';
import { Investment } from '../../utils/types/investment';
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

  onSubmit() {
    this.investmentService.addInvestment({
      simulName: this.simulName(),
      initialInvestment: this.initialInvestment(),
      annualInvestment: this.annualInvestment(),
      expectedReturn: this.expectedReturn(),
      duration: this.duration(),
    });
  }
}
