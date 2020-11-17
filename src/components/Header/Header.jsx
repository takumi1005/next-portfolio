import React from 'react';
import Link from 'next/link';
import Style from './Header.module.scss';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export const Header = () => {
  return (
    <div className={Style.header}>
      <div className={Style.name}>
        Takumi Motohashi
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>
              <HomeIcon style={{ fontSize: 50 }} />
              <p>Home</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              <InfoIcon style={{ fontSize: 50 }} />
              <p>About</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/works">
            <a>
              <WorkIcon style={{ fontSize: 50 }} />
              <p>Works</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>
              <ContactMailIcon style={{ fontSize: 50 }} />
              <p>Contact</p>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
