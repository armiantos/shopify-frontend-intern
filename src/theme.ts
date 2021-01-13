import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans', '-apple-system', 'sans-serif'].join(','),
        h1: {
            fontWeight: 700,
            fontSize: 48,
        },
        h2: {
            fontWeight: 600,
            fontSize: 32,
        },
        h3: {
            fontWeight: 400,
            fontSize: 26,
        },
    },
});

export default theme;
