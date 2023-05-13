import {GoogleAuthProvider,getAuth,signInWithPopup,signOut,} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from '../../rtk/slices/userinfo-slice';
import { toast } from "react-toastify";

const useGoogleAuth = () => {

    const navigate = useNavigate("");
    const dispatch = useDispatch();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
            const user = result.user;
            console.log(user);
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                })
            );
            setTimeout(() => {
                navigate("/");
            }, 1500);
            })
            .catch((error) => {
            console.log(error);
        });
    };
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Log Out Successfully!");
                dispatch(removeUser());
            })
            .catch((error) => {
                console.log(error);
            });
        };
        
  return [handleGoogleLogin, handleGoogleSignOut]
}

export default useGoogleAuth;