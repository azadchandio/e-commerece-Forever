import { Link } from "react-router-dom";

import logo from "../assets/frontend_assets/logo.png";
import searchIcon from "../assets/frontend_assets/search_icon.png";
import profileIcon from "../assets/frontend_assets/profile_icon.png";
import cartIcon from "../assets/frontend_assets/cart_icon.png";
import menuIcon from "../assets/frontend_assets/menu_icon.png";
import crossIcon from "../assets/frontend_assets/cross_icon.png";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-5 md:px-16 lg:px-36 ">
      <Link to={"/"}>
        <h1>
          <img src={logo} alt="logo" className="w-36 h-auto" />
        </h1>
      </Link>
      <div className=" hidden md:flex items-center gap-6 text-lg font-outfit">
        <Link to="/">HOME</Link>
        <Link to="/collection">COLLECTION</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex items-center gap-6">
        <Link to="">
          <img src={searchIcon} alt="searchicon" className="w-5 h-auto" />
        </Link>
        <Link to="">
          <img src={profileIcon} alt="profileicon" className="w-5 h-auto" />
        </Link>
        <Link to="">
          <img src={cartIcon} alt="carticon" className="w-5 h-auto" />
        </Link>
        <img src={menuIcon} alt="" className="w-5 md:hidden " onClick={() => setIsOpen(true)}/>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`
          absolute top-0 left-0 w-full h-screen z-50 bg-white px-8 pt-24
          flex flex-col items-center gap-6 text-lg font-outfit md:hidden
          transition-all duration-300 ease-in-out
          ${ isOpen ? "opacity-100 translate-x-0": "opacity-0 -translate-x-full pointer-events-none"}
        `}
      >
        {/* Cross Icon */}
        <img src={crossIcon} alt="close" className="w-6 h-6 absolute top-6 right-6 cursor-pointer" onClick={() => setIsOpen(false)}/>
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
  );
};

export default Navbar;
