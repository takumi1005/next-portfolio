import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Footer />
    </>
  );
}
