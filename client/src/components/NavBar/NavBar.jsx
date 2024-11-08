import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar relative w-full py-5 px-0 bg-white">
      <nav className="w-4/5 flex justify-between items-center px-5 py-0 mx-auto">
        <div className="flex justify-between items-center gap-5">
          <div className="text-2xl font-bold">Logo</div>
          <ul className="list-none flex gap-5">
            <li>
              <a class="no-underline text-stone-700 font-medium" href="#home">
                Explore
              </a>
            </li>
            <li>
              <a class="no-underline text-stone-700 font-medium" href="#about">
                Problems
              </a>
            </li>
            <li>
              <a
                class="no-underline text-stone-700 font-medium"
                href="#services"
              >
                Contest
              </a>
            </li>
            <li>
              <a
                class="no-underline text-stone-700 font-medium"
                href="#contact"
              >
                Discuss
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
