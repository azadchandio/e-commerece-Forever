
import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import ProductReviews from "../components/ProductReviews";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique cartItemId
import { toast } from "react-toastify"; // Import toast for notifications

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [error, setError] = useState<string>(""); // State for error messages
  const [currentImage, setCurrentImage] = useState<string>(""); // Initialize to empty string
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");
  const { productId } = useParams<{ productId: string }>();
  const product: Product | undefined = products.find((item) => item._id === productId);

  // Set initial image when product changes
  useEffect(() => {
    if (product) {
      const image = Array.isArray(product.image) ? product.image[0] : product.image;
      setCurrentImage(image || "/path/to/fallback-image.png"); // Fallback image
      setSelectedSize(product.sizes[0] || ""); // Pre-select first size
    }
  }, [product]);

  // Add to Cart Handler
  const handleAddToCart = () => {
    if (!product) {
      setError("Product not found");
      toast.error("Product not found");
      return;
    }
    if (!selectedSize) {
      setError("Please select a size");
      toast.error("Please select a size");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    // Check for existing item with same _id and size
    const existingItem = cart.find(
      (item: any) => item._id === product._id && item.size === selectedSize
    );

    let updatedCart;
    if (existingItem) {
      // Update quantity if item exists
      updatedCart = cart.map((item: any) =>
        item._id === product._id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item
      const newItem = {
        ...product,
        size: selectedSize,
        quantity: 1,
        cartItemId: uuidv4(), // Use UUID for unique ID
      };
      updatedCart = [...cart, newItem];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setError(""); // Clear error
    toast.success(`${product.name} (Size: ${selectedSize}) added to cart!`);
    // Dispatch custom event to notify Navbar of cart update
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!product) {
    return <div className="p-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="px-8 py-5 sm:px-8 md:px-16 lg:px-34">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:flex-1">
          <div className="flex lg:flex-col gap-2 lg:gap-4 order-2 lg:order-1 justify-center lg:justify-start overflow-x-auto lg:overflow-x-visible">
            {Array.isArray(product.image) &&
              product.image.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(img)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select image ${index + 1}`}
                  onKeyDown={(e) => e.key === "Enter" && setCurrentImage(img)}
                >
                  <img
                    src={img}
                    alt={`${product.name} image ${index + 1}`}
                    className="rounded w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-cover cursor-pointer hover:border-2 hover:border-gray-900 transition duration-200"
                  />
                </div>
              ))}
          </div>
          <div className="order-1 lg:order-2 flex-1">
            <img
              src={currentImage}
              alt={`${product.name} main image`}
              className="rounded w-full h-auto object-cover max-w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
            />
          </div>
        </div>

        {/* Details */}
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
                  className={`border-2 px-4 py-2.5 ${
                    selectedSize === size ? "border-black" : "border-gray-200"
                  }`}
                  onClick={() => setSelectedSize(size)}
                  aria-label={`Select size ${size}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`${
              !selectedSize ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-black"
            } text-white font-medium px-10 py-3 transition-all duration-300 ease-in-out transform hover:scale-[1.02] rounded-sm`}
            aria-label="Add to cart"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div>
          <button
            className={`border-l border-t px-5 py-3 border-gray-400 cursor-pointer ${
              activeTab === "description"
                ? "bg-white border-b-0"
                : "bg-gray-100 border-b border-gray-400"
            }`}
            onClick={() => setActiveTab("description")}
            aria-label="View description"
          >
            Description
          </button>
          <button
            className={`border-r border-t border-l px-5 py-3 border-gray-400 cursor-pointer ${
              activeTab === "reviews"
                ? "bg-white border-b-0"
                : "bg-gray-100 border-b border-gray-400"
            }`}
            onClick={() => setActiveTab("reviews")}
            aria-label="View reviews"
          >
            Reviews
          </button>
        </div>
        <div className="border border-gray-400 py-15 px-5">
          {activeTab === "description" ? (
            <>
              <p className="mb-5">
                An e-commerce website is an online platform that facilitates the buying and selling
                of products or services over the internet. It serves as a virtual marketplace where
                businesses and individuals can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence. E-commerce websites
                have gained immense popularity due to their convenience, accessibility, and the global
                reach they offer.
              </p>
              <p>
                E-commerce websites typically display products or services along with detailed
                descriptions, images, prices, and any available variations (e.g., sizes, colors).
                Each product usually has its own dedicated page with relevant information.
              </p>
            </>
          ) : (
            <ProductReviews productId={product._id} productName={product.name} />
          )}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center lg:px-28">
        <h2 className="text-2xl font-bold mt-10 mb-5">Related Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products
            .filter((item) => item.category === product.category && item._id !== product._id)
            .slice(0, 5)
            .map((relatedProduct) => (
              <ProductCard key={relatedProduct._id} product={relatedProduct} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
