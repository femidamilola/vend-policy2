import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
