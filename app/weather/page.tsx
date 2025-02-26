'use client';

import Searchbox from "@/components/searchbox"
import { useState, useTransition } from "react";
import { getWeatherDetails } from "../actions";
import ForecastDetails from "@/components/forecast-details";
import { parseForecastResponse } from "../utils";
import { ForecastResponse } from "../types";

export default function Weather() {
  const [isPending, startTransition] = useTransition();
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

   function onSubmit (postalcode:string){
      startTransition(async function () {
        const response = await getWeatherDetails(postalcode);

        if (!response.ok) {
          throw new Error(`HTTP Request Error! status: ${response.error}`);
        }
  
        setForecast(parseForecastResponse(response));
        
      });
    }

  return (
    <div className="w-full my-8 mx-8">
      <p className="text-base">Search for the daily forecast using your USA postal code.</p>
      <Searchbox numbersOnly={true} handleSubmit={onSubmit} />
      {isPending && <p className="flex justify-center text-lg my-4">Thinking...</p>}
      {forecast?.cityname && <ForecastDetails forecast={forecast} />}
    </div>
  );
}
