import React, { useState } from 'react';
import { searchMovies } from './api/OMDb';
import Movie from './data/Movie';
import SearchBar from './SearchBar';

type SearchResults = {
    title: string;
    movies: Movie[];
};

function App() {
    const [searchResults, setSearchResults] = useState<SearchResults>();

    return (
        <div className="App">
            <header>The Shoppies</header>
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
                        <li key={movie.title}>
                            {movie.title} ({movie.year})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
