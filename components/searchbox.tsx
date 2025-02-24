'use client';

import { useState } from "react";

interface Props {
  handleSubmit: (query:string) => void;
}

export default function Searchbox({handleSubmit}:Props) {
  const [isSearchQueryEmpty, setIsSeachQueryEmpty] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const validateInput = () => {
    if (searchQuery === '') {
      setIsSeachQueryEmpty(true);
      return;
    }

    if (isSearchQueryEmpty) {
      setIsSeachQueryEmpty(false);
    }

    handleSubmit(searchQuery);
  };

  return (
  <div className="relative">
    <input onChange={handleSearch} className="pl-3 pr-28 py-3 mt-1 text-lg block w-full border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300" placeholder="" type="text" name="feature"></input>
    <button onClick={validateInput} className="flex items-center justify-center absolute right-2 top-2 px-4 h-10 text-lg border bg-black text-white rounded-md w-24 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800" type="submit">Search</button>
    {isSearchQueryEmpty && <p className="text-sm font-semibold text-red-500">Search text required to perform a search.</p>}
  </div>);
}
