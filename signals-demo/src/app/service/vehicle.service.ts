import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, linkedSignal, signal } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import {rxResource} from '@angular/core/rxjs-interop';
import { VehicleResponse } from '../model/vehicle-response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehicleUrl = 'https://swapi.py4e.com/api/vehicles';
  //private vehicleUrl = 'http://localhost:3000/results';

  private http = inject(HttpClient);

//data that are required in our UI 
//vehicles = signal<Vehicle[]>([]); //a writable signal
selectedVehicle = signal<Vehicle | undefined> (undefined);
//quantaty = signal(1);
quantity = linkedSignal ({
  source: this.selectedVehicle,
  computation: (vehi) => {
    if(vehi) {
      return 1;
    }
    return 0;
  }
});

total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0 ) * this.quantity()); //readonly signal
color = computed(() => this.total() > 50000 ? 'green' : 'blue');


vehicleResource = rxResource({
  loader: () => this.http.get<VehicleResponse>(this.vehicleUrl).pipe(
    map(vr => vr.results)
  )
});
vehicles = computed(() => this.vehicleResource.value() ?? [] as Vehicle[]);

}





