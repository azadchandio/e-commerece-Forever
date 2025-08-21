import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import { products } from "../assets/assets";
import PolicySection from "../components/PolicySection";

const Home = () => {
  // Sort products by latest date (descending)
  const latestCollections = [...products]
    .sort((a, b) => b.date - a.date)
    .slice(0, 8); // optional: only take the latest 8

  const bestSellers =[...products]
    .filter((product) => product.bestseller)
    .slice(0,8); // optional: only take the first 8 best sellers
  // Filter best sellers
  // const bestSellers = products.filter((product) => product.bestseller);

  return (
    <div>
      <HeroSection />
      <ProductSection title="Latest Collections" products={latestCollections} />
      <ProductSection title="Best Seller" products={bestSellers} />
      <PolicySection />
    </div>
  );
};

export default Home;
