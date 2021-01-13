import React, { useEffect, useState } from 'react';
import { Movie } from './api/data/SearchResponse';
import { searchMovies } from './api/OMDb';
import SearchBar from './SearchBar';
import CssBaseline from '@material-ui/core/CssBaseline';

type SearchResults = {
    title: string;
    movies: Movie[];
};

function App() {
    const [searchResults, setSearchResults] = useState<SearchResults>();
    const [nominations, setNominations] = useState<Movie[]>([]);

    useEffect(() => {
        if (nominations.length === 5) {
            window.alert('Thank you! You have nominated 5 movies');
        }
    }, [nominations]);

    function nominate(movie: Movie) {
        if (nominations.length === 5) {
            window.alert('You have already nominated 5 movies');
            return;
        }

        setNominations([...nominations, movie]);
    }

    function removeFromNominations(movie: Movie) {
        setNominations(
            nominations.filter(
                (nomination) => nomination.imdbID !== movie.imdbID
            )
        );
    }

    function isMovieNominated(movie: Movie) {
        return nominations.some(
            (nomination) => nomination.imdbID === movie.imdbID
        );
    }

    return (
        <div className="App">
            <CssBaseline />

            <header>
                <h1>The Shoppies</h1>
            </header>

            <SearchBar
                onSearch={async (title) => {
                    setSearchResults({
                        title,
                        movies: await searchMovies(title),
                    });
                }}
            />

            <div className="SearchResults">
                <h1>Results for {searchResults?.title}</h1>
                <ul>
                    {searchResults?.movies.map((movie) => (
                        <li key={movie.imdbID}>
                            <div className="MovieTitle">
                                {movie.Title} ({movie.Year})
                            </div>
                            <button
                                onClick={() => nominate(movie)}
                                disabled={isMovieNominated(movie)}
                            >
                                Nominate
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="Nominations">
                <h1>Nominations</h1>
                <ul>
                    {nominations.map((movie) => (
                        <li key={movie.imdbID}>
                            <div className="MovieTitle">
                                {movie.Title} ({movie.Year})
                            </div>
                            <button
                                onClick={() => removeFromNominations(movie)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
