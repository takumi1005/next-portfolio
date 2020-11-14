import Head from 'next/head';
import { Footer } from '../components/Footer/footer';
import { Header } from '../components/Header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </>
  );
}
