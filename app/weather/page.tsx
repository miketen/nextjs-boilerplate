import Searchbox from "@/components/searchbox"

export default function Weather() {
  return (
    <div className="w-full my-8 mx-8">
        <p className="text-base">Search for something on Weather.</p>
        <Searchbox />
    </div>
  );
}
