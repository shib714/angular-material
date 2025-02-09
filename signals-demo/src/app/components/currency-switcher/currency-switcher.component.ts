import { Component, inject, Signal } from '@angular/core';
import { CurrencyInfo, CurrencyService } from '../../service/currency.service';
import { Currency } from '../../model/currency';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-currency-switcher',
  imports: [
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule, 
    FormsModule,
    MatButtonModule, 
    MatMenuModule],
  templateUrl: './currency-switcher.component.html',
  styleUrl: './currency-switcher.component.scss'
})
export class CurrencySwitcherComponent {
 
  currencyService = inject(CurrencyService);
  currencyInfo: Signal<CurrencyInfo> = this.currencyService.getCurrencyInfo();

  changeCurrency(currency: Currency): void {
    this.currencyService.setCurrency(currency); 
  }

}
