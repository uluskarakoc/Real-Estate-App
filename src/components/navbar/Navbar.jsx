import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <Link to={"/"} className="logo">
          <img src="/logo.png" alt="" />
          <span>UlusEstate</span>
        </Link>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
        <Link>Agents</Link>
      </div>
      <div className="right">
        <Link href=""> Sign In</Link>
        <Link href="" className="register">
          Sign Up
        </Link>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          {console.log(open)}
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Agents</Link>
          <Link>Sign In</Link>
          <Link>Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
