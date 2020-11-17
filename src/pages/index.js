import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import Link from 'next/link';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <h1>
          <span>T</span>akumi <span>M</span>otohashi
        </h1>
        <h3>Portfolio</h3>
        <div className="page-nav">
          <Link href="/about">
            <a>
              <InfoIcon style={{ fontSize: 80, color: '#795548' }} />
              <p>About</p>
            </a>
          </Link>
          <Link href="/works">
            <a>
              <WorkIcon style={{ fontSize: 80, color: '#795548' }} />
              <p>Works</p>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <ContactMailIcon style={{ fontSize: 80, color: '#795548' }} />
              <p style={{ paddingLeft: 8 }}>Contact</p>
            </a>
          </Link>
        </div>
        <div className="link-nav">
          <Link href="https://github.com/takumi1005">
            <a>
              <GitHubIcon style={{ fontSize: 40 }} />
            </a>
          </Link>
          <Link href="https://twitter.com/tinaka1005">
            <a>
              <TwitterIcon style={{ fontSize: 40 }} />
            </a>
          </Link>
          <Footer />
        </div>
        <style jsx>{`
          .wrapper {
            width: 100%;
            min-height: 100vh;
            position: relative;
            background-color: #2a2a2a;
          }
          h1 {
            color: #616161;
            font-size: 100px;
            margin: 0;
            border-bottom: 1px solid #000;
            border-top: 80px solid #000;
          }
          span {
            color: #efebe9;
          }
          h3 {
            letter-spacing: 0.1em;
            font-size: 50px;
            color: #616161;
            text-align: right;
            margin: 0;
          }
          .page-nav {
            display: flex;
            justify-content: center;
            margin-top: 160px;
          }
          .link-nav {
            display: flex;
            justify-content: center;
            margin-top: 120px;
          }
          p {
            font-family: sans-serif;
            color: #8c7b75;
            margin: 0;
            padding-left: 14px;
          }
          a {
            margin-right: 40px;
          }
          a:hover {
            opacity: 0.7;
          }
        `}</style>
      </div>
    </>
  );
}
