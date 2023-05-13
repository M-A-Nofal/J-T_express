import { facebookLogo, googleLogo } from "../assets/aseets";
import { ToastContainer } from "react-toastify";
import useGoogleAuth from "../firebase/loginLogic/useGoogleAuth";
import useFacebookAuth from "../firebase/loginLogic/useFacebookAuth";

const Login = () => {

  const [handleGoogleLogin, handleGoogleSignOut] = useGoogleAuth();
  const [handleFacebookLogin, handleFacebookSignOut] = useFacebookAuth();
    
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10 py-20">
        <div className="w-full flex items-center justify-center gap-4 md:gap-10 flex-col md:flex-row">
            <div onClick={handleGoogleLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                <img className="w-8" src={googleLogo} alt="google logo" />
                <span className=" text-sm text-gray-900">Sign in with Google</span>
            </div>
            <button onClick={handleGoogleSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
        </div>
        <div className="w-full flex items-center justify-center gap-4 md:gap-10 flex-col md:flex-row">
            <div onClick={handleFacebookLogin} className="text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-300">
                <img className="w-8" src={facebookLogo} alt="github logo" />
                <span className=" text-sm text-gray-900">Sign in with Facebook</span>
            </div>
            <button onClick={handleFacebookSignOut} className="bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300">Sign Out</button>
        </div>
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

export default Login