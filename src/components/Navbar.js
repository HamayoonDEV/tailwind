import React from "react";
import { headerLogo } from "../assets/images/index";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <div>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Header logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <a>
              <li>Home</li>
            </a>
            <a>
              <li>about</li>
            </a>
            <a>
              <li>products</li>
            </a>
            <a>
              <li>contect</li>
            </a>
            <div className="hidden max-lg:block">
              <MenuIcon />
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
