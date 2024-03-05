import React from "react";
import Logo from "./Logo";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import bgPatternMobileNav from "../assets/images/bg-pattern-mobile-nav.svg";
import ViewPlansBtn from "./ViewPlansBtn";

const Header: React.FC = () => {
  const navLinks = ["How we work", "blog", "account"];

  const openMenu = () => {
    const menuIcon = document.querySelector(".menu"),
      closeIcon = document.querySelector(".close-menu"),
      menu = document.querySelector(".fixed");
    menuIcon?.classList.add("hidden");
    closeIcon?.classList.remove("hidden");
    menu?.classList.remove("hidden");
  };

  const closeMenu = () => {
    const menuIcon = document.querySelector(".menu"),
      closeIcon = document.querySelector(".close-menu"),
      menu = document.querySelector(".fixed");
    menuIcon?.classList.remove("hidden");
    closeIcon?.classList.add("hidden");
    menu?.classList.add("hidden");
  };

  return (
    <header className="sticky top-0 z-50 bg-natural-very-light-gray">
      <div className="container py-6 px-3 mx-auto flex justify-between items-center">
        <Logo />

        <div>
          <nav className="sm:flex gap-5 items-center hidden">
            <ul className="flex gap-5">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="uppercase tracking-widest font-semibold text-natural-dark-grayish-violet hover:text-primary-dark-violet"
                    href="/"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <ViewPlansBtn
              btnStyle="border-natural-very-dark-violet text-natural-very-dark-violet font-semibold py-2 px-5 hover:text-natural-very-light-gray hover:bg-natural-very-dark-violet"
              btnTxt="View plans"
            />
          </nav>

          <div className="sm:hidden">
            <img onClick={openMenu} className="menu" src={menu} alt="menu" />
            <img
              onClick={closeMenu}
              className="close-menu hidden"
              src={close}
              alt="close-menu"
            />
          </div>

          <nav className="fixed hidden z-40 bg-natural-very-dark-violet top-[80px] bottom-0 w-full h-screen p-5 left-0 overflow-hidden">
            <ul className="flex flex-col justify-center items-center gap-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-natural-very-light-gray font-semibold tracking-widest text-xl"
                    href=""
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <ViewPlansBtn
              width="w-full mt-5"
              btnTxt="View plans"
              btnStyle="block w-full border-natural-very-light-gray text-natural-very-light-gray font-semibold py-2 px-5 hover:bg-natural-very-light-gray hover:text-natural-very-dark-violet"
            />

            <img
              className="fixed bottom-0 right-0"
              src={bgPatternMobileNav}
              alt="decoration"
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
