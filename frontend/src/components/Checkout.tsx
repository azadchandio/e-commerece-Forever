import line from "../assets/frontend_assets/Rectangle 3147.png"
import razorpay from "../assets/frontend_assets/razorpay_logo.png"
import stripe from "../assets/frontend_assets/stripe_logo.png"

const Checkout = () => {
  return (
    <div className='px-8 py-5 md:px-16 lg:px-36 mt-16 mb-40'>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40">
            {/* Form area - 50% width */}
            <div className="flex-1 lg:w-1/2">
                <div className="flex items-center mb-5 gap-2">
                    <h2 className="text-xl lg:text-2xl font-semibold">
                        <span className="text-gray-500">DELIVERY</span> INFORMATION
                    </h2>
                    <img src={line} alt="" />
                </div>
                
                <div className="w-full">
                    <form className="space-y-5">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                            <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                        </div>
                        
                        <div>
                            <input type="email" id="email" name="email" placeholder="Email" className="w-full border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                        </div>
                        
                        <div>
                            <input type="text" id="address" name="address" placeholder="Street Address" className="w-full border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input type="text" id="city" name="city" placeholder="City" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                            <input type="text" id="state" name="state" placeholder="State" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                            <input type="text" id="country" name="country" placeholder="Country" className="flex-1 border border-gray-300 p-2.5 rounded-md focus:outline-none focufocus:ring-black-500 focus:border-transparent" 
                            />
                        </div>
                    </form>
                </div>
            </div>  

            {/* Cart total and payment area - 50% width */}
            <div className="flex-1 lg:w-1/2">
                {/* Cart Totals */}
                <div className="p-5 rounded-lg mb-6">
                    <div className="flex items-center gap-2 mb-5">
                        <h2 className="text-lg lg:text-xl font-semibold">
                            <span className="text-gray-500">CART</span> TOTALS
                        </h2>
                        <img src={line} alt="" />
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center justify-between py-2 border-b border-gray-300">
                            <span className="text-gray-600 text-sm">Subtotal</span>
                            <span className="font-semibold text-sm">$430</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-gray-300">
                            <span className="text-gray-600 text-sm">Shipping Fee</span>
                            <span className="font-semibold text-sm">$60</span>
                        </div>
                        <div className="flex items-center justify-between py-2 pt-3 border-t-2 border-gray-400">
                            <span className="text-base font-bold text-gray-800">Total:</span>
                            <span className="text-base font-bold text-gray-800">$490</span>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div>
                    <div className="flex items-center mb-5 gap-2">
                        <h2 className="text-lg lg:text-xl font-semibold">
                            <span className="text-gray-500">PAYMENT</span> METHOD
                        </h2>
                        <img src={line} alt="" />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-6">
                        <label className="flex items-center justify-center p-2 border-2 border-gray-200 rounded-md cursor-pointer hover:border-black transition-colors min-h-[45px]">
                            <input type="radio" name="payment" value="stripe" className="mr-2 h-4 w-4" />
                            <img src={stripe} alt="Stripe" className="h-4 w-auto" />
                        </label>
                        
                        <label className="flex items-center justify-center p-2 border-2 border-gray-200 rounded-md cursor-pointer hover:border-black transition-colors min-h-[45px]">
                            <input type="radio" name="payment" value="razorpay" className="mr-2 h-4 w-4" />
                            <img src={razorpay} alt="Razorpay" className="h-4 w-auto" />
                        </label>
                        
                        <label className="flex items-center justify-center p-2 border-2 border-gray-200 rounded-md cursor-pointer hover:border-black transition-colors min-h-[45px]">
                            <input type="radio" name="payment" value="cod" className="mr-2 h-4 w-4" />
                            <span className="font-bold text-gray-500 text-[10px] text-center">CASH ON DELIVERY</span>
                        </label>
                    </div>
                    
                    <div className="flex justify-end">
                        <button className="bg-black text-white py-3 px-10 rounded-md font-semibold text-base transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout