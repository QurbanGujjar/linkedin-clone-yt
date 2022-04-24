import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [fullname, setFullname] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // console.log(password)

  const register = () => {
    if (!fullname) {
      return alert("Enter your full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: fullname,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fullname,
              photoURL: profilePic,
            })
          );
        });
    }).catch(error=>alert(error))
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((userAuth)=>{
        dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fullname,
              photoURL: profilePic,
            })

          );
          window.location.reload(false)
    }).catch(error=>alert(error))
    //
  };
  return (
    <div className='login'>
      <img
        src='https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png'
        alt=''
      />
      <form>
        <input
          placeholder='Full name (Required if registring)'
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          type='text'
        />
        <input
          placeholder='Profile pic URL'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type='text'
        />
        <input
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <input
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In{" "}
        </button>
      </form>
      <p>
        Not a mamber?{" "}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
