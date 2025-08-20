import HeroSection from "../components/HeroSection"
import  ProductSection from "../components/ProductSection"
import { latestCollections, bestSellers } from "../assets/dummyData";
import PolicySection from "../components/PolicySection";

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <ProductSection title="Latest Collections" products={latestCollections}/>
        <ProductSection title="Best Seller" products={bestSellers} />
        <PolicySection/>
    </div>
  )
}

export default Home