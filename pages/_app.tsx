import "styles/globals.css";
import customTheme from "styles/themes";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS={false} theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
