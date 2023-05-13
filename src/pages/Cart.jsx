import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";


const Cart = () => {
  const cart = useSelector((state)=> state.cart);
  const userInfo = useSelector((state)=> state.userInfo);
  const [totalPrice, setTotalPrice] = useState("");
  const [payment , setPayment ] = useState(false);

  useEffect(()=>{
    let price = 0;
    cart.map((product)=> {
      price += product.price * product.quantity;
      return price;
    })
    setTotalPrice(price.toFixed(2));
  },[cart]);

  const handleCheckout = ()=> {
    if (userInfo) {
      setPayment(true)
    } else {
      toast.error("Please sign in first to Checkout");
    }
  }

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/13629819/pexels-photo-13629819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {cart.length > 0 ? (
        <div className="px-10 mx-auto py-20 flex flex-col md:flex-row">
          <CartItem />
          <div className="w-full md:w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className=" text-2xl font-medium">Cart Totals</h2>
              <p className=" flex items-center gap-4 text-base">
                Subtotal
                <span className=" font-titleFont font-bold text-lg">${totalPrice}</span>
              </p>
              <p className="flex items-center gap-4 text-base">
                Shipping
                <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, corporis!</span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total: <span className=" text-xl font-bold">${totalPrice}</span>
            </p>
            <button onClick={handleCheckout} className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">Proceed to checkout</button>
            {
              payment && (
                <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51N4qiYL3rmFMoYpFzdRkGi1xXy5n4TBK697149fhglpThozFJ5P8xVuMtHJuqGfSjA5zPN2XBh5vHld1Ddsp1aH800aYpSaN9y"
                  name="J&T Express Online Shopping"
                  amount={totalPrice * 100}
                  label="Give Money"
                  description={`Your Payment amount is $${totalPrice}`}
                  email={userInfo.email}
                />
              </div>
              )
            }
          </div>
        </div>
      ) : ( 
        <div className="px-10 mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <p className="text-xl text-orange-600 font-titleFont font-semibold">
            Your Cart is Empty. Please go back to Shopping and add products to
            Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiOutlineArrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
      <ToastContainer
        position="top-left"
        autoClose={2000}
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

export default Cart