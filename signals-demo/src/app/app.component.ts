import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleSelectionComponent } from './components/vehicle-selection/vehicle-selection.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VehicleSelectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'signals-demo';
}
