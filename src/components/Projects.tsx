import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { projects, type Project } from "../data/content";

function Card({ p, i, n, progress }: { p: Project; i: number; n: number; progress: MotionValue<number> }) {
  const scale = useTransform(progress, [Math.min((i + 1) / n, 0.99), 1], [1, 1 - 0.05 * (n - 1 - i)]);
  return (
    <motion.div style={{ scale, top: 110 + i * 28 }} className="sticky mb-[22vh] origin-top last:mb-0">
      <article className="grid gap-8 rounded-2xl border border-gold/25 bg-[#09090b] p-7 shadow-[0_0_60px_-20px_rgba(223,230,238,0.25)] md:grid-cols-[1.4fr_1fr] md:p-12">
        <div>
          <p className="label text-gold/80">{p.tag}</p>
          <h3 className="text-gold mt-4 font-display text-[clamp(2.2rem,4.5vw,4rem)] uppercase leading-[0.98]">{p.title}</h3>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">{p.desc}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <li key={s} className="label border border-gold/30 px-3 py-1.5 text-[0.62rem] text-gold-light">{s}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <div>
            <p className="label text-[0.62rem] text-mute">{"//"} Details</p>
            <dl className="mt-4 space-y-4">
              {p.details.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3 text-sm">
                  <dt className="text-mute">{k}</dt>
                  <dd className="text-right text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          {p.href && <a href={p.href} className="label border border-gold/50 px-5 py-3 text-center text-gold-light transition-colors hover:bg-gold/10">View on GitHub &#8599;</a>}
        </div>
      </article>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <section id="projects" className="px-6 py-24 md:px-16">
      <h2 className="mb-16 font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.95]">
        <span className="text-pearl block">Selected works.</span>
        <span className="text-gold block">Engineered value.</span>
      </h2>
      <div ref={ref}>
        {projects.map((p, i) => (
          <Card key={p.title} p={p} i={i} n={projects.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}