import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { Investments } from './investments/investments';
import { Investment, InvestmentData } from '../utils/types/investment';
import { InvestmentService } from '../utils/services/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FormComponent, Investments, TableComponent],
})
export class AppComponent {
  investmentService = inject(InvestmentService);

  newInvestment = signal<InvestmentData[] | null>(null);

  onNewInvestment(item: InvestmentData[]) {
    this.newInvestment.set(item);
  }

  onSelectedInvestmentId(id: number) {
    let item = this.investmentService.getInvestmentById(id);
    let itemResult = item
      ? this.investmentService.calculateInvestment(item)
      : null;
    this.newInvestment.set(itemResult);
  }
}
