import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { experience, education, achievements } from "./data/content";
import { useLenis } from "./lib/useLenis";

export default function App() {
  useLenis();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline id="experience" accent="Experience." items={experience} />
        <Timeline id="education" accent="Education." items={education} />
        <Timeline id="achievements" lead="Achievements &" accent="certifications." items={achievements} />
        <Contact />
      </main>
    </>
  );
}