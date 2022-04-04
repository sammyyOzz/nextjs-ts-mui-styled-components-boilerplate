import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import { muiLightThemeOptions } from '../styles/theme/muiLightThemeOptions';
import '../styles/globals.css';
import { styled_components_theme } from '../styles/theme/styled-components-theme';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(muiLightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <StyledComponentsThemeProvider theme={styled_components_theme}>
        <MuiThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </StyledComponentsThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
