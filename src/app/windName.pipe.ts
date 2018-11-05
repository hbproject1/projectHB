import { Pipe, PipeTransform } from '@angular/core';

import { WeatherData } from './weather-classes';

@Pipe({
  name: 'windName'
})

//Skriver om direction (siffror) till (ord) example: north enligt 16 system compassen
export class WindNamePipe implements PipeTransform {

  transform(deg: WeatherData): any {
    if (+deg >= 348.76 || +deg <= 11.25 ) return "North";

    if (+deg > 11.26 && +deg < 33.75) return "North-northeast";

    if (+deg > 33.76 && +deg < 56.25) return "Northeast";

    if (+deg > 56.26 && +deg < 78.75) return "East-northeast";

    if (+deg >= 78.76 && +deg <= 101.25) return "East";

    if (+deg >= 101.26 && +deg <= 123.75) return "East-southeast";
    
    if (+deg >= 123.76 && +deg <= 146.25) return "South-East";

    if (+deg > 146.26 && +deg < 168.75) return "South-southeast";

    if (+deg >= 168.76 && +deg <= 191.25) return "South";

    if (+deg >= 191.26 && +deg <= 213.75) return "South-southwest";

    if (+deg >= 213.76 && +deg <= 236.25) return "Southwest";

    if (+deg >= 236.26 && +deg <= 258.75) return "West-southwest";

    if (+deg >= 258.76 && +deg <= 281.25) return "West";

    if (+deg > 281.26 && +deg < 303.75) return "West-northwest";

    if (+deg >= 303.76 && +deg <= 326.25) return "Northwest";

    if (+deg > 326.26 && +deg < 348.75) return "North-northwest";
  }

}