import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

type Props = {
  id: string;
  lead?: string;
  accent: string;
  items: [string, string, string][];
};

export default function Timeline({ id, lead, accent, items }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  return (
    <section id={id} className="px-6 py-28 md:px-16 md:py-36">
      <h2 className="mb-16 font-display text-[clamp(2.8rem,6vw,5.5rem)] uppercase leading-[0.95]">
        {lead && <span className="text-pearl">{lead} </span>}
        <span className="text-gold">{accent}</span>
      </h2>
      <div ref={ref} className="relative max-w-3xl pl-10">
        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gold/15" />
        <motion.div className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gold shadow-[0_0_12px_rgba(223,230,238,0.8)]" style={{ scaleY: scrollYProgress }} />
        {items.map(([when, what, detail]) => (
          <motion.div
            key={what}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative pb-14 last:pb-0"
          >
            <span className="absolute -left-10 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-gold bg-night" />
            <p className="label text-gold/80">{when}</p>
            <h3 className="mt-2 font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">{what}</h3>
            <p className="mt-2 max-w-xl text-mute">{detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}