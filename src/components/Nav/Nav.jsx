import Link from "next/link";
import Style from "./Nav.module.scss";
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => (
  <nav className={Style.nav}>
    <Link key={items[0].href} href={items[0].href}>
      <HomeIcon fontSize="large">
        <a>{items[0].label}</a>
      </HomeIcon>
    </Link>
    <Link key={items[1].href} href={items[1].href}>
      <InfoIcon fontSize="large">
        <a>{items[1].label}</a>
      </InfoIcon>
    </Link>
    <Link key={items[2].href} href={items[2].href}>
      <WorkIcon fontSize="large">
        <a>{items[2].label}</a>
      </WorkIcon>
    </Link>
    <Link key={items[3].href} href={items[3].href}>
      <ContactMailIcon fontSize="large">
        <a>{items[3].label}</a>
      </ContactMailIcon>
    </Link>
  </nav>
);