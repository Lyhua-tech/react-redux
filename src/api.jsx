import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID HTADEdy6OfF6WiPlHiwW4xXM8xE4-RBjQicOwDhMpmY'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}
export default searchImages