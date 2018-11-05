import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServices {
   http: any;
   constructor(private httpClient: HttpClient) { }

   apiKey = '0426a59d9309ba3f21a3637bcea847f3'; //key to access server
  
  //Getting data for forecast
  getForecastData(city: string): Observable<any> {
    const apiSite = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&units=metric&APPID=${this.apiKey}`;
    return this.httpClient.get<any>(apiSite).pipe(
      map(resp => {
        const rainData = resp.list[0].rain;
        const snowData = resp.list[0].snow;
        const forecastData = resp;
        const tempData = { forecastData, rainData, snowData};
        return tempData;
      }));
  }
}
