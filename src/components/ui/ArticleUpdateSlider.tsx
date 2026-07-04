"use client";
import TimeIcon from '../../assets/Icons/time-black.svg';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Article_Data } from '../../constants/ArticlesData';


export default function ArticleUpdateSlider() {
  const [search, setSearch] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 800 ? 2 : 3);

    useEffect(() => {
        const handleResize = () => {
          setSlidesToShow(window.innerWidth < 800 ? 2 : 3);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {
        if (!isAutoSliding) return;
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + slidesToShow) % Article_Data.length);
        }, 5000);
        return () => clearInterval(interval);
      }, [isAutoSliding, slidesToShow]);
    
      useEffect(() => {
        setIsAutoSliding(search === "");
      }, [search]);
    
      const filteredAnnouncements = Article_Data.filter(
        (a) =>
          a.title.toLowerCase().includes(search.toLowerCase()) 
         
      );
  return (
    <div className="w-[55vw] max-[800px]:w-[90vw] p-6 bg-transparent rounded-lg">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Latest Announcements"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[25vw] text-[12px] min-[350px]:text-[14px] min-[450px]:text-[16px] max-[800px]:w-full max-[800px]:w-full: min-[800px]:text-[1vw] p-3 pl-6 mb-4 font-bold rounded-full border border-[var(--color-text-light)] text-[var(--color-text-light)]"
      />

      {/* Announcement Slider */}
      <div className="relative overflow-hidden max-[800px]:h-100 rounded-lg">
        <AnimatePresence mode="wait">
          {filteredAnnouncements.length > 0 ? (
            /* Bug fix: grid-rows-${slidesToShow} was dynamically constructed —
               Tailwind purges such classes. Replaced with static responsive classes. */
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
                    className="p-6 bg-[var(--color-text-light)]  h-auto shadow-md"
                 
                  >
                    <h2 className="text-[12px] min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1vw] font-bold text-gray-500">{Article_Data.title}</h2>
                    {/* Bug fix: flex-raw is not a valid Tailwind class — corrected to flex-row. */}
                    <div className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[0.8vw] justify-between flex flex-row mt-2 ">
                      <p className="text-black/70">{Article_Data.date} </p>
                    
                       <p className="font-bold text-black flex flex-row">   <img src={TimeIcon}  className=" w-[1vw]  h-[1vw] max-[800px]:w-4.5 max-[800px]:h-4.5 opacity-70 pr-0.5" />{Article_Data.readTime}</p>
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

        {/* Dots Navigation */}
        <div className="flex justify-start mt-4 space-x-2">
          {Array.from({ length: Math.ceil(Article_Data.length / slidesToShow) }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                 i * slidesToShow === currentIndex ? "bg-purple-500" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(i * slidesToShow)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}