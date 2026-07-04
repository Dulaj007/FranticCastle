import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import NavigationMenuBackground from "../assets/images/navBack2.png";
import Tourch from "../assets/images/tourch.png";
import Line from "../assets/images/line.png";
import Logo from "../assets/images/logo.png";
import MenuIcon from "../assets/Icons/menuPink.svg";
import CloseIcon from "../assets/Icons/menuPinkClose.svg";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }


      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };


    if (isMenuOpen) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Sidebar - Default View */}
      <div className="font-gotha fixed z-5000 top-5 right-1 min-[800px]:-right-8 h-full flex flex-col items-center gap-7 p-4 bg-transparent">
        <img src={Logo} alt="Logo" className="w-12 h-12 hidden min-[800px]:block z-50" />
        <button ref={buttonRef} onClick={toggleMenu}>
          <img src={isMenuOpen ? CloseIcon : MenuIcon} alt="Menu" className="w-10 h-10 cursor-pointer z-5000 hover:scale-105" />
        </button>
        <img src={Line} alt="Line" className="h-40 hidden min-[800px]:block" />
        <span className="hidden min-[800px]:block text-[var(--color-text-light)] font-bold transform my-11 rotate-90 tracking-[0.4em]">
          TRENDING
        </span>
        <img src={Tourch} alt="Tourch" className="w-auto h-60 mr-4 opacity-90 hidden min-[800px]:block" />
      </div>

      {/* Animated Navigation Menu */}
      <motion.div
        ref={menuRef}
        className="fixed z-4000 transform top-10 -right-25 min-[800px]:right-0 h-200 w-[300px] bg-cover bg-center flex flex-col p-6"
        style={{ backgroundImage: `url(${NavigationMenuBackground})` }}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "-40%" : "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <nav
          aria-label="Main navigation"
          className="flex font-gotha tracking-widest flex-col text-md font-bold uppercase justify-center items-center mt-50 gap-6"
        >
          <Link to="/" className="text-[var(--color-text-light)]">Home</Link>
          {/*
            * "About" currently links to "/" (home) because there is no dedicated
            * /About route or page-level about section yet. Update this link once
            * an About page or anchor section is created.
            */}
          <Link to="/" className="text-[var(--color-text-light)]">About</Link>
          <Link to="/Chambers" className="text-[var(--color-text-light)]">Game Chambers</Link>
          <Link to="/SignUp" className="text-[var(--color-text-light)]">Beta Sign-Up</Link>
          <Link to="/News" className="text-[var(--color-text-light)]">News & Blogs</Link>
        </nav>
      </motion.div>
    </>
  );
};
