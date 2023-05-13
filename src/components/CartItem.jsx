import { useDispatch, useSelector } from "react-redux"
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {clear, decrementQuantity, increamentQuantity, removeFromCart} from '../rtk/slices/cart-slice';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cartproduct = () => {
    const cart = useSelector((state)=> state.cart);
    const dispatch = useDispatch()

    return (
    <div className=" w-full md:w-2/3 pr-4 ">
        <div className="w-full">
            <h2 className=" font-titleFont text-xl md:text-2xl">Shopping Cart</h2>
            <div>
                <div>
                    {cart.map((product)=> (
                        <div className=" flex items-center justify-between gap-3 md:gap-6 mt-6 border flex-col md:flex-row text-center md:text-left" key={product._id}>
                            <MdOutlineClose onClick={ ()=>dispatch(removeFromCart(product._id)) & toast.error(`${product.title} is removed`)} className="block md:hidden text-xl w-12 ml-4 text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                            <div className=" flex items-center gap-2">
                                <MdOutlineClose onClick={ ()=>dispatch(removeFromCart(product._id)) & toast.error(`${product.title} is removed`)} className=" hidden md:block text-xl w-12 ml-4 text-gray-600 hover:text-red-600 cursor-pointer duration-300"/>
                                <img className=" w-20 md:w-32 h-20 md:h-32 object-cover" src={product.image} alt="product img" />
                            </div>
                            <h2 className=" ">{product.title}</h2>
                            <p className="">${product.price}</p>
                            <div className=" flex items-center justify-between text-gray-500 gap-4 border p-3">
                                <p className="text-sm">Quantity</p>
                                <div className="flex items-center gap-4 text-sm font-semibold">
                                    <span  onClick={() => dispatch(decrementQuantity({
                                            _id: product._id,
                                            title: product.title,
                                            image: product.image,
                                            price: product.price,
                                            quantity: 1,
                                            description: product.description,
                                        }))}
                                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                                        -
                                    </span>
                                    {product.quantity}
                                    <span onClick={() => dispatch(increamentQuantity({
                                            _id: product._id,
                                            title: product.title,
                                            image: product.image,
                                            price: product.price,
                                            quantity: 1,
                                            description: product.description,
                                        }))}
                                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                                        +
                                    </span>
                                </div>
                            </div>
                            <p className=" w-6 md:w-14">${product.quantity * product.price}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() =>
                    dispatch(clear()) & toast.error("Your Cart is Empty!")
                    }
                    className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
                >
                    Reset Cart
                </button>
            </div>
        </div>
        <Link to="/">
            <button className="mt-8 mb-8 md:mb-0 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
                <HiOutlineArrowLeft />
            </span>go shopping</button>
        </Link>
        <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Cartproduct