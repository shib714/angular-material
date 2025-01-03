import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { VehicleService } from '../../service/vehicle.service';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import {MatSelectModule} from '@angular/material/select';



const OPTIONS = {

appearance: 'outline',
floatLabel: 'always',
hideRequiredMarker: true
}

@Component({
  selector: 'app-vehicle-selection',
  imports: [FormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule
  ],
  templateUrl: './vehicle-selection.component.html',
  styleUrl: './vehicle-selection.component.scss',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {... OPTIONS}
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleSelectionComponent {

 private vehicleService = inject(VehicleService);

  vehicles = this.vehicleService.vehicles;
  selectedVehicle = this.vehicleService.selectedVehicle;
  quantity = this.vehicleService.quantity;
  total = this.vehicleService.total;

  color = this.vehicleService.color;
  



  foods: Food[] = [  
    {value: 'steak-0', viewValue: 'Steak'},  
    {value: 'pizza-1', viewValue: 'Pizza'},  
    {value: 'tacos-2', viewValue: 'Tacos'}  
  ]; 

  selected = 'option2'
}

interface Food {  
  value: string;  
  viewValue: string;  
}  
