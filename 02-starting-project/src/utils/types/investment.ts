export type Investment = {
  simulName: string;
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
};

export type InvestmentData = {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
};
