import { useState, useMemo } from "react";
import type { ChangeEvent } from "react";
import ProductCard from "../components/ProductCard";
import { products, filterCategories } from "../assets/assets";
// Type definitions
import type { Product } from "../types/Product";

type SortOption = 
  | "newest" 
  | "oldest" 
  | "price-low-high" 
  | "price-high-low" 
  | "bestseller" 
  | "name-a-z" 
  | "name-z-a";

const Collection: React.FC = () => {
  // State for filters and sorting
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // Handle category filter changes
  const handleCategoryChange = (category: string): void => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(item => item !== category)
        : [...prev, category]
    );
  };

  // Handle type filter changes
  const handleTypeChange = (type: string): void => {
    setSelectedTypes(prev => 
      prev.includes(type)
        ? prev.filter(item => item !== type)
        : [...prev, type]
    );
  };

  // Handle sort option changes
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSortOption(e.target.value as SortOption);
  };

  // Clear all filters
  const clearAllFilters = (): void => {
    setSelectedCategories([]);
    setSelectedTypes([]);
  };

  // Filter and sort products using useMemo for performance
  const filteredAndSortedProducts = useMemo((): Product[] => {
    let filtered: Product[] = products;

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product: Product) => 
        selectedCategories.includes(product.category)
      );
    }

    // Apply type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((product: Product) => 
        selectedTypes.includes(product.subCategory)
      );
    }

    // Apply sorting
    const sorted: Product[] = [...filtered].sort((a: Product, b: Product) => {
      switch (sortOption) {
        case "price-low-high":
          return a.price - b.price;
        case "price-high-low":
          return b.price - a.price;
        case "newest":
          return b.date - a.date; // Newest first (higher timestamp)
        case "oldest":
          return a.date - b.date; // Oldest first (lower timestamp)
        case "bestseller":
          return Number(b.bestseller) - Number(a.bestseller); // Bestsellers first
        case "name-a-z":
          return a.name.localeCompare(b.name);
        case "name-z-a":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategories, selectedTypes, sortOption]);

  // Check if any filters are active
  const hasActiveFilters: boolean = selectedCategories.length > 0 || selectedTypes.length > 0;

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
                {filterCategories.categories.map((category: string) => (
                  <div key={category} className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id={category.toLowerCase()} 
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                    />
                    <label 
                      htmlFor={category.toLowerCase()} 
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="mb-8 border border-gray-300 p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-4 uppercase tracking-wide">TYPE</h3>
              <div className="space-y-3">
                {filterCategories.subCategories.map((type: string) => (
                  <div key={type} className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id={type.toLowerCase()} 
                      value={type}
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeChange(type)}
                      className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-0"
                    />
                    <label 
                      htmlFor={type.toLowerCase()} 
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <div className="mt-6">
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-red-600 hover:text-red-800 underline transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <h4 className="text-xs font-medium text-gray-700 mb-2">ACTIVE FILTERS:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((category: string) => (
                    <span 
                      key={category}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  {selectedTypes.map((type: string) => (
                    <span 
                      key={type}
                      className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Header with Title, Sort, and Results Count */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-medium text-gray-800">
                ALL <span className="font-semibold">COLLECTIONS</span>
              </h1>
              <div className="w-12 h-px bg-gray-400"></div>
              <span className="text-sm text-gray-500">
                ({filteredAndSortedProducts.length} products)
              </span>
            </div>
            
            <div className="relative">
              <select 
                name="sort" 
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-sm text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
                <option value="price-low-high">Sort by: Price: Low To High</option>
                <option value="price-high-low">Sort by: Price: High To Low</option>
                <option value="bestseller">Sort by: Bestsellers First</option>
                <option value="name-a-z">Sort by: Name A-Z</option>
                <option value="name-z-a">Sort by: Name Z-A</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* No Products Message */}
          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;