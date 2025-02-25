// Note: explicitly set to any type due to nested response obj
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