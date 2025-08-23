import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import type { Product } from "../types/Product";
import  ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductReviews from "../components/ProductReviews";

const ProductDetail = () => {

  const { productId } = useParams<{ productId: string }>();
  const product: Product | undefined = products.find(
    (item) => item._id === productId
  );

  const [currentImage, setCurrentImage] = useState<string>(
    Array.isArray(product?.image) ? product.image[0] : product?.image || ""
  );

    // Add state for active tab
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  // Inside the component, after the `useState` declaration
useEffect(() => {
  if (product) {
    setCurrentImage(Array.isArray(product.image) ? product.image[0] : product.image || "");
  }
}, [product]); // re-run when the product changes

  if (!product) return <div className="p-10 text-red-500">Product not found</div>;

  return (
    <div className="px-8 py-5  sm:px-8 md:px-16 lg:px-34">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:flex-1">
          <div className="flex lg:flex-col gap-2 lg:gap-4 order-2 lg:order-1 justify-center lg:justify-start overflow-x-auto lg:overflow-x-visible">
            {product.image.map((img,index)=>(
              <div key={index}
              onClick={() => setCurrentImage(img)} >
                <img src={img} alt={`${product.name} ${index + 1}`} className="rounded w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover cursor-pointer hover:border-2 hover:border-gray-900 transition duration-200"/>
              </div>
            ))}
          </div>
          <div className="order-1 lg:order-2 flex-1">
          <img src={currentImage} alt={product.name} className="rounded w-full h-auto object-cover max-w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"/>
        </div>  
        </div>
        
            {/* deatils */}
        <div className="lg:flex-1 mt-4 lg:mt-0">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-xl font-medium mb-6">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 leading-relaxed mb-8">{product.description}</p>

          <div className="mb-8">
            <p className="text-gray-500 font-bold mb-4">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="border-2 border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-50 transition-all duration-200 rounded-sm cursor-pointer">
                  {size}
                </button>
              ))}   
            </div>
          </div>
            <button className="bg-gray-900 hover:bg-black text-white font-medium px-10 py-3 transition-all duration-300 ease-in-out transform hover:scale-[1.02] rounded-sm cursor-pointer">
              Add to Cart
            </button>
        </div>
      </div> 

        <div className="flex flex-col mt-10 ">
          <div>
            <button className={`border-l border-t  px-5 py-3 border-gray-400 cursor-pointer
              ${activeTab === 'description'
              ? 'bg-white borber-b-0'
              : 'bg-gray-100 borber-b border-gray-400' }`}
              onClick={()=>setActiveTab('description')}
              >
              Description</button>

            <button className={`border-r border-t border-l px-5 py-3 border-gray-400 cursor-pointer 
              ${activeTab === 'reviews'
              ? 'bg-white border-b-0'
              : 'bg-gray-100 border-b border-gray-400'
              }`}
              onClick={()=>setActiveTab('reviews')}
              >
              Reviews</button>
          </div>
          {/* desc area review area */}
          <div className="border border-gray-400 py-15 px-5 ">
            {activeTab === 'description'?(
              <>
              <p className="mb-5">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
              </>
            ):(
              <ProductReviews productId={product._id} productName={product.name}/>
            )}
          </div>
        </div>

         <div className="mt-20 flex flex-col items-center lg:px-28">
          <h2 className="text-2xl font-bold mt-10 mb-5 ">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products
              .filter((item) => item.category === product.category && item._id !== product._id)
              .slice(0, 5)
              .map((relatedProduct) => (
                <ProductCard key={relatedProduct._id} product={relatedProduct} />
              ))}
          </div>

          {/* <ProductSection title="Related Products" products={products.filter((item) => item.category === product.category && item._id !== product._id).slice(0, 5)} /> */}
        </div>
      </div>
  );
};

export default ProductDetail;
