import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../api/data/SearchResponse';

type ClickableMovieProps = {
    movie: Movie;
    buttonText: string;
    onClick: (movie: Movie) => void;
    isClickDisabled?: boolean;
};

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(1),
    },
}));

function ClickableMovie({
    movie,
    buttonText,
    onClick,
    isClickDisabled,
}: ClickableMovieProps) {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="center">
            <Typography variant="body1">
                {movie.Title} ({movie.Year})
            </Typography>
            <Button
                className={classes.button}
                size="small"
                disableElevation
                onClick={() => onClick(movie)}
                disabled={isClickDisabled ?? false}
                variant="contained"
            >
                {buttonText}
            </Button>
        </Box>
    );
}

export default ClickableMovie;
