import { Pipe, PipeTransform } from '@angular/core';
import { ForecData } from './weather-classes';

@Pipe({
  name: 'forecastTime'
})
//Pipe som gör att forecast data börjar kl 07:00
export class forecastTimePipe implements PipeTransform {

    transform(forecaststats: ForecData[]): any {
    let currentTime = new Date();

    let stopDate = new Date();
    stopDate.setDate(currentTime.getDate()+2);
    stopDate.setHours(7);

    let startDate = new Date();
    startDate.setDate(currentTime.getDate()+1);
    startDate.setHours(6);
     
    //Ger data till forecaststats
    return forecaststats.filter((forecaststats:ForecData) => {
      let forecastDygn = new Date(forecaststats.dt * 1000);
      return forecastDygn > startDate && forecastDygn < stopDate;
    });     
  }
}