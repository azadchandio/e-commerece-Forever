// components/Cart.tsx
import { dummyCartData } from "../assets/assets";
import line from "../assets/frontend_assets/Rectangle 3147.png"

const MyOrders = () => {


  return (
    <div className="px-8 pt-5 md:px-16 lg:px-36 mt-20 mb-50">
      <div className="flex items-center mb-6 pb-8 border-b border-gray-400 gap-2">
        <h2 className="text-3xl "><span className="text-gray-500">MY</span> ORDERS</h2>
        <img src={line} alt="" />
      </div>
      {dummyCartData.length === 0 ? (
        <p className="text-gray-600">Your Orders are empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {dummyCartData.map(item => (
              <div
                key={item.cartItemId}
                className="flex items-center justify-between border-b border-gray-400 pb-4"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <div className="flex gap-2 items-center">
                    <p className=" text-gray-600">${item.price}</p>
                    <p className=" text-gray-600">Quantity:{item.quantity}</p>
                    <p className=" text-gray-600">size:{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                <p>Ready to ship</p>
                </div>
                  <button className="px-4 py-2 hover:bg-gray-200 transition duration-200 border cursor-pointer">Track Order</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
