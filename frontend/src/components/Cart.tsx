// components/Cart.tsx
import { useState } from "react";
import { dummyCartData } from "../assets/assets";
import bin from "../assets/frontend_assets/bin_icon.png";
import line from "../assets/frontend_assets/Rectangle 3147.png"
import { useNavigate } from "react-router-dom";
type CartItem = typeof dummyCartData[0];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(dummyCartData);
  const navigate = useNavigate();

  const updateQuantity = (cartItemId: string, change: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.cartItemId === cartItemId
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change), // prevent 0
            }
          : item
      )
    );
  };

  const removeItem = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  // Calculate subtotal (sum of all items)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate shipping (free if subtotal > $50, otherwise $10)
  const shippingCost = subtotal > 5000 ? 0 : 300;

  // Calculate total (subtotal + shipping)
  const total = subtotal + shippingCost;

  return (
    <div className="px-8 pt-5 md:px-16 lg:px-36 mt-20">
      <div className="flex items-center mb-6 pb-8 border-b border-gray-400 gap-2">
        <h2 className="text-3xl "><span className="text-gray-500">Your</span> Cart</h2>
        <img src={line} alt="" />
      </div>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.cartItemId}
                className="flex items-center justify-between border-b border-gray-400 pb-4"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <div className="flex gap-2 items-center">
                    <p className="text-2xl text-gray-600">${item.price}</p>
                    <p className="text-sm text-gray-600 px-3 py-2 border border-gray-300 bg-gray-100">{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, -1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
                  <button
                    onClick={() => removeItem(item.cartItemId)}
                  >
                    <img src={bin} alt="" className="w-5 h-5 cursor-pointer ml-5 md:ml-0"/>
                  </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col max-w-md ml-auto">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl "><span className="text-gray-500">Cart</span> Totals</h2>
              <img src={line} alt="" />
            </div>
            <div className="flex items-center justify-between mb-2 border-b border-gray-400 p-2 font-semibold">
              <span className="text-sm text-gray-500">Subtotal</span>
              <span className="text-sm text-gray-500">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-2 border-b border-gray-400 p-2 font-semibold">
              <span className="text-sm text-gray-500">Shipping Free</span>
              <span className="text-sm text-gray-500">${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-2 border-b border-gray-400 p-2 font-semibold">
              <span className="text-sm font-semibold  text-gray-700">Total:</span>
              <span className="text-sm  text-gray-500">${total.toFixed(2)}</span>
            </div>
            <button onClick={()=>{navigate('/checkout')}} className="mt-4 w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors cursor-pointer">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
