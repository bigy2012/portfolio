import Head from "next/head";
// import Footter from '@/components/Footter';
import Navbar from '@/components/Navbar';
import Footer from "./Footer";

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>Big Wasan</title>
      </Head>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  );
}
