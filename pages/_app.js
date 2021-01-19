import theme from "../styles/theme";
import Meta from "../components/Meta";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles";
import { Navbar } from "../components/molecules/Navbar/Navbar.molecule";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Meta />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
