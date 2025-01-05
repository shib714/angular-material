import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';

import { VehicleService } from '../../service/vehicle.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule, FloatLabelType, } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { DatePipe } from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {map} from 'rxjs/operators';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

const OPTIONS = {
  appearance: 'outline',
  floatLabel: 'always',
  hideRequiredMarker: true
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-vehicle-selection',
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    JumbotronComponent,
    MatTableModule,
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule, MatPaginatorModule
  ],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { ...OPTIONS }
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleSelectionComponent {
  displayedColumns: string[] = ['name', 'model', 'cost_in_credits', 'cargo_capacity','created'];
  
  private vehicleService = inject(VehicleService);

  vehicles = this.vehicleService.vehicles;


  selectedVehicle = this.vehicleService.selectedVehicle;
  quantity = this.vehicleService.quantity;
  total = this.vehicleService.total;

  color = this.vehicleService.color;
}

