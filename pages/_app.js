import "../styles/globals.css";
import Layout from "../components/Layout";
// import { Provider as AuthProvider } from "next-auth/client";
import { SessionProvider } from "next-auth/react";
import { store } from "../app/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
