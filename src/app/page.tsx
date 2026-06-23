import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Disciplines from '@/components/sections/Disciplines';
import ServicesDetail from '@/components/sections/ServicesDetail';
import Osteopathy from '@/components/sections/Osteopathy';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Disciplines />
      <ServicesDetail />
      <Osteopathy />
      <Team />
      <Contact />
    </>
  );
}
