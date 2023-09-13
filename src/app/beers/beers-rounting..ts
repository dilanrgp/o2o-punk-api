import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerComponent } from './components/beer/beer.component';
import { LayoutPageComponent } from '../pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        { path: 'search', component: SearchComponent },
        { path: 'list', component: ListPageComponent },
        { path: ':id', component: BeerComponent },
        { path: '**', redirectTo: 'list' }
      ]
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild( routes )
      ],
      exports: [
        RouterModule
      ]
})
export class BeersRoutingModule {}