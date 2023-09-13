import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BeerCardComponent } from './components/beer-card/beer-card.component';
import { BeerComponent } from './components/beer/beer.component';
import { BeersRoutingModule } from './beers-rounting.';
import { ImagenPipe } from '../pipes/imagen.pipe';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    BeerCardComponent,
    BeerComponent,
    ImagenPipe,
    ListPageComponent,
    SearchComponent,
  ],
  imports: [
    BeersRoutingModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class BeersModule { }
