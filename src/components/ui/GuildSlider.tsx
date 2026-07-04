import { useState, useEffect } from 'react';
import FbIcon from '../../assets/icons/basil_facebook-outline.svg';
import ytIcon from '../../assets/icons/line-md_youtube-filled.svg';
import IntaIcon from '../../assets/icons/mdi_instagram.svg';
import DisIcon from '../../assets/icons/ic_baseline-discord.svg';
import artIcon from '../../assets/icons/mdi_artstation.svg';
import { Fade } from 'react-awesome-reveal';
import SliderItemFrame from '../../assets/Images/GuildSlideFrame.png';
import SliderBackGif from '../../assets/Images/guildframeBack.gif';
import SliderVerifyIcon from '../../assets/Images/rightIcon.png';
import SliderLeftArrow from '../../assets/Images/leftArrowSlider.png';
import SliderRightArrow from '../../assets/Images/rightArrowSlider.png';
import { sliderData } from '../../constants/GuildData';



export const GuildSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);  

  const goToPrevious = () => {
    setFadeIn(false); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1));
    }, 500); 
  };

  const goToNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1));
    }, 500); 
  };

  useEffect(() => {
    setFadeIn(true);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      goToNext();  
    }, 10000);

    return () => clearInterval(autoSlideInterval);
  }, []);  

  return (
    <div className="relative w-full flex justify-center items-center Hover-Effect">
      {/* Left Arrow */}
      <button
        className="absolute left-40 bottom-10 z-10 p-2 max-sm:left-25 max-sm:bottom-4"
        onClick={goToPrevious}
      >
        <img src={SliderLeftArrow} alt="Left Arrow" className="w-8 h-8" />
      </button>

      {/* Slider Item */}
      <div className="sm:w-[400px] flex justify-center items-center overflow-hidden">
        <div
          className="relative max-sm:w-70 max-sm:h-120 w-100 h-180 bg-cover bg-center"
          style={{ backgroundImage: `url(${SliderItemFrame})` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 my-20 max-sm:my-15 max-sm:p-0">
            {/* Part 1: Gif + Profile Image */}
            <div className="relative flex flex-col items-center mx-15">
              <div className="image-bottom-top" />
              <img
                src={SliderBackGif}
                alt="Slider Background GIF"
                className="w-60 mix-blend-screen object-cover"
              />
              <img
                src={sliderData[currentIndex].profileImage}
                alt="Profile"
                className={`absolute top-4 w-40 max-sm:w-25 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
              />
            </div>

            {/* Part 2: Text */}
            <div className="bg-[var(--color-background-primary)]/90 h-75 mb-3 mx-15">
            {/* Bug fix: flex-raw is not a valid Tailwind class — corrected to flex-row. */}
            <div className='flex flex-row justify-center items-center gap-1'>
            <img
                src={SliderVerifyIcon}
                alt="Profile"
                className={`w-4  max-sm:w-3 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
              />
              <p className={`text-center max-sm:ml-2 text-[var(--color-text-light)] font-bold text-[11px] max-sm:text-[9px] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {sliderData[currentIndex].position}
              </p>
            </div>
            
              <p className={`ml-3 -mb-3 text-[var(--color-text-light)] tracking-[0.1em] font-bold text-[25px] max-sm:text-[20px] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {sliderData[currentIndex].Fname}
              </p>
              <p className={`ml-3 m text-[var(--color-text-secondary)] tracking-[0.1em] font-bold text-[25px] max-sm:text-[20px] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {sliderData[currentIndex].Lname}
              </p>
              <p className={`ml-3 text-[var(--color-text-light)] text-[11px] max-sm:text-[7px] transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {sliderData[currentIndex].about.split(" ").slice(0, 35).join(" ")}{sliderData[currentIndex].about.split(" ").length > 35 && " ..."}
              </p>
           
              <Fade direction="down" duration={1500}>
                  <div className=" flex justify-start  opacity-90 gap-1 2xl:gap-2 items-center ">
                    <a href={sliderData[currentIndex].facebook} target="_blank" >
                      <button className="p-2">
                      <img src={FbIcon} alt="Facebook" className="Follow-White-Icon" />
                      </button>
                    </a>
                    <a href={sliderData[currentIndex].youtube} target="_blank" >
                      <button className="p-2">
                      <img src={ytIcon} alt="YouTube" className="Follow-White-Icon" />
                      </button>
                    </a>
                    <a href={sliderData[currentIndex].insta} target="_blank" >
                      <button className="p-2">
                      <img src={IntaIcon} alt="Instagram" className="Follow-White-Icon" />
                      </button>
                    </a>
                    <a href={sliderData[currentIndex].discord} target="_blank" >
                      <button className="p-2">
                      <img src={DisIcon} alt="Discord" className="Follow-White-Icon" />
                      </button>
                    </a>
                    <a href={sliderData[currentIndex].google} target="_blank" >
                      <button className="p-2">
                      <img src={artIcon} alt="ArtStation" className="Follow-White-Icon" />
                      </button>
                    </a>
              </div></Fade>
              <div className=" ">
             
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute right-37 bottom-10 z-10 p-2 max-sm:right-25 max-sm:bottom-4"
        onClick={goToNext}
      >
        <img src={SliderRightArrow} alt="Right Arrow" className="w-8 h-8" />
      </button>
    </div>
  );
};
