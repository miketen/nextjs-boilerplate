'use client';

import { useState, useTransition } from "react";
import Searchbox from "@/components/searchbox"
import { GIPHY_API_KEY } from "../constants";
import { parseGiphyResponse } from "../utils";
import GifphyResultsGrid from "@/components/giphy-results-grid";
import { Result } from "@/app/types";

export default function Giphy() {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}`;
  const [isPending, startTransition] = useTransition();
  const [results, setResults] = useState<Result[]>([]);

  function onSubmit (searchQuery:string){
    setResults([]);
    startTransition(async function () {
      const response = await fetch(`${API_URL}&q=${encodeURIComponent(searchQuery)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP Request Error! status: ${response.status}`);
      }

      const data = await response.json();
      setResults(parseGiphyResponse(data.data));
      
    });
  }
  
  return (
    <div className="w-full my-8 mx-8">
      <p className="text-base">Search for something on Giphy!</p>
      <Searchbox handleSubmit={onSubmit}/>
      {isPending && <p className="flex justify-center text-lg my-4">Thinking...</p>}
      {results.length !== 0 && <GifphyResultsGrid results={results} />}
    </div>
  );
}
