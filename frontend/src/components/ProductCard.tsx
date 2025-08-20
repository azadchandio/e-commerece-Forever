// components/ProductCard.tsx
import type { Product } from "../types/Product"; 

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="shadow hover:shadow-lg transition duration-300">
      <img src={product.image} alt={product.name} className="w-full aspect-[3/4] h-80 object-cover rounded mb-4 cursor-pointer"/>
      <p className="text-gray-600 font-semibold">{product.name}</p>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
