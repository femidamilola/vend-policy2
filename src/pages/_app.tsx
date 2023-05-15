import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";
import  store  from "../store/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Nav></Nav>
          <Component {...pageProps} />
          <Footer></Footer>
        </PersistGate>
      </Provider>
    </>
  );
}
