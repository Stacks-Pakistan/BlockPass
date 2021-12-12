import React from "react";
import { userSession } from "../auth";

export default function Navbar(props) {

  const handleSignOut = () => {
    console.log(props);
    props.userData.userData = null;
    userSession.signUserOut(window.location.origin);
  }


  return (
    <nav class="navbar py-4" style={{backgroundColor: "black"}}>
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1 text-white" >Password Manager</span>
        <button className="btn btn-primary align-self-end" onClick = {()=>handleSignOut()} style = {{borderRadius: "25px"}}>Sign Out</button>
      </div>
    </nav>
  );
}
