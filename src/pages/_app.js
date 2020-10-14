import React, { useEffect } from "react";

// Next
import Head from "next/head";

// Apollo Connect
import ApolloConnect from "src/hooks/ApolloConnect";

// Material UI
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledProvider } from "styled-components";
import { CssBaseline } from "@material-ui/core";

// Layout
import Container from "src/components/Atoms/Container";

// Reset Styles
import GlobalResets from "src/theme/globalResets";

import theme from "../theme";

const AppWrapper = ({ Component, pageProps }) => {
  // on Mount
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Burguer App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          {/* Reset CSS */}
          <CssBaseline />
          <GlobalResets />
          <ApolloConnect>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ApolloConnect>
        </StyledProvider>
      </ThemeProvider>
    </>
  );
};

export default AppWrapper;
