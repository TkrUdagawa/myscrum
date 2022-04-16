// import "../styles/globals.css";
import React, { useEffect } from 'react'
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
