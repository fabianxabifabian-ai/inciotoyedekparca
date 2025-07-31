import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Services />
      <About />
      <Contact />
    </Layout>
  );
} 