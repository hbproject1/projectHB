import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './weather-routing.module';
import { weatherService } from './weather.service';

import { AppComponent } from './app.component';
import { cityFilterPipe } from './cityFilter.pipe';
import { CityComponent } from './city/city.component';
import { forecastTimePipe } from './forecastTime.pipe';
import { WindNamePipe } from './windName.pipe';
import { SearchCityComponent } from './search-city/search-city.component';

@NgModule({
  declarations: [
    AppComponent,
    cityFilterPipe,
    CityComponent,
    forecastTimePipe,
    WindNamePipe,
    SearchCityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    weatherService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }