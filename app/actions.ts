import { WEATHER_API_KEY } from "./constants";


export async function getWeatherDetails(postalcode:string) {
    try {
        const locationResp = await fetch(`http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=${WEATHER_API_KEY}&q=${postalcode}`);

        if (!locationResp.ok) {
            throw new Error(`HTTP Request Error! status: ${locationResp.status}`);
        }

        const locationData = await locationResp.json();
        

        if (typeof locationData[0].Key === 'undefined' || locationData.length === 0) {
            // handle case when no info is found for a postal code
            return {ok: true, error: 'No results for given postalcode.'};
        }

        const {Key, PrimaryPostalCode, EnglishName} = locationData[0];
        const forcastResp = await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${Key}?apikey=${WEATHER_API_KEY}`);

        if (!forcastResp.ok) {
            throw new Error(`HTTP Request Error! status: ${forcastResp.status}`);
        }
        
        const forecastData = await forcastResp.json();

        return {ok: true, postalcode: PrimaryPostalCode, cityname: EnglishName, DailyForecasts: forecastData.DailyForecasts};

    } catch(error:any) {
        console.error(error.message);
        return {ok: false, error: error.message};
    }
  }