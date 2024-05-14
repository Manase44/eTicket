import React from "react";
import { RiDownload2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="flex h-16 px-5 justify-between items-center bg-chocolate-2">
          <div>
            <Link to={"/"}>
              <span className="text-2xl text-white">eTicket</span>
            </Link>
          </div>
          <div>
            <RiDownload2Fill className="text-white" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
