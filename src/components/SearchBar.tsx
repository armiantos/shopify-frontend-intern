import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

type SearchProps = {
    onSearch: (searchTerm: string) => void;
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

export default function SearchBar({ onSearch }: SearchProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.root}>
            <SearchIcon color="action" />
            <InputBase
                className={classes.input}
                inputProps={{ 'aria-label': 'Search' }}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onSearch(searchTerm);
                    }
                }}
            />
        </Paper>
    );
}
