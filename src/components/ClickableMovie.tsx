import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../api/data/SearchResponse';

type ClickableMovieProps = {
    movie: Movie;
    onClick: (movie: Movie) => void;
    isClickDisabled?: boolean;
};

function ClickableMovie({
    movie,
    onClick,
    isClickDisabled,
}: ClickableMovieProps) {
    return (
        <Box display="flex" alignItems="center">
            <Typography variant="body1">
                {movie.Title} ({movie.Year})
            </Typography>
            <Button
                onClick={() => onClick(movie)}
                disabled={isClickDisabled ?? false}
                variant="contained"
            >
                Nominate
            </Button>
        </Box>
    );
}

export default ClickableMovie;
