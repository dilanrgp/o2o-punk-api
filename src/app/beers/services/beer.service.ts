import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, concatMap, delay, from, of } from 'rxjs';
import { Beer } from 'src/app/interfaces/beer.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private baseUrl: string = environments.baseUrl;
  private http = inject(HttpClient);

  constructor() { }

  getBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers`);
  }

  getBeerById( id: string ): Observable<Beer[] | undefined > {
    return this.http.get<Beer[]>(`${ this.baseUrl }/beers/${id}`)
    .pipe(
      catchError( error => of(undefined) )
    )
  }

  getSugerencias( query: string ): Observable<Beer[]> {

    let queryString = query.replace(/ /g, "_");

    return this.http.get<Beer[]>(`${ this.baseUrl }/beers?beer_name=${queryString}&per_page=6`);
  }
}
