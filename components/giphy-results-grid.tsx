import { Result } from "@/app/types";

interface Props {
    results: Result[];
}

export default function GifphyResultsGrid ({results}: Props) {
    return (<div className="flex flex-wrap">
        {results.map((result) => {
            return (<div key={result.id} className="mx-4 my-4 bg-gray-200 minh-12">
                <img src={result.url} width={Number(result.width)} height={Number(result.height)} alt="giphy image" />
            </div>)
        })}
    </div>);
}