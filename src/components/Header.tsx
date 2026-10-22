import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { wedding } from "../config/wedding";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["#events", "Details"],
    ["#story", "Story"],
    ["#messages", "Messages"],
    ["#missions", "Missions"],
    ["#write-to-us", "Write To Us"],
    ["#gift-us", "Gift Us"],
    ["#contact", "Contact"],
  ];
  return (
    <header className={`sticky-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="logo-mark" href="#top" aria-label="Back to top">
        <img
          src={logo}
          alt={`${wedding.couple.groom} and ${wedding.couple.bride}`}
        />
      </a>
      <nav className={`header-nav ${open ? "is-open" : ""}`}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <button
        className="menu-button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
