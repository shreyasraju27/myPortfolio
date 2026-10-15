import { useEffect, useState } from "react";

    const links = ["about", "projects", "skills", "experience", "education", "achievements"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 md:px-16 ${solid ? "bg-night/70 backdrop-blur-md" : ""}`}>
      <span/>
      <nav className="hidden gap-10 md:flex">
        {links.map((l) => (
          <a key={l} href={`#${l}`} className={`label transition-colors hover:text-gold-light ${active === l ? "text-gold" : "text-mute"}`}>
            {l}
          </a>
        ))}
      </nav>
      <a href="#contact" className="label border border-gold/50 px-5 py-2.5 text-gold-light transition-colors hover:bg-gold/10">
        Let&apos;s talk
      </a>
    </header>
  );
}
