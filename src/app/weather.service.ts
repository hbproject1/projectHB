import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData, ForecData } from './weather-classes';

@Injectable({
  providedIn: 'root'
})

export class weatherService {
  //OBSERVERA, OBSERVERA, OBSERVERA, OBSERVERA, OBSERVERA, OBSERVERA, OBSERVERA, OBSERVERA
  //Använder server "by city id" istället för "by city by name" (gör att det inte är samma weather data)
  apiURL = "https://api.openweathermap.org/data/2.5/weather?id="; //servern till weather
  apiUrlFCast = "https://api.openweathermap.org/data/2.5/forecast?id="; //serven till forecast
  apiKey = "0426a59d9309ba3f21a3637bcea847f3"; //key to access server

  constructor(
    private http: HttpClient
  ) { }
  //Get weatherdata for cities
  getWeatherData(id): Observable<WeatherData>{
    return this.http.get(this.apiURL + id + '&units=metric&appid=' + this.apiKey) as Observable<WeatherData>;
    console.log('apiURL', this.apiURL);

  }
  //Getting forcastdata
  getForecast(id): Observable<ForecData[]>{
    return this.http.get(this.apiUrlFCast + id + '&units=metric&appid=' + this.apiKey) as Observable<ForecData[]>;
  }
  //Getting city_list.json for search results
  getCities(): Observable<ForecData[]>{
    return this.http.get('/assets/city_list.json') as Observable<ForecData[]>;
  }
}