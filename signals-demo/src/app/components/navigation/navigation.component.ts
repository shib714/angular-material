import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CurrencySwitcherComponent } from '../currency-switcher/currency-switcher.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatDividerModule,
  CurrencySwitcherComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
