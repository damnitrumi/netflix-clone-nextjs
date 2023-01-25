import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import { GlobalStyles } from "../styles/global-styles";
import "../../public/assets/fonts/styles.css";
import { ModalContextProvider } from "components/contexts/ModalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <ModalContextProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </ModalContextProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
