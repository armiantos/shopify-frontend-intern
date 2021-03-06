import React, { useEffect, useState } from 'react';
import { Movie } from './api/data/SearchResponse';
import { searchMovies } from './api/OMDb';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nominate, remove } from './redux/actions';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchBar from './components/SearchBar';
import ClickableMovie from './components/ClickableMovie';
import Banner from './components/Banner';

import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { NominateRemoveAction, State } from './redux/reducer';

type SearchResults = {
    title: string;
    movies: Movie[];
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    title: {
        marginTop: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(1),
    },
    item: {
        marginBottom: theme.spacing(1),
    },
}));

function mapStateToProps(state: State) {
    return {
        nominations: state.nominations,
    };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({ nominate, remove }, dispatch);
}

type AppProps = {
    nominations: Movie[];
};

type DispatchProps = {
    nominate: (movie: Movie) => NominateRemoveAction;
    remove: (movie: Movie) => NominateRemoveAction;
};

type Props = AppProps & DispatchProps;

function App({ nominations, nominate, remove }: Props) {
    const [searchResults, setSearchResults] = useState<SearchResults>();

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const classes = useStyles();

    useEffect(() => {
        if (nominations.length === 5) {
            setMessage('Thank you! You have nominated 5 movies.');
            setOpen(true);
        }
    }, [nominations]);

    function isMovieNominated(movie: Movie) {
        return nominations.some(
            (nomination) => nomination.imdbID === movie.imdbID
        );
    }

    return (
        <Box className={classes.root} display="flex" justifyContent="center">
            <div className="App">
                <CssBaseline />

                <ThemeProvider theme={theme}>
                    <Banner open={open} setOpen={setOpen} content={message} />

                    <header>
                        <Typography variant="h1" className={classes.title}>
                            The Shoppies
                        </Typography>
                    </header>

                    <Paper className={`Search ${classes.paper}`}>
                        <Typography variant="h3" gutterBottom>
                            Movie title
                        </Typography>
                        <SearchBar
                            onSearch={async (title) => {
                                setSearchResults({
                                    title,
                                    movies: await searchMovies(title),
                                });
                            }}
                        />
                    </Paper>

                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <Paper className={`SearchResults ${classes.paper}`}>
                                <Typography variant="h2" gutterBottom>
                                    Results for {searchResults?.title}
                                </Typography>
                                <ul>
                                    {searchResults?.movies.map((movie) => (
                                        <li
                                            key={movie.imdbID}
                                            className={classes.item}
                                        >
                                            <ClickableMovie
                                                movie={movie}
                                                buttonText="Nominate"
                                                onClick={nominate}
                                                isClickDisabled={isMovieNominated(
                                                    movie
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <Paper className={`Nominations ${classes.paper}`}>
                                <Typography variant="h2" gutterBottom>
                                    Nominations
                                </Typography>
                                <ul>
                                    {nominations.map((movie) => (
                                        <li
                                            key={movie.imdbID}
                                            className={classes.item}
                                        >
                                            <ClickableMovie
                                                movie={movie}
                                                buttonText="Remove"
                                                onClick={remove}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </Box>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
