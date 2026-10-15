import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { me } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay, className = "" }: { children: ReactNode; delay: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className={`block ${className}`}
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const beamX = useSpring(mx, { stiffness: 40, damping: 20 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const fadeIn = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={(e) => mx.set((e.clientX / window.innerWidth - 0.5) * -48)}
      className="relative h-svh min-h-[680px] overflow-hidden"
    >
      {/* Spotlight beam + drifting fog */}
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ x: beamX }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2.4 }}>
        <div className="absolute -top-10 right-[4%] h-[120%] w-[48%] blur-3xl" style={{ clipPath: "polygon(58% 0, 100% 0, 74% 100%, 18% 100%)", background: "linear-gradient(to bottom, rgba(223,230,238,0.34), rgba(223,230,238,0.04) 80%, transparent)" }} />
        <div className="animate-drift absolute right-[18%] top-[30%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="animate-drift absolute right-[2%] top-[48%] h-64 w-96 rounded-full bg-gold/10 blur-3xl [animation-delay:-6s]" />
      </motion.div>

      {/* Video: plays once, then holds its last frame */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full overflow-hidden md:w-[58%]"
        style={{ maskImage: "linear-gradient(to right, transparent 0%, #000 34%), linear-gradient(to top, transparent 0%, #000 22%)", maskComposite: "intersect", WebkitMaskComposite: "source-in" }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      >
        {reduce ? (
          <img src="/intro-end.jpg" alt="Shreya standing in a spotlight" className="h-full w-full origin-top-left scale-[1.1] object-cover object-[35%_center]" />
        ) : (
          <video className="h-full w-full origin-top-left scale-[1.1] object-cover object-[35%_center]" src="/intro.mp4" poster="/intro-start.jpg" autoPlay muted playsInline preload="auto" aria-label="Shreya walks out of the dark into a spotlight" />
        )}
      </motion.div>

      {/* Copy */}
      <motion.div className="relative z-10 flex h-full max-w-3xl flex-col justify-center px-6 pt-20 md:px-16" style={{ y: textY, opacity: fade }}>
        <h1 className="font-display text-[clamp(2.4rem,6.2vw,5.6rem)] uppercase leading-[1.08] tracking-[0.01em]">
          <Line delay={1.4} className="text-pearl">I build.</Line>
          <Line delay={1.55} className="text-gold">I analyze.</Line>
          <Line delay={1.7} className="text-gold">I automate.</Line>
        </h1>
        <motion.p {...fadeIn(2.2)} className="label mt-8 text-gold-light">AI Engineer &middot; Full-Stack Developer &middot; Data Analyst</motion.p>
        <motion.p {...fadeIn(2.4)} className="mt-4 max-w-md text-lg leading-relaxed text-mute">
          I combine AI, software engineering and data to build intelligent applications, from multi-agent systems to the APIs and dashboards around them.
        </motion.p>
        <motion.div {...fadeIn(2.7)} className="mt-9 flex flex-wrap gap-4">
          <a href="#projects" className="label border border-gold/60 px-6 py-3.5 text-gold-light transition-colors hover:bg-gold/10">Explore my work &#8599;</a>
          <a href={me.resume} download className="label border border-white/15 px-6 py-3.5 text-ink transition-colors hover:border-gold/50">Download resume &#8595;</a>
        </motion.div>
      </motion.div>
    </section>
  );
}