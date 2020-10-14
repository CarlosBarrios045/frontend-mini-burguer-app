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

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from "date-fns/locale/es";

import theme from "../theme";

// API
// import { profile } from "../api/urls";

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
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
              <Container>
                <Component {...pageProps} />
              </Container>
            </MuiPickersUtilsProvider>
          </ApolloConnect>
        </StyledProvider>
      </ThemeProvider>
    </>
  );
};

export default AppWrapper;
