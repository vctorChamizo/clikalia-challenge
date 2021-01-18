import theme from "../styles/theme";
import Meta from "../components/Meta";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Meta />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
