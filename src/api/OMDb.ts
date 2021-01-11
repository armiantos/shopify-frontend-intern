import axios from 'axios';
import { OMDbMovie, OMDbSearchResponse } from './data/OMDbSearchResponse';

const apiKey = 'e287055f';
const endpoint = `http://www.omdbapi.com`;

export async function searchMovies(title: string): Promise<OMDbMovie[]> {
    const res = await axios.get<OMDbSearchResponse>(endpoint, {
        params: {
            apiKey,
            type: 'movie',
            s: title,
        },
    });

    // When there are no matching movies from OMDb with given title
    if (res.data.Response === 'False') {
        return [];
    }

    return res.data.Search;
}
