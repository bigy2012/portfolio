import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className={`bg--light w-full min-h-screen dark:bg-dark`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
