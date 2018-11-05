import { Component, OnInit } from '@angular/core';

import { weatherService } from '../weather.service';
import { ForecData } from '../weather-classes';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  cityList:ForecData; //Declaring 

  constructor(
    private service: weatherService
  ) { }

  ngOnInit() {
    //Getting data from Service
    this.service.getCities().subscribe((cityList: any) => {
      this.cityList = cityList;
    });

  }
}