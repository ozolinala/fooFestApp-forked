import "@/styles/globals.css";
import Layout from "@/layouts/Layout";
import { StoreProvider } from "@/contexts/storeContext";
export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
