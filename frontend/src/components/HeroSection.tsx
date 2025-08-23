import heroImage from "../assets/frontend_assets/hero_img.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col mx-8 md:flex-row items-center justify-between gap-6 md:mx-16 lg:mx-36 border-r border-b border-l border-gray-400 ">
      <div className="flex-1 pl-12 pt-8">
        <p className="text-sm uppercase text-gray-500">___Our Bestsellers</p>
        <h1 className="text-4xl font-bold mb-4 font-prata">Latest Arrivals</h1>
        <p className="text-lg text-gray-500">Shop Now___</p>
      </div>
      <div className="flex-1 ">
        <img src={heroImage} alt="Hero" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;