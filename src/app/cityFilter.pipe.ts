import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})

export class cityFilterPipe implements PipeTransform {
    transform(cityList: any, search: any): any {
    if (search === undefined || search == "") return null; //Tomt sökfält = ingen city_list.json

    //Hämtar data
    return cityList.filter(cityList => cityList.nm.toLowerCase().includes(search.toLowerCase()));
  }
}