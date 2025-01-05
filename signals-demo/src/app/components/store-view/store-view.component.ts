import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LicensePlateComponent } from '../license-plate/license-plate.component';
import { LicensePlateService } from '../../service/license-plate.service';
import { CurrencyService } from '../../service/currency.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';


@Component({
  selector: 'app-store-view',
  imports: [MatGridListModule, LicensePlateComponent, JumbotronComponent, AsyncPipe],
  templateUrl: './store-view.component.html',
  styleUrl: './store-view.component.scss'
})
export class StoreViewComponent {

  plateService: LicensePlateService = inject(LicensePlateService);

  plates$ = this.plateService.fetchPlates();

  currencyInfo = inject(CurrencyService).getCurrencyInfo();  

}
