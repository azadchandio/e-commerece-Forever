import ProductCard from "./ProductCard"
import { products } from "../assets/assets";

const Collection = () => {
  return (
    <div className="px-8 py-8 md:px-16 lg:px-36">
      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <div className="w-64 flex-shrink-0">
          {/* Filters Header */}
          <div className="mb-8 mt-9">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">FILTERS</h2>
            
            {/* Categories Filter */}
            <div className="mb-8 border border-gray-300 p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">CATEGORIES</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="men" 
                    value="Men" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="men" className="text-sm text-gray-600 cursor-pointer">Men</label>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="women" 
                    value="Women" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="women" className="text-sm text-gray-600 cursor-pointer">Women</label>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="kids" 
                    value="Kids" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="kids" className="text-sm text-gray-600 cursor-pointer">Kids</label>
                </div>
              </div>
            </div>

            {/* Type Filter */}
            <div className="mb-8 border border-gray-300 p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">TYPE</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="topwear" 
                    value="Topwear" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="topwear" className="text-sm text-gray-600 cursor-pointer">Topwear</label>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="bottomwear" 
                    value="Bottomwear" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="bottomwear" className="text-sm text-gray-600 cursor-pointer">Bottomwear</label>
                </div>
                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="winterwear" 
                    value="Winterwear" 
                    className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                  />
                  <label htmlFor="winterwear" className="text-sm text-gray-600 cursor-pointer">Winterwear</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header with Title and Sort */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-medium text-gray-800">ALL <span className="font-semibold">COLLECTIONS</span></h1>
              <div className="w-12 h-px bg-gray-400"></div>
            </div>
            
            <div className="relative">
              <select 
                name="sort" 
                id="sort" 
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              >
                <option value="price-low-high">Sort by: Price: Low To High</option>
                <option value="price-high-low">Sort by: Price: High To Low</option>
                <option value="newest">Sort by: Newest</option>
                <option value="popular">Sort by: Popular</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection