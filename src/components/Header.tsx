import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { wedding } from "../config/wedding";

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
    ["#random-us", "Random Us"],
    ["#gift-us", "Gift Us"],
    ["#contact", "Contact"],
  ];
  return (
    <header className={`sticky-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="logo-mark" href="#top" aria-label="Back to top">
        {wedding.couple.monogram}
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
