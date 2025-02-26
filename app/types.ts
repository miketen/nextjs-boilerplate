export type Result = {
    id: string,
    url: string,
    width: string,
    height: string,
};


export type Temperature = {
    Minimum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: string;
      UnitType: number;
    };
  }
  
  export type DayOrNight = {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  
export type Forecast = {
    Date: string;
    EpochDate: number;
    Temperature: Temperature;
    Day: DayOrNight;
    Night: DayOrNight;
    Sources: string[];
    MobileLink: string;
    Link: string;
  };


  export type ForecastResponse = {
    cityname: string;
    postalcode: string;
    temp: Temperature;
    day: DayOrNight;
    night: DayOrNight;
  }