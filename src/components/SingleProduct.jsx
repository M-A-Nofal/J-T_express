import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../rtk/slices/cart-slice";
import { ToastContainer, toast } from "react-toastify";


const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const location = useLocation();

    const dispatch = useDispatch()

    useEffect (()=> {
        setProduct(location.state.item)
    },[])

    return (
    <div>
        <div className=" mx-auto my-10 flex flex-col sm:flex-row gap-10 px-10">
            <div className=" w-full sm:w-2/5 relative">
                <img className=" w-full h-[250px] sm:h-[550px] object-cover" src={product.image} alt="productImg" />
                <div className=" absolute top-4 right-0">
                    {product.isNew && (
                        <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">sale</p>
                    )}
                </div>
            </div>
            <div className="w-full sm:w-3/5 flex flex-col justify-center gap-8 sm:gap-12">
                <div>
                    <h2 className="text-4xl font-semibold">{product.title} </h2>
                    <div className=" flex items-center gap-4 mt-3">
                        <p className=" line-through text-base text-gray-500 ">${product.oldPrice}</p>
                        <p className="text-2xl font-medium text-gray-900">${product.price}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className=" flex text-base">
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                        <MdOutlineStar />
                    </div>
                    <p className=" text-xs text-gray-500">(10 customer review)</p>
                </div>
                <p className="text-base text-gray-500 mt-3">{product.description}</p>
                <div className=" flex gap-4">
                    <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                        <div className="flex items-center gap-4 text-sm font-semibold">
                            <p className="text-base text-gray-500">
                                Category: 
                                <span className="font-medium capitalize">{product.category}</span>
                            </p>
                        </div>
                    </div>
                    <button onClick={()=> dispatch(addToCart(product))& toast.success(`${product.title} is added to your cart`)} className="bg-black text-white py-3 px-6 active:bg-gray-800">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
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

export default SingleProduct