import { createTheme } from "@mui/material";

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    darker?: string;
    contrastText?: string;
}

export const theme = createTheme({
    palette: {
        primary: <PaletteColor>{
            main: "#CB11AB",
            dark: "#384255",
            darker: "#292929",
            light: "#909CB5",
        },
        secondary: {
            main: "#292929",
        },
        success: {
            main: "#3CDE14",
            dark: "#2FC504",
        },
        error: {
            main: "#F10000",
        },
        info: {
            main: "#2C68F5",
        },
    },
});
