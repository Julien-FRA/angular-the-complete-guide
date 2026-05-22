import { Injectable } from '@angular/core';
import { Investment, InvestmentData } from '../types/investment';
import { calculateInvestmentResults } from '../../investment-results';

@Injectable({ providedIn: 'root' })
export class InvestmentService {
  private investmentHistory: Investment[] = [];

  constructor() {
    const investments = localStorage.getItem('investments');

    if (investments) {
      this.investmentHistory = JSON.parse(investments);
    } else {
      this.saveToLocalStorage();
    }
  }

  addInvestment({
    simulName,
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: Investment) {
    console.log(initialInvestment);
    this.investmentHistory.push({
      simulName,
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });

    this.saveToLocalStorage();
  }

  getInvestments() {
    return this.investmentHistory;
  }

  calculateInvestment(investment: Investment): InvestmentData[] {
    return calculateInvestmentResults(investment);
  }

  private saveToLocalStorage() {
    localStorage.setItem('investments', JSON.stringify(this.investmentHistory));
  }
}
