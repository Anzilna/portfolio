import Hero from "@/components/Hero";
import About from "@/components/About";
import MarqueeDivider from "@/components/MarqueeDivider";
import Experience from "@/components/Experience";
import WhatIDo from "@/components/WhatIDo";
import SelectedWork from "@/components/SelectedWork";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MarqueeDivider label="Work" />
      <Experience />
      <WhatIDo />
      <MarqueeDivider label="Projects" />
      <SelectedWork />
      <Connect />
    </main>
  );
}
