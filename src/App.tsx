import React from 'react';
import { searchMovie } from './api/OMDb';
import SearchBar from './SearchBar';

function App() {
    return (
        <div className="App">
            <header>The Shoppies</header>
            <SearchBar
                onSearch={async (title) => {
                    console.log(await searchMovie(title));
                }}
            />
        </div>
    );
}

export default App;
