import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32 md:px-16 md:py-44">
      <h2 className="text-gold mb-14 font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.95]">Precision applied.</h2>
      <div className="grid gap-5 md:grid-cols-6">
        {skills.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className={`panel p-8 transition-shadow duration-500 hover:shadow-[0_0_50px_-15px_rgba(223,230,238,0.45)] ${s.span}`}
          >
            <h3 className="text-gold-light font-display text-3xl uppercase">{s.title}</h3>
            <p className="mt-3 max-w-md text-mute">{s.desc}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {s.chips.map((c) => (
                <li key={c} className="label border border-gold/30 px-3 py-1.5 text-[0.62rem] text-ink">{c}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
