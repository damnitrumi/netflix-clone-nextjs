import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { GlobalStyles } from "../styles/global-styles";
import "../../public/assets/fonts/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
