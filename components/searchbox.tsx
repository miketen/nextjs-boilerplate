'use client';

export default function Navigation() {

  return (<div className="mx-8 w-full">
<input className="relative my-8 pl-3 pr-28 py-3 mt-1 text-lg block w-full border border-gray-200 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300" placeholder="" type="text" name="feature"></input>
<button className="flex items-center justify-center absolute right-2 top-2 px-4 h-10 text-lg border bg-black text-white rounded-md w-24 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-gray-800" type="submit">Search</button>
  </div>);
}
