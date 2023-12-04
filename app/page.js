import CompanyOverview from "./components/CompanyOverview";
import HeroSection from "./components/HeroSection";
import Testimoni from "./components/Testimoni";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompanyOverview />
      <Services />
      <Testimoni />
    </main>
  );
}
