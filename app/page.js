import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Testimoni from "./components/Testimoni";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Services />
      <Testimoni />
    </main>
  );
}
