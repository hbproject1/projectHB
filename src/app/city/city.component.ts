
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute} from '@angular/router';

import { weatherService } from '../weather.service';
import {AppServices} from '../citylist.service';
import { WeatherData, ForecData } from '../weather-classes';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  //Go back to search
  Backa(){
    this.location.back();
  }
  
  weatherNow: WeatherData[];
  ConditionNow: WeatherData;
  forecaststats: ForecData;
  city = '';
  rainData = "";
  snowData = "";
  
  constructor(
    public AppServices: AppServices, 

    private route: ActivatedRoute,
    private location: Location,
    private service: weatherService
  ) { }

  ngOnInit() {

    let id = +this.route.snapshot.paramMap.get('id'); //Getting id and declaring

    //Getting weatherdata
    this.service.getWeatherData(id).subscribe((weatherCurrent: any) => {
      this.weatherNow = weatherCurrent;
      this.ConditionNow = weatherCurrent.weather[0];
    });

    // Reading/getting the forecast data code below
    this.city = this.route.snapshot.params['id'];

    this.AppServices.getForecastData(this.city).subscribe(forecasttData => {
      this.rainData = forecasttData.rainData;
      this.snowData = forecasttData.snowData;
    });

    this.service.getForecast(id).subscribe((forecaststats: any) => {
      this.forecaststats = forecaststats.list;
    });

  }
}