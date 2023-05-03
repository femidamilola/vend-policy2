import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import { store } from "../store/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        {" "}
        <Nav></Nav>
        <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    </>
  );
}
