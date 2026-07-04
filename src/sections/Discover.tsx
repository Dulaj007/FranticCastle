
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DiscoverBackgroundFlip from '../assets/images/discoverBackgroundflip.png';
import DiscoverBackgroundFlipMobile from '../assets/images/discoverBackgroundflipMobile.png';
import Line from '../assets/images/lineD.png';
import btn from '../assets/images/Button.png';
import DiscoverSlider from '../components/ui/DiscoverSlider';
import { Castle_Data } from '../constants/CastleData';
import { Link } from 'react-router-dom';

const EASE_SPRING = [0.33, 1, 0.68, 1] as const;

export const Discover = () => {
    const Discover = Castle_Data.find((castle) => castle.id === "Discover");

    const textRef                 = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const node = textRef.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

  return (
    <div className="relative bg-transparent h-auto min-[800px]:min-h-screen flex items-center justify-center overflow-hidden">

      {/* Desktop Background */}
      <div
        className="absolute inset-0 hidden min-[800px]:block"
        style={{
          backgroundImage: `url(${DiscoverBackgroundFlip})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile Background */}
      <div
        className="absolute inset-0 block min-[800px]:hidden"
        style={{
          backgroundImage: `url(${DiscoverBackgroundFlipMobile})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none" />

      {Discover && (
        <div className="min-[800px]:ml-15 flex flex-col min-[800px]:flex-row items-center justify-center">

          {/* Text block — single observer on this div triggers all children */}
          <div
            ref={textRef}
            className="w-full min-[800px]:w-1/2 max-[800px]:mb-[105vw] max-[800px]:mt-10"
          >
            {/* Title line 1 — clip reveal */}
            <motion.p
              className="pt-2 text-[11vw] max-[800px]:text-center leading-[1em] uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[4.0vw] text-[var(--color-text-light)]"
              initial={{ clipPath: 'inset(110% 0 -5% 0)', y: 10 }}
              animate={revealed ? { clipPath: 'inset(0% 0 -5% 0)', y: 0 } : {}}
              transition={{ duration: 0.82, delay: 0, ease: EASE_SPRING }}
            >
              {Discover.title[0]}
            </motion.p>

            {/* Title line 2 — clip reveal */}
            <motion.p
              className="uppercase font-bold leading-[1em] text-[17vw] max-[800px]:text-center min-[800px]:text-[6.2vw] min-[800px]:font-extrabold tracking-wider text-[var(--color-text-secondary)]"
              initial={{ clipPath: 'inset(110% 0 -5% 0)', y: 10 }}
              animate={revealed ? { clipPath: 'inset(0% 0 -5% 0)', y: 0 } : {}}
              transition={{ duration: 0.82, delay: 0.14, ease: EASE_SPRING }}
            >
              {Discover.title[1]}
            </motion.p>

            {/* Subtitle — CSS transition (no Framer Motion) */}
            <p
              className="text-[14px] min-[350px]:text-[16px] min-[450px]:text-[18px] min-[800px]:text-[1.5vw] leading-[1.1em] w-[85vw] tracking-wide min-[800px]:w-[35.5vw] pt-1 text-justify text-[var(--color-text-light)]/90"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s 0.27s ease-out, transform 0.65s 0.27s ease-out',
              }}
            >
              {Discover.description[0]}
            </p>

            {/* Button — CSS transition (no Framer Motion) */}
            <div
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateY(0)' : 'translateY(18px)',
                transition: 'opacity 0.65s 0.37s ease-out, transform 0.65s 0.37s ease-out',
              }}
            >
              <Link to="/Chambers">
                <button className="relative cursor-pointer mt-3 w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                  <img src={btn} alt="Button" className="w-full h-auto brightness-120" />
                  <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                    Discover All
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full min-[800px]:w-1/2">
            <DiscoverSlider />
          </div>

        </div>
      )}

      <img src={Line} alt="Line" className="absolute bottom-5 w-full z-100" />
    </div>
  );
};
