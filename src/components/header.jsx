import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => (
  <header style={{ display: "flex" }}>
    <h1>Title</h1>
    <nav>
      {items.map((item) => (
        <Link key={item.href} href={item.href}>
          <a style={{ display: "inline-block", padding: 12 }}>{item.label}</a>
        </Link>
      ))}
    </nav>
  </header>
);