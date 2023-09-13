import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../pages/layout-page/layout-page.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { BeerComponent } from './components/beer/beer.component';


const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        { path: 'search', component: SearchComponent },
        { path: 'list', component: ListComponent },
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