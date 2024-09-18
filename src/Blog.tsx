import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {createTheme, PaletteMode, ThemeProvider} from '@mui/material/styles';
import MainContent from './components/MainContent';
// import Latest from './components/Latest';
import Footer from './components/Footer';
import AppAppBar from "./components/AppAppBar.tsx";

// import getBlogTheme from './theme/getBlogTheme';

export default function Blog() {
    const [mode] = React.useState<PaletteMode>('light');
    // const blogTheme = createTheme(getBlogTheme(mode));
    const defaultTheme = createTheme({
        palette: {
            mode,
            primary: {
                main: '#343633',
                // light: will be calculated from palette.primary.main,
                // dark: will be calculated from palette.primary.main,
                contrastText: '#5CC8FF'
            },
            secondary: {
                main: '#DEC1FF',
                light: '#DEC1FF',
                // dark: will be calculated from palette.secondary.main,
                contrastText: '#93867F',
            },
        },
        typography: {
            allVariants: {
                fontFamily: `"Bangers", system-ui`,
},
        },
    });

    // This code only runs on the client side, to determine the system color preference
    // React.useEffect(() => {
    //     // Check if there is a preferred mode in localStorage
    //     const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
    //     if (savedMode) {
    //         setMode(savedMode);
    //     } else {
    //         // If no preference is found, it uses system preference
    //         const systemPrefersDark = window.matchMedia(
    //             '(prefers-color-scheme: dark)',
    //         ).matches;
    //         setMode(systemPrefersDark ? 'dark' : 'light');
    //     }
    // }, []);


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline enableColorScheme/>
            <Container
                maxWidth="lg"
                component="main"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        borderTop: '20px solid #5CC8FF',
                        borderLeft: '20px solid #5CC8FF',
                        boxSizing: 'border-box',
                    },
                }}
            >
                <AppAppBar />

                <MainContent/>
                {/*<Latest />*/}
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}
