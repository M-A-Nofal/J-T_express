import { ImGithub } from "react-icons/im";
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome,} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logo, paymentLogo } from "../assets/aseets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-10 ">
            <div className=" flex flex-col gap-4 md:gap-7">
                <img className="w-20 md:w-32" src={logo} alt="logo" />
                <p className="text-white text-sm tracking-wide">©Mohamed Nofal</p>
                <img className=" w-32 md:w-56" src={paymentLogo} alt="payment" />
                <div className=" flex gap-3 md:gap-5 text-lg text-gray-400">
                    <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            <div>
                <h2 className=" text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4 mt-4 md:mt-0">Locate us</h2>
                <div className="text-base flex flex-col md:gap-2">
                    <p>J&T EXPRESS,CAIRO, EGYPT</p>
                    <p>Mobile: 01017840252</p>
                    <p>Phone: 01017840252</p>
                    <p>e-mail: mohamedanofal3@gmail.com</p>
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-4 mt-4 md:mt-0">Profile</h2>
                <div className="text-base flex flex-col md:gap-2">
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <BsPersonFill />
                        </span>
                        my account
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <BsPaypal />
                        </span>
                        checkout
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <FaHome />
                        </span>
                        order tracking
                    </p>
                    <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
                        <span className="text-lg">
                            <MdLocationOn />
                        </span>
                        help & support
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-4 md:mt-0">
                <input className="bg-transparent border px-4 py-2 text-sm" type="text" placeholder="email" />
                <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer