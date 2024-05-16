import React, { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSerchView } from "../utils/gptSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSerchView());
  };

  return (
    <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img src={LOGO} alt="logo" className="w-44 " />
      {user && (
        <>
          <div className="flex items-center">
            <button
              className="py-2  px-4 mr-[680px] bg-white  text-black rounded-md font-semibold"
              onClick={handleGptSearch}
            >
              GPT Search
            </button>
            <img
              src={USER_AVATAR}
              alt="usericon"
              className="w-16 h-16 p-4"
            ></img>
            <div
              className="font-bold text-xl text-white cursor-pointer"
              onClick={handleSignout}
            >
              Sign out
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
