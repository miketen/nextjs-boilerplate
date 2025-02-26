import { ForecastResponse } from "./types";

// Note: explicitly set to any type to time constraints
// eslint-disable-next-line
export function parseGiphyResponse(data:any) {
    // eslint-disable-next-line
    return data.map((result:any) => {
        const id = result.id;
        const {url, width, height} = result.images['fixed_height'];
        return {
            id, url, width, height
        };
    });
}

// Note: explicitly set to any type to time constraints
// eslint-disable-next-line
export function parseForecastResponse(data:any):ForecastResponse {
    const forcast = data.DailyForecasts[0];

    return {
        postalcode: data.postalcode,
        cityname: data.cityname,
        temp: forcast.Temperature,
        day: forcast.Day,
        night: forcast.Night,
    };
}

export function formatWeatherIconNumber(iconNumber:number) {
    if (iconNumber >= 0 && iconNumber < 10) {
        return "0" + iconNumber;
    }

    return iconNumber;
}