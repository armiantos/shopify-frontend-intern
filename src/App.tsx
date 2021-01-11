import React, { useState } from 'react';
import { Movie } from './api/data/SearchResponse';
import { searchMovies } from './api/OMDb';
import SearchBar from './SearchBar';

type SearchResults = {
    title: string;
    movies: Movie[];
};

function App() {
    const [searchResults, setSearchResults] = useState<SearchResults>();
    const [nominations, setNominations] = useState<Movie[]>([]);

    return (
        <div className="App">
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
                            {movie.Title} ({movie.Year})
                        </li>
                    ))}
                </ul>
            </div>

            <div className="Nominations">
                <h1>Nominations</h1>
                <ul>
                    {nominations.map((movie) => (
                        <li key={movie.imdbID}>
                            {movie.Title} ({movie.Year})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
