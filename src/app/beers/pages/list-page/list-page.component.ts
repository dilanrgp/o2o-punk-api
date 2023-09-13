import { Component, OnInit, inject } from '@angular/core';
import { Beer } from 'src/app/interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  private beerService = inject(BeerService);
  public beers: Beer[] = [];

  ngOnInit(): void {
    this.beerService.getBeers().subscribe( {
      next: (resp) => this.beers = resp
    })
    
  }


}
