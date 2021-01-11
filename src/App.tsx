import React, { useState } from 'react';
import { OMDbMovie } from './api/data/OMDbSearchResponse';
import { searchMovies } from './api/OMDb';
import SearchBar from './SearchBar';

type SearchResults = {
    title: string;
    movies: OMDbMovie[];
};

function App() {
    const [searchResults, setSearchResults] = useState<SearchResults>();

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
        </div>
    );
}

export default App;
