import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCityComponent } from './search-city/search-city.component';
import { CityComponent } from './city/city.component';

//Skapar routes search-city och city/id
const routes: Routes = [

  { path: '', redirectTo: '/search-city', pathMatch: 'full' },

  { path: 'search-city', component: SearchCityComponent },

  { path: 'city/:id', component: CityComponent },

  { path: '**', redirectTo: '/search-city' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }