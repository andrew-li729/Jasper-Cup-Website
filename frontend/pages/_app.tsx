import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import ".//globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
