import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-jumbotron',
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './jumbotron.component.html',
  styleUrl: './jumbotron.component.scss'
})
export class JumbotronComponent {

  @Input() title!: string;
  @Input() description!: string;

}
