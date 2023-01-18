import { createTheme } from "@mui/material";
import { appFontFamily } from "../../utils/constants";

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
            main: "#CB11AB",
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
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    textTransform: "capitalize",
                    color: "#CB11AB",
                    backgroundColor: "#fff",
                    border: "1.5px solid #CB11AB",
                    width: "128px",
                    height: "40px",
                    borderRadius: "4px",
                    fontSize: "16px",

                    ":hover": {
                        color: "#fff",
                        backgroundColor: "#CB11AB",
                        border: "1.5px solid #CB11AB",
                    },
                },
                outlined: {
                    textTransform: "capitalize",
                    width: "213px",
                    height: "40px",
                    border: "1.5px solid #CB11AB",
                    borderRadius: "4px",
                    fontSize: "16px",
                    ":hover": {
                        color: "#fff",
                        backgroundColor: "#CB11AB",
                        border: "1.5px solid #CB11AB",
                    },
                },
                text: {
                    textTransform: "capitalize",
                    width: "99px",
                    height: "39px",
                    border: "1.5px solid #CB11AB",
                    borderRadius: "4px",
                    backgroundColor: "#CB11AB",
                    color: "#fff",
                    fontSize: "16px",
                    ":hover": {
                        color: "#fff",
                        backgroundColor: "#CB11AB",
                        border: "1.5px solid #CB11AB",
                    },
                },
            },
        },
    },
});
