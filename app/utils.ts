// Note: explicitly set to any type due to nested response obj
export function parseGiphyResponse(data:any) {
    return data.map((result:any) => {
        const id = result.id;
        const {url, width, height} = result.images['fixed_height'];
        return {
            id, url, width, height
        };
    });
}