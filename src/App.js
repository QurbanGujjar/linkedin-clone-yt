import React,{useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from './Sidebar'
import Feed from './Feed'
import { useSelector } from "react-redux";
import {login, logout, selectUser} from './features/userSlice'
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Wigets from "./Wigets";

function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
if(userAuth){

dispatch(
  login({
    email: userAuth.email,
    uid: userAuth.uid,
    displayName:userAuth.displayName,
    photoURL: userAuth.photoURL,
  })
);
}else{
  // logout
  dispatch(logout())
}
    })

  },[])

  return (
    <div className='app'>
      <Header />
     {!user ? (<Login/>):(
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Wigets/>
      </div>
     )}
    </div>
  );
}

export default App;
