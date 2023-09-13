import { Component, Input } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer.interface';

@Component({
  selector: 'beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent {

  @Input() 
  public beer!: Beer;


}
