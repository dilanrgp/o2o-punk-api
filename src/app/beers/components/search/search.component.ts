import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Beer } from 'src/app/interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';

@Component({
  selector: 'beer-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  private beerService = inject(BeerService);
  private router = inject(Router);

  public searchInput = new FormControl('');
  public beers: Beer[] = [];
  public beerExist: boolean = false;
  public beerSeleccionado!: Beer;
  public loading: boolean = false;


  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      tap((val) => {
        this.loading = true;
        this.beers = [];
      }),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(value => {

      if (value) {

        this.beerService.getSugerencias(value).subscribe({
          next: resp => {
            this.beers = resp;
            this.loading = false;
          },
          error: err => {
            this.searchInput.setValue('');
            this.loading = false;
            this.beers = [];
          }
        })

      } else {

        this.searchInput.setValue('');
        this.loading = false;
        this.beers = [];

      }
    })
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
