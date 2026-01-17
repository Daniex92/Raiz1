import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import BrandStory from './components/BrandStory';
import CustomOrders from './components/CustomOrders';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <CustomOrders />
      <Footer />
    </div>
  );
}

export default App;
