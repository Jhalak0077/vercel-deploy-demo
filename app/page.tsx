import { Metadata } from 'next';
import { HeroSection, NewsLetter } from '@/components/organisms';
import AboutUs from '@/components/organisms/AboutUs';
import NewsAndBlog from '@/components/organisms/NewsAndBlog';
import Services from '@/components/organisms/Services';
import Faq from '@/components/organisms/Faq';
import BackgroundWrapper from '@/components/molecules/BackGroundWrapper';

export const metadata: Metadata = {
  title: 'Thabho',
  description: '#NOWIKNOW',
};

export default function HomePage() {
  return (
    <main className="">
      {/* <Navbar /> */}
      <HeroSection />
      <BackgroundWrapper>
        <AboutUs />
        <NewsAndBlog />
        <Services />
        <Faq />
      </BackgroundWrapper>
    </main>
  );
}
