
export const getGifs = async (categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=H1cRMQ7pnjZ4Evea7VldAQoHGbo2lB7W&q=${categoria}&limit=10`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));

    return gifs;
}