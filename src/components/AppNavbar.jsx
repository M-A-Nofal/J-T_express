import { Link } from "react-router-dom";
import { logo } from "../assets/aseets.js";
import { cartLogo } from "../assets/aseets.js";
import { useSelector } from "react-redux";
import { useState } from "react";

const AppNavbar = () => {
  const [navbar, setNavbar] = useState(false);

  const cart = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div className="w-full bg-white shadow font-titleFont border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className=" h-full mx-auto justify-between px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div>
                <img className="w-28" src={logo} alt="logo" />
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li>
                  <Link to='/' className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='/products' className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to='/products' className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Shop
                  </Link>
                </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Blog
                </li>
              </ul>
              <Link to="/cart">
                <div className="relative  mt-8 md:mt-0">
                  <img className="w-6" src={cartLogo} alt="cart" />
                  <span className=" absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                    {cart.length}
                  </span>
                </div>
              </Link>
              <Link to="/login">
                <img
                  className="w-8 h-8 rounded-full mt-8 md:mt-0"
                  src={
                    userInfo
                      ? userInfo.image
                      : "https://images.pexels.com/photos/14430268/pexels-photo-14430268.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  }
                  alt="profile"
                />
              </Link>
              {userInfo && (
                <p className="text-base font-titleFont font-semibold underline underline-offset-2">
                  {userInfo.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
