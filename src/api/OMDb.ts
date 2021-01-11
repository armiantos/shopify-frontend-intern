import axios from 'axios'
import Movie from '../data/Movie'

const apiKey = 'e287055f'
const endpoint = `http://www.omdbapi.com`

export async function searchMovie(title: string): Promise<Movie[]> {
    const res = await axios.get(endpoint, {
        params: {
            apiKey,
            type: 'movie',
            s: title,
        },
    })

    if (res.data.Response === 'False') {
        return []
    }

    return res.data.Search.map((movie: any) => ({
        title: movie.Title,
        year: movie.Year,
    }))
}
