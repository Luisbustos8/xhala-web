import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const WhoIsFor = dynamic(() => import('@/components/sections/WhoIsFor'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Disciplines = dynamic(() => import('@/components/sections/Disciplines'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const ServicesDetail = dynamic(() => import('@/components/sections/ServicesDetail'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Process = dynamic(() => import('@/components/sections/Process'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Benefits = dynamic(() => import('@/components/sections/Benefits'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Team = dynamic(() => import('@/components/sections/Team'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-2xl" />,
  ssr: false,
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
