import { ForecastResponse } from "@/app/types";
import { formatWeatherIconNumber } from "@/app/utils";

interface Props {
    forecast: ForecastResponse;
}

export default function ForecastDetails ({forecast}:Props) {
    return (<div>
        <h1 className="text-4xl my-4"> {forecast.cityname}, {forecast.postalcode}</h1>
        <p className="text-xl mb-4">Todays temps are a high of {forecast.temp.Maximum.Value}F and a low of {forecast.temp.Minimum.Value}F.</p>
        <p className="text-2xl font-medium mb-4">Daytime<img src={`https://developer.accuweather.com/sites/default/files/${formatWeatherIconNumber(forecast.day.Icon)}-s.png`} /></p>
        <p className="text-2xl font-medium mb-4">Nightime<img src={`https://developer.accuweather.com/sites/default/files/${formatWeatherIconNumber(forecast.night.Icon)}-s.png`} /></p>
        </div>);
}