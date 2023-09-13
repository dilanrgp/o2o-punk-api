import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Beer } from 'src/app/interfaces/beer.interface';
import { BeerService } from '../../services/beer.service';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  private activateRoute = inject(ActivatedRoute);
  private beerService = inject(BeerService);
  private router = inject(Router);

  public beer?: Beer;

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.beerService.getBeerById(id)),
      ).subscribe( resp => {
        if (!resp) return this.router.navigate(['/beers/list']);
        this.beer = resp[0];
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('beers/list');
  }


}
