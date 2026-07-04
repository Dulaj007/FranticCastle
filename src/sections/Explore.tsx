import { useState, useEffect, useRef } from 'react';
import ExploreBack from '../assets/images/ExploreBackNew.png';
import ExploreBar from '../assets/images/bar.png';
import chest from '../assets/images/ff.png';
import btn from '../assets/images/Button.png';
import chestGif from '../assets/images/chestGif.gif';
import { Link } from 'react-router-dom';


/*
 * React.FC is omitted here intentionally. The type is redundant — TypeScript
 * infers the return type from the JSX, and React.FC was previously used without
 * importing the React namespace, causing a compile-time error.
 */
const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const exploreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (exploreRef.current) {
      observer.observe(exploreRef.current);
    }

    return () => {
      if (exploreRef.current) {
        observer.unobserve(exploreRef.current);
      }
    };
  }, []);

  return (
    <div ref={exploreRef} className="relative bg-[var(--color-background-primary)] min-h-screen flex items-center justify-center">
      
      {/* Mobile background */}
      <div 
        className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(16, 17, 28, 1) 55%, rgba(16, 17, 28, 0) 70%), url(${ExploreBack})`,
          backgroundSize: "250%",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Desktop background */}
      <div 
        className="absolute inset-0 hidden min-[800px]:block bg-cover bg-center"
        style={{
          backgroundImage: `url(${ExploreBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dynamic Opacity Background */}
      <div
        className={`absolute inset-0 bg-black min-h-screen transition-opacity duration-500 ${
          isVisible ? "opacity-10" : "opacity-90"
        }`}
      ></div>

      <div className="absolute top-0 left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>

      {/* Flex container for ExploreBar and Chest images */}
      <div className="absolute inset-0 flex flex-col justify-between z-10">
        
        {/* Top part - ExploreBar */}
        <div className="w-full flex justify-center">
          <img src={ExploreBar} alt="Explore Bar" className="w-full object-cover" />
        </div>
        
        {/* Bottom part - Chest */} <Link to="/Chambers">
        <div className="w-full flex justify-center">
          <div className="relative w-70 mb-35 min-[800px]:mb-10 min-[800px]:mr-60">
            {/* Chest Image */}
            <img src={chest} alt="Chest" className="w-full object-cover" />
            {/* Overlay GIF with Blend Mode */}
            <img 
              src={chestGif} 
              alt="Chest Animation" 
              className="absolute scale-50 inset-0 w-full h-full object-cover mix-blend-screen opacity-80"
            />
          </div>
         
          <button
            className="hover:cursor-pointer z-55 absolute w-50 mt-65 min-[800px]:mt-20 h-15 opacity-88 bg-cover bg-center Hover-Effect  font-semibold rounded-lg"
            style={{ backgroundImage: `url(${btn})` }}
          >
            <span className="absolute tracking-widest inset-0 flex items-center text-[12px]  justify-center uppercase font-extrabold">
              Explore All
            </span>
          </button>
         
        </div> </Link>
         <div className="absolute bottom-0 z-50 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>

      </div>
    </div>
  );
};

export default Explore;
