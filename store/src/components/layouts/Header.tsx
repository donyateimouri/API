import React from "react";
// Router
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <>
        <Link to="/">Home</Link> |{" "}
        <Link to="login">Login</Link>

    </>
  );
}


