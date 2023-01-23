import { createTheme } from '@mui/material';
import { appFontFamily } from '../../utils/constants';

export const theme = createTheme({
    typography: {
        fontFamily: appFontFamily,
        h1: {
            fontFamily: appFontFamily,
        },
        h2: {
            fontFamily: appFontFamily,
        },
        h3: {
            fontFamily: appFontFamily,
        },
        body1: {
            fontFamily: appFontFamily,
        },
    },
    palette: {
        primary: {
            main: '#CB11AB',
            light: '#909CB5',
        },
        secondary: {
            main: '#292929',
        },
        success: {
            main: '#3CDE14',
            dark: '#2FC504',
        },
        error: {
            main: '#F10000',
        },
        info: {
            main: '#2C68F5',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                sx: {
                    textTransform: 'capitalize',
                    border: '1.5px solid #CB11AB',
                    borderRadius: '4px',
                    fontSize: '16px',
                },
            },
            styleOverrides: {
                contained: {
                    color: '#fff',
                    backgroundColor: '#CB11AB',
                    width: '128px',
                    height: '40px',
                    ':hover': {
                        backgroundColor: '#E313BF',
                    },
                },
                outlined: {
                    width: '213px',
                    height: '40px',
                    ':hover': {
                        color: '#fff',
                        border: '1.5px solid #CB11AB',
                        backgroundColor: '#CB11AB',
                    },
                },
                text: {
                    width: '99px',
                    height: '39px',
                    color: '#fff',
                    backgroundColor: '#E313BF',
                    ':hover': {
                        backgroundColor: '#CB11AB',
                    },
                },
                containedSuccess: {
                    backgroundColor: '#2FC509',
                },
            },
        },
    },
});
