import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Disciplines = dynamic(() => import('@/components/sections/Disciplines'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const ServicesDetail = dynamic(() => import('@/components/sections/ServicesDetail'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Osteopathy = dynamic(() => import('@/components/sections/Osteopathy'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Team = dynamic(() => import('@/components/sections/Team'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

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
