import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const WhoIsFor = dynamic(() => import('@/components/sections/WhoIsFor'), {
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

const Process = dynamic(() => import('@/components/sections/Process'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Benefits = dynamic(() => import('@/components/sections/Benefits'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Team = dynamic(() => import('@/components/sections/Team'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="h-screen" />,
  ssr: true,
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
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
      <WhoIsFor />
      <Disciplines />
      <ServicesDetail />
      <Process />
      <Benefits />
      <Team />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
