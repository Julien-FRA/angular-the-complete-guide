import { Component, signal } from '@angular/core';
import { Investment } from '../../utils/types/investment';
import {form, FormField} from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormField],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  investmentModel = signal<Investment>({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  investmentForm = form()

  onSubmit() {
    console.log(this.newInvestment());
  }
}
