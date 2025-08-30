import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/frontend_assets/logo.png";
import searchIcon from "../assets/frontend_assets/search_icon.png";
import profileIcon from "../assets/frontend_assets/profile_icon.png";
import cartIcon from "../assets/frontend_assets/cart_icon.png";
import menuIcon from "../assets/frontend_assets/menu_icon.png";
import crossIcon from "../assets/frontend_assets/cross_icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const totalItems = cart.reduce((acc: number, item: any) => acc + item.quantity, 0);
      setCartCount(totalItems);
    };

    // Initial update
    updateCartCount();

    // Listen for storage changes (e.g., when another tab updates localStorage)
    window.addEventListener("storage", updateCartCount);

    // Custom event listener for same-tab updates
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);

    // Cleanup
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <div className="px-8 pt-5 md:px-16 lg:px-36">
      <div className="flex items-center justify-between border-b pb-12 border-gray-400">
        <Link to="/">
          <h1>
            <img src={logo} alt="Logo" className="w-36 h-auto" />
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-lg font-outfit">
          <Link to="/">HOME</Link>
          <Link to="/collection">COLLECTION</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/search" aria-label="Search">
            <img src={searchIcon} alt="Search" className="w-5 h-auto" />
          </Link>
          <Link to="/profile" aria-label="Profile">
            <img src={profileIcon} alt="Profile" className="w-5 h-auto" />
          </Link>
          <Link to="/cart" aria-label="Cart" className="relative">
            <img src={cartIcon} alt="Cart" className="w-5 h-auto" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <img
            src={menuIcon}
            alt="Menu"
            className="w-5 md:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          />
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`
            absolute top-0 left-0 w-full h-screen z-50 bg-white px-8 pt-24
            flex flex-col items-center gap-6 text-lg font-outfit md:hidden
            transition-all duration-300 ease-in-out
            ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}
          `}
        >
          <img
            src={crossIcon}
            alt="Close menu"
            className="w-6 h-6 absolute top-6 right-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          />
          <Link to="/" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/collection" onClick={() => setIsOpen(false)}>
            COLLECTION
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            ABOUT
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;