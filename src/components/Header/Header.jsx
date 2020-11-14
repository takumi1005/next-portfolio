import Link from "next/link";
import Style from "./Header.module.scss"

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => (
  <header className={Style.header}>
    <div className={Style.title}>Title</div>
    <nav className={Style.nav}>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a>{item.label}</a>
        </Link>
      ))}
    </nav>
  </header>
);