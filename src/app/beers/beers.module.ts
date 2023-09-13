import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeerComponent } from './components/beer/beer.component';
import { BeersRoutingModule } from './beers-rounting.';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    SearchComponent,
    ListComponent,
    BeerComponent
  ],
  imports: [
    CommonModule,
    BeersRoutingModule,
    MaterialModule
  ]
})
export class BeersModule { }
