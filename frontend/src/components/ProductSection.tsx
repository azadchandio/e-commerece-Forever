import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <div className="px-8 py-5 md:px-16 lg:px-34">
      <div className="flex flex-col items-center justify-center px-8 py-16">
        <h1 className="text-3xl font-bold text-center my-2">{title}</h1>
        <p className="text-gray-400 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8">
        {products.slice(0,8).map((product: Product, index: number) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
