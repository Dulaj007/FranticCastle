import { SetStateAction, useState } from 'react';
import { motion } from 'framer-motion';
import { DiscoverItems } from '../../constants/Projects';
import SliderLeftArrow from '../../assets/Images/leftw.png';
import SliderRightArrow from '../../assets/Images/rightw.png';
import GamerIcon from '../../assets/Icons/gamericon.svg';
import fourDots from '../../assets/Icons/4dots.svg';
import { Link } from 'react-router-dom';



const DiscoverSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % DiscoverItems.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + DiscoverItems.length) % DiscoverItems.length);
  };

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setIndex(slideIndex);
  };

  return (
    <div className="w-[125vw] h-[95vw] ml-5 max-[800px]:absolute max-[800px]:bottom-10 max-[800px]:-left-22 min-[800px]:w-[45vw] min-[800px]:h-[30vw] min-[800px]:relative overflow-hidden 2xl:ml-10">
      <div className='absolute flex flex-row max-[800px]:left-[50vw] bottom-0 min-[800px]:left-[10vw] z-20'>
        {/* Left Arrow */}
        <button className="z-10 shadow-md" onClick={prevSlide}>
          <img src={SliderLeftArrow} alt="Left Arrow" className="w-8 h-8" />
        </button>
           {/* Navigation Dots */}
      <div className="flex  justify-center mt-4">
        {DiscoverItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-4 h-4 mx-1 mb-3 border border-[var(--color-text-light)] rounded-full ${i === index ? 'bg-[var(--color-text-secondary)]' : 'bg-transparent'}`}
          />
        ))}
      </div>
        {/* Right Arrow */}
        <button className="z-10 shadow-md" onClick={nextSlide}>
          <img src={SliderRightArrow} alt="Right Arrow" className="w-8 h-8" />
        </button>
      </div>
      <div className="relative max-[800px]:ml-30 flex w-full justify-center items-center overflow-hidden h-full">
        {DiscoverItems.map((item, i) => {
          const prevIndex = (index - 1 + DiscoverItems.length) % DiscoverItems.length;
          const isActive = i === index;
          const isPrev = i === prevIndex;

          if (!isActive && !isPrev) return null;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{
                opacity: isActive || isPrev ? 1 : 0,
                scale: isActive ? 1.1 : 0.9,
                x: isActive ? '-50%' : '50%',
              }}
              transition={{ duration: 0.5 }}
              className="absolute w-[60vw] h-[60vw] min-[800px]:w-[20vw] min-[800px]:h-[20vw] flex justify-center items-center
              transform transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="absolute uppercase tracking-wider w-20 leading-[1.2em] opacity-90 text-[var(--color-text-light)] top-10 left-10 min-[800px]:top-[3vw] min-[800px]:left-[3vw] px-2 py-1 text-[8px] min-[800px]:text-[1vw] font-semibold rounded-md">
                  {item.topLeftText}
                </div>

                {/* Top Right Icon */}
                <img src={fourDots} alt="Four Dots" className="absolute top-10 right-10 min-[800px]:top-[3vw]  min-[800px]:right-[3vw] w-8 h-8" />

                {/* Bottom Right Icon */}
                <img src={GamerIcon} alt="Gamer Icon" className="absolute bottom-10 right-10 min-[800px]:bottom-[4vw] min-[800px]:right-[3vw] w-6 h-6" />

                {/* Bottom Left Button */}
                <Link to="/Chambers">
                <button className="absolute bottom-10 left-10 min-[800px]:bottom-[4vw] min-[800px]:left-[3vw] bg-black text-[var(--color-text-light)] px-3 py-2 text-[8px] min-[800px]:text-[0.7vw] font-semibold rounded-full
                hover:cursor-pointer">
                  {item.bottomLeftText}
                </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>


    </div>
  );
};

export default DiscoverSlider;
