import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import Link from 'next/link';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30%',
        }}
      >
        <Link href="/about">
          <a>
            <InfoIcon style={{ fontSize: 80, marginRight: 32 }}></InfoIcon>
            <p>About</p>
          </a>
        </Link>
        <Link href="/work">
          <a>
            <WorkIcon style={{ fontSize: 80, marginRight: 32 }}></WorkIcon>
            <p>Works</p>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <ContactMailIcon
              style={{ fontSize: 80, marginRight: 32 }}
            ></ContactMailIcon>
            <p>Contact</p>
          </a>
        </Link>
      </nav>
      <Footer />
    </>
  );
}
