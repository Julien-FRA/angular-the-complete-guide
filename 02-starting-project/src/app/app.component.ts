import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { Investments } from './investments/investments';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, FormComponent, Investments, TableComponent]
})
export class AppComponent {}
