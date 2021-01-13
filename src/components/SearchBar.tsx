import React, { useState } from 'react';

type SearchProps = {
    onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ onSearch }: SearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="SearchBar">
            <input
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearch(searchTerm);
                    }
                }}
            />
        </div>
    );
}
