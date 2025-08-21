// components/ProductCard.tsx
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product"; 

const ProductCard = ({ product }: { product: Product }) => {

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate(`/product/${product._id}`);
  }
  return (
    <div onClick={handleClick} className="shadow hover:shadow-lg transition duration-300">
      <img src={Array.isArray(product.image) ? product.image[0] : product.image} alt={product.name} className="w-full aspect-[3/4] md:h-80 object-cover rounded mb-4 cursor-pointer"/>
      <p className="text-gray-600 font-semibold">{product.name}</p>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
