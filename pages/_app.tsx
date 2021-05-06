import React from "react";
import type { AppProps } from "next/app";

import "../styles/global.css";
import "../styles/colors.css";
import "../styles/dracula-clone/index.css";

// Para o Highligh.js
import "highlight.js/styles/agate.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default App;
