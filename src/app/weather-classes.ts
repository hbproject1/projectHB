export class WeatherData {
    weather: [
      {
        description: string;
        id: number;
        main: string;
      }
    ];
    Current: {
      Coord;
    };
    wind: {
      speed: number;
      deg: number;
    };
    coord: {
      lat: number;
      lon: number;
    };
    main: {
      temp: number;
      humidity: number;
    };
    clouds: {
      all: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    dt: number;
    name: string;
    cod: number;
  }
  
  export class ForecData {
    Main: 
      {
        temp: number;
        pressure: number;
      };
    wind: {
        speed: number;
    };
    rain: {
        ['3h']: number;
    };
    snow: {
        ['3h']: number;
    };
    cityList: {
        id: string;
        nm: string;
    };
    dt: number;
  }