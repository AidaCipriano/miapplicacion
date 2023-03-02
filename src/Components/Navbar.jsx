import React, { useContext } from "react";
//import add from "../img/a5.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
    const {currentUser} = useContext(AuthContext)

    return (
        <div className="navbar">
            <span className="logo">Super Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={()=>signOut(auth)}>Salir</button>
            </div>
        </div>
    )
}

export default Navbar