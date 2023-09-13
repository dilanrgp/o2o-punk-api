import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Beer } from 'src/app/interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { delay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'beer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private beerService = inject(BeerService);
  private router = inject(Router);

  public searchInput = new FormControl('');
  public beers: Beer[] = [];
  public beerExist: boolean = false;
  public beerSeleccionado!: Beer;
  public loading: boolean = false;


  searchBeer() {
    this.loading = true;
    setTimeout(() => {
      const value: string = this.searchInput.value || '';
      this.beerService.getSugerencias(value).subscribe(beers => {
        this.beers = beers;
        this.loading = false;
      })
    }, 1700);

  }


  onSelectedOption(event: MatAutocompleteSelectedEvent): void {

    if (!event.option.value) {
      this.beerExist = false;
      return;
    }

    this.beerExist = true;
    const beer: Beer = event.option.value;
    this.searchInput.setValue(beer.name);

    this.router.navigate(['/beers', beer.id]);

  }



}
