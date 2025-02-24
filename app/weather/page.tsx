'use client';

import Searchbox from "@/components/searchbox"
import { useState } from "react";

export default function Weather() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full my-8 mx-8">
      <p className="text-base">Search for something on Weather.</p>
      <p>{searchQuery}</p>
      <Searchbox handleSubmit={setSearchQuery} />
    </div>
  );
}
