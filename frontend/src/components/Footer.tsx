import { Link } from "react-router-dom";
import logo from "../assets/frontend_assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative w-full mb-20 mt-20">
      <div className="w-full px-8 mx-auto max-w-7xl">
        {/* Footer Grid */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          {/* Logo & Description */}
          <div className="max-w-md">
            <img src={logo} alt="logo" className="w-32" />
            <p className="mt-5 text-sm text-slate-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="mb-1 text-base font-semibold text-slate-800">Company</p>
            <ul>
              <li>
                <Link to="/" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">About us</Link>
              </li>
              <li>
                <Link to="/delivery" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">Delivery</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">Privacy policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="mb-1 text-base font-semibold text-slate-800">GET IN TOUCH</p>
            <ul>
              <li>
                <Link to="tel:+12124567890" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">
                  +1-212-456-7890
                </Link>
              </li>
              <li>
                <Link to="mailto:greatstackdev@gmail.com" className="block text-slate-600 py-1 hover:text-slate-500 text-sm">
                  greatstackdev@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
          <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
            © 2025{" "}
            <Link to="/" className="hover:underline">
              Your Company
            </Link>. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-slate-600 sm:justify-center">
            <a href="#" className="block transition-opacity text-inherit hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506
                   1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243
                   0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343
                   21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
