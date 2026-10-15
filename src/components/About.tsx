import { motion } from "framer-motion";
import { me } from "../data/content";

const reveal = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const } };

export default function About() {
  return (
    <section id="about" className="grid gap-16 px-6 py-32 md:grid-cols-[1.2fr_1fr] md:items-center md:px-16 md:py-44">
      <motion.div {...reveal}>
        <h2 className="space-y-4 font-display text-[clamp(1.9rem,3.8vw,3.4rem)] uppercase leading-[1.05]">
          <span className="text-pearl block">Think beyond limits.</span>
          <span className="text-gold block">Engineer with purpose.</span>
          <span className="text-pearl block">Build with intent.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
          I&apos;m <span className="text-gold-light">{me.name}</span>, curious by nature, always learning, and happiest when turning an idea into something real. I love exploring how AI, software, and data come together, challenging myself with unfamiliar problems, and building things that make a difference.
        </p>
      </motion.div>

      <motion.div {...reveal} className="relative mx-auto w-full max-w-sm">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-gold/30">
          <img src="/intro-end.jpg" alt="Portrait of Shreya" className="h-full w-full origin-top-left scale-[1.12] object-cover object-[62%_top]" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
          <span className="text-gold-light absolute bottom-4 right-5 font-script text-5xl -rotate-6">Shreya</span>
        </div>
        {["-left-2 -top-2 border-l-2 border-t-2", "-right-2 -top-2 border-r-2 border-t-2", "-bottom-2 -left-2 border-b-2 border-l-2", "-bottom-2 -right-2 border-b-2 border-r-2"].map((c) => (
          <span key={c} aria-hidden className={`absolute h-6 w-6 border-gold ${c}`} />
        ))}
      </motion.div>
    </section>
  );
}