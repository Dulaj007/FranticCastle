"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Article_Data } from '../../constants/ArticlesData';
import SliderLeftArrow from '../../assets/Images/leftw.png';
import SliderRightArrow from '../../assets/Images/rightw.png';
import ShareIcon from '../../assets/Icons/share-black.svg';
import LoadingGif from '../../assets/Images/loading.gif';



interface ArticleUpdateSliderProps {
  onArticleClick: (id: number) => void; 
}
export default function ArticleUpdateSlider({ onArticleClick }: ArticleUpdateSliderProps) {
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [welcomeEmail, setWelcomeEmail] = useState(false);

  const [loading, setLoading] = useState(false);

  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 800 ? 2 : 3);

    useEffect(() => {
        const handleResize = () => {
          setSlidesToShow(window.innerWidth < 800 ? 2 : 3);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !validateEmail(email)) {
          setError("Please enter a valid email.");
          return;
        }
        if (!welcomeEmail) {
          setError("You must agree to the newsletter terms.");
          return;
        }
        setLoading(true);

        //Use this for Node server
        // try {
        //   const response = await fetch("http://localhost:5000/subscribe", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ email }),
        //   });
        try {
      
          const formDataEncoded = new URLSearchParams();
          formDataEncoded.append("email", email);  
          
        
          const response = await fetch("https://franticcastle.com/server/newsletter.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
    
            body: formDataEncoded.toString(),
          });
    
          if (response.ok) {
            setPopupMessage("Thank you for subscribing to our newsletter!");
          } else {
            setPopupMessage("Sorry, something went wrong. Please try again.");
          }
        } catch (error) {
          setPopupMessage("Sorry, something went wrong. Please try again.");
        }

        setLoading(false); 
        setPopupVisible(true); 
        setEmail(""); 
        setError(""); 
      };
 
    
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
    
    
      const filteredAnnouncements = Article_Data.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) 
         
      );


  return (
    <div className=" mx-auto p-6 bg-transparent rounded-lg ">
      

         
      <p className="text-[var(--color-text-light)] leading-[1em] w-auto text-[1.5vw]">
      Subscription Subscribe to our newsletter and receive a selection of cool articles every weeks
        </p>
      <form  className="mt-4 flex flex-col items-center w-full " onSubmit={handleSubscribe}>
        <div className="flex flex-col gap-4 w-full items-center justify-center">
      
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 h-15 border text-[var(--color-text-light)] placeholder-[var(--color-text-light)]/70 border-[var(--color-text-light)]/90 rounded  w-full focus:outline-none focus:border-[var(--color-text-secondary)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
             {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
           <button
          type="submit"
          className=" bg-[var(--color-text-secondary)] w-full tracking-[0.5em] text-[var(--color-text-light)] px-8 py-4 rounded text-lg font-semibold hover:bg-pink-600 transition"
          onClick={handleSubscribe}
        >
          SUBSCRIBE
        </button>
        </div>
        <div className="flex text-[var(--color-text-light)] w-full gap-2 mt-4 ">
          <input
            type="checkbox"
            checked={welcomeEmail}
            onChange={(e) => setWelcomeEmail(e.target.checked)}
            className="w-4 h-4 text-[var(--color-text-light)]  border-gray-700 rounded focus:ring-pink-500"
     
          />
          <label className="text-gray-400 max-[800px]:w-auto w-120 mb-10 text-sm">
          By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</label>
        </div>
       
      </form>
    {/* Loading Popup */}
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center z-50 bg-transparent backdrop-blur-2xl bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex justify-center items-center bg-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <img src={LoadingGif} alt="Loading..." className="w-24 h-24" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
      <AnimatePresence>
        {popupVisible && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 bg-transparent backdrop-blur-2xl bg-opacity-50"
            onClick={closePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg max-w-xs mx-auto relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <button
                className="absolute top-2 right-2 text-black font-bold"
                onClick={closePopup}
              >
                X
              </button>
              <p className="text-center text-lg">{popupMessage}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Latest Announcements"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-4 font-bold rounded-full border text-[1.3vw] border-[var(--color-text-light)] text-[var(--color-text-light)]"
      />

      {/* Announcement Slider */}
      <div className="relative overflow-hidden  rounded-lg">
        <AnimatePresence mode="wait">
          {filteredAnnouncements.length > 0 ? (
            /* Bug fix: grid-raw-${slidesToShow} was invalid (wrong name + dynamic string
               purged by Tailwind). Replaced with static responsive grid classes. */
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 min-[800px]:grid-cols-3 gap-4"
            >
              {filteredAnnouncements
                 .slice(currentIndex, currentIndex + slidesToShow)
                .map((Article_Data, i) => (
                  <div
                    key={Article_Data.title + i}
                    className=" bg-[var(--color-text-light)] w-auto m-5 
                    transform transition-all duration-300 ease-in-out hover:scale-105 brightness-110 hover:brightness-130 "
                    onClick={() => onArticleClick(Article_Data.id)} 
                  >
                    {Article_Data.image && <img src={Article_Data.image} alt={Article_Data.title} className="w-full " />}
                    <h2 className="text-[12px] min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.7vw] px-5 pt-5 font-extrabold text-black">{Article_Data.title}</h2>
                    {/* Bug fix: ShareIcon had no alt text — added empty alt for decorative icons. */}
                    <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] text-gray-600 px-5 font-bold my-2 flex flex-row ">
                      {Article_Data.writer} — {Article_Data.date} <img src={ShareIcon} alt="" aria-hidden="true" className="max-[800px]:ml-1 w-[1.7vw] h-[1.5vw] max-[800px]:w-4.5 max-[800px]:h-4.5 opacity-70 pr-0.5" /> {Article_Data.shares}</p>
                    <p className='text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw]  px-5'>{Article_Data.description[0]}</p>
                    <div className="text-sm justify-between flex-raw flex  ">
                      <button className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] px-5 py-3 underline">View Post</button>
                    </div>
                  
                  </div>
                ))}
            </motion.div>
          ) : (
            <div className="p-6 bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-400">No announcements found.</p>
            </div>
          )}
        </AnimatePresence>
        <div className="flex justify-center gap-3 mt-2 items-center ">
   <button
     className="text-3xl text-gray-400 hover:text-white"
     onClick={() => setCurrentIndex((prev) => (prev - slidesToShow + Article_Data.length) % Article_Data.length)}
   >
<img src={SliderLeftArrow} alt="Left Arrow" className="w-8 h-8" />
   </button>
  {/* Dots Navigation */}
  <div className="flex justify-start mt-4 space-x-2">
          {Array.from({ length: Math.ceil(Article_Data.length / slidesToShow) }).map((_, i) => (
            <button
              key={i}
              className={`w-5 h-5 mb-4 rounded-full border border-[var(--color-text-light)] ${
                 i * slidesToShow === currentIndex ? 'bg-[var(--color-text-secondary)]' : 'bg-transparent'}`}
              onClick={() => setCurrentIndex(i * slidesToShow)}
            />
          ))}
        </div>
   <button
     className="text-3xl text-gray-400 hover:text-white"
     onClick={() => setCurrentIndex((prev) => (prev + slidesToShow) % Article_Data.length)}
   >
    <img src={SliderRightArrow} alt="Left Arrow" className="w-8 h-8" />
   </button>
</div>
      
      </div>
    </div>
  );
}