import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LicensePlate } from '../../model/license-plate';
import { CurrencyInfo } from '../../service/currency.service';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-license-plate',
  imports: [CurrencyPipe, MatCardModule, MatButtonModule],
  templateUrl: './license-plate.component.html',
  styleUrl: './license-plate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LicensePlateComponent {

  plate = input.required<LicensePlate>();
  //TODD:  handle exchange rates for each currency using endpoint https://lp-store-server.vercel.app/rates
  currencyInfo = input.required<CurrencyInfo>();

  buttonText = input<string>("");

  buttonClicked = output<LicensePlate>();

}
