import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-blue-900 to-red-500 text-white">
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap flex-col md:flex-row justify-between">
        <div className="w-full sm:w-2/5 md:w-2/5 lg:w-2/6 mb-6 md:mb-0">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </Link>
            <p className="ml-2 text-base md:text-xl">© 2023 E-Commerce. All rights reserved.</p>
          </div>
          <p className="text-sm mt-4">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac lacinia lectus, vel feugiat tellus.
             Integer nec lorem eget libero euismod elementum.
          </p>
        </div>

          <div className="w-full sm:w-1/6 md:w-1/2 lg:w-1/6 ">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul  className="space-y-2 ">
              <li>
               <Link to="/" className="text-sm hover:text-gray-400">Home</Link>
               </li>
              <li>
                <Link to="/products" className="text-sm hover:text-gray-400">Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gray-400">About Us</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gray-400">Contact Us</Link>               </li>
               <li>
                <Link to="/about" className="text-sm hover:text-gray-400">Privacy Policy</Link>
               </li>
             </ul>
           </div>
          
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/6">
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category1" className="text-sm hover:text-gray-400">Men</Link>
              </li>
              <li>
                <Link to="/category2" className="text-sm hover:text-gray-400">Women</Link>
              </li>
              <li>
                <Link to="/category3" className="text-sm hover:text-gray-400">Accessories</Link>
              </li>
              <li>
                <Link to="/category3" className="text-sm hover:text-gray-400">Shoes</Link>
              </li>
              <li>
                <Link to="/category3" className="text-sm hover:text-gray-400">Watch</Link>
              </li>
            </ul>
          </div>
          <div className="w-full s:w-1/2 md:w-1/2 lg:w-1/6">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                       <p className="text-sm">123 Street, mohali, India</p>
             <p className="text-sm">info@E.COMERCE.com</p>
             <div className="flex mt-4 space-x-4">
               <a href="#" className="text-xl hover:text-blue-800">
                 <i className="fab fa-facebook"></i>               </a>
              <a href="#" className="text-xl hover:text-blue-400">
                 <i className="fab fa-twitter"></i>
               </a>
               <a href="#" className="text-xl hover:text-pink-900">
                 <i className="fab fa-instagram"></i>
               </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

