import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/scroll-observer";
import SizeObserver from "../utils/size-observer";
import Maintenance from "../components/maintenance";

function MyApp({ Component, pageProps }: AppProps) {
return (
  <Maintenance/>
  );
}

export default MyApp;
