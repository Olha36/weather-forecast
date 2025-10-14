import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Nature from '@/components/Nature/Nature';
import Weather from '@/components/Weather/Weather';

export default function Home() {
  return (
    <>
      <Header />
      <Weather />
      <Nature />
      <Footer />
    </>
  );
}
