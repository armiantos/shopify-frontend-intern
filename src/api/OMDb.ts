import axios from 'axios';
import { Movie, SearchResponse } from './data/SearchResponse';

const apiKey = 'e287055f';
const endpoint = `https://www.omdbapi.com`;

export async function searchMovies(title: string): Promise<Movie[]> {
    const res = await axios.get<SearchResponse>(endpoint, {
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
