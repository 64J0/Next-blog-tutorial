import React from "react";
import type { AppProps } from "next/app";

import "../styles/_global.scss";
import "../styles/_layout.scss";
import "../styles/_colors.scss";

// Para o Highligh.js
import "highlight.js/styles/agate.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default App;
