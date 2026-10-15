import { me } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-12 pt-32 text-center md:px-16 md:pt-44">
      <h2 className="text-gold font-display text-[clamp(3rem,8vw,7.5rem)] uppercase leading-[0.95]">Let&apos;s build<br />something.</h2>
      <a href={`mailto:${me.email}`} className="mt-10 inline-block text-xl text-gold-light underline decoration-gold/40 underline-offset-8 hover:decoration-gold md:text-2xl">{me.email}</a>
      <div className="label mt-8 flex justify-center gap-8 text-mute">
        <a href={me.linkedin} className="hover:text-gold-light">LinkedIn</a>
        <a href={me.github} className="hover:text-gold-light">GitHub</a>
      </div>
      <p className="label mt-24 text-[0.62rem] text-mute/60">&copy; 2026 {me.name}</p>
    </section>
  );
}
