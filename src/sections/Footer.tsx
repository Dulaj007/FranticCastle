import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FooterBack from "../assets/images/footerBack.png";
import logo from "../assets/images/logo.png";
import FooterBar from "../assets/images/footer.png";
import { FollowUsCol } from "../components/ui/FollowUsCol";
import { Castle_Data } from "../constants/CastleData";
import { Link } from "react-router-dom";
import Line from '../assets/images/lineD.png';

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const Footer = Castle_Data.find((castle) => castle.id === "Footer");

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="relative z-2 bg-[var(--color-background-primary)] min-h-screen overflow-hidden"
      onMouseEnter={() => isLargeScreen && setIsHovered(true)}
      onMouseLeave={() => isLargeScreen && setIsHovered(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url(${FooterBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Footer Bar (Initial View) */}
      {isLargeScreen && (
        <motion.div
          className="w-full flex justify-center items-center absolute top-100"
          initial={{ y: 0, opacity: 1 }}
          animate={isHovered ? { y: -500, opacity: 0 } : { y: 50, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img src={FooterBar} alt="Explore Bar" className="w-full object-center" />
        </motion.div>
      )}

      {/* Content Section */}
      <motion.div
        className="relative z-5 w-full min-h-screen flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={isHovered || !isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Top Section: Logo */}
        <motion.div
          className="flex items-center justify-center pt-3"
          initial={{ opacity: 0, y: -50 }}
          animate={isHovered || !isLargeScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: -150 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <h1 className="text-[16px]  font-bold text-[var(--color-text-light)]">FRANTIC CASTLE</h1>
        </motion.div>

      
        {/* Footer Navigation Links */}
        <div className="z-3 flex flex-col items-center mt-30 justify-center space-x-6 gap-5 min-[800px]:flex-row font-bold text-[18px] 
        md:text-[15px] lg:text-lg uppercase text-[var(--color-text-light)] min-[800px]:justify-start
         min-[800px]:absolute min-[800px]:bottom-20 min-[800px]:left-15 ">

          <Link to="/" className="text-[var(--color-text-light)] hover:underline">Home</Link>
          <Link to="/" className="text-[var(--color-text-light)] hover:underline">About</Link>
          <Link to="/Chambers" className="text-[var(--color-text-light)] hover:underline">Our Games</Link>
          <Link to="/News" className="text-[var(--color-text-light)] hover:underline">News & Updates</Link>
          {/* Bug fix: the original href was "/SignUp " with a trailing space which never matched the route. */}
          <Link to="/SignUp" className="text-[var(--color-text-light)] hover:underline">Community</Link>
        </div>

        {Footer && (
          <div className="z-3 absolute text-center min-[800px]:text-start bottom-5 min-[800px]:left-10 mx-5 min-[800px]:bottom-30">
            <div className="min-[800px]:absolute min-[800px]:bottom-0 mb-5">
              <FollowUsCol />
            </div>
            <h2 className="font-bold text-xl uppercase text-[var(--color-text-secondary)]">{Footer.title[0]}</h2>
            <p className="text-sm mt-2 mb-15 min-[800px]:w-130 opacity-80 text-[var(--color-text-light)]">{Footer.description[0]}</p>
          </div>
        )}
      </motion.div>
      <div className="absolute z-2  top-0 left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      <div className="absolute z-2 bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>

    
      <div className="absolute bottom-5 right-5 text-xs text-gray-500 opacity-70 z-5">
        <p>© 2025 Frantic Castle. All Rights Reserved</p>
      </div>
      <img src={Line} alt="Line" className="min-[800px]:w-full absolute bottom-0 z-5 max-[400px]:scale-300" />
    </div>
  );
};
