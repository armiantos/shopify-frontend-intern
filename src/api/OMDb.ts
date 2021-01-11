import axios from 'axios';
import Movie from '../data/Movie';
import { OMDbMovie } from './data/OMDbSearchResponse';

const apiKey = 'e287055f';
const endpoint = `http://www.omdbapi.com`;

export async function searchMovies(title: string): Promise<Movie[]> {
    const res = await axios.get(endpoint, {
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

    return res.data.Search.map((movie: OMDbMovie) => ({
        title: movie.Title,
        year: movie.Year,
    }));
}
