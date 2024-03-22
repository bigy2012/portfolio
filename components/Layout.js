import Head from "next/head";
// import Footter from '@/components/Footter';
import Navbar from '@/components/Navbar';

export default function Home({ children }) {
  return (
    <div>
      <Head>
        <title>Big Wasan</title>
      </Head>
      <Navbar/>
      {children}
    </div>
  );
}
