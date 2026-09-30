import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Achievements />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
