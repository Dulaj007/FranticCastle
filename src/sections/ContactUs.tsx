
import { AnimatePresence, motion } from "framer-motion";
import btn from "../assets/images/Button.png";
import Letter from "../assets/images/letter.png";
import LetterGif from "../assets/images/letterGif.gif";
import { useState } from "react";
import LoadingGif from '../assets/Images/loading.gif';


const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);


  const [loading, setLoading] = useState(false);


  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
  
    setLoading(true);

    //Use this part with node server
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

  return (
    <div className="bg-[var(--color-background-primary)] flex justify-center items-center w-full">
   
      <div className="bg-[var(--color-text-light)] rounded-[70px] border w-full flex flex-col min-[800px]:flex-row items-center justify-center shadow-lg">
        
        
        <div className="relative flex justify-center items-center my-20">
          
          {/* Swaying Letter with Top Pivot Point */}
          <motion.img 
            src={Letter} 
            alt="Letter" 
            className="w-[400px] max-sm:w-[200px]"
            style={{ transformOrigin: "top center" }}  
            animate={{
              rotate: [0, -5, 5, -5, 5, -5, 0], 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10, 
              ease: "easeInOut"
            }}
          />
          
    <motion.div
      className="absolute left-5 z-20 mix-blend-screen"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
    >
      <img 
        src={LetterGif} 
        alt="Letter Animation" 
        className="w-[300px] opacity-90" 
      />
    </motion.div>
          
          {/*
            * Bug fix: the "CONTACT US" button had no onClick handler or link,
            * making it completely non-functional. Replaced with an <a> tag that
            * opens the studio's contact email address in the default mail client.
            * Update the mailto address here if the contact email changes.
            */}
          <a
            href="mailto:contact@franticcastle.com"
            className="absolute w-50 z-25 min-[800px]:mt-20 h-15 opacity-88 bg-cover bg-center Hover-Effect font-semibold rounded-lg flex items-center justify-center"
            style={{ backgroundImage: `url(${btn})` }}
            aria-label="Contact us by email"
          >
            <span className="absolute tracking-widest inset-0 flex items-center text-[12px] justify-center uppercase font-extrabold">
              CONTACT US
            </span>
          </a>
        </div>

        {/* Right Side - Text and Input Box */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-[25px] sm:text-[40px] min-[800px]:text-[60px] xl:text-[70px] leading-[1em] font-extrabold text-center tracking-[0.07em] text-[var(--color-text-dark)]">
            STAY AHEAD OF THE
          </h2>
          <h1 className="text-[45px] sm:text-[60px] min-[800px]:text-[90px]  xl:text-[80px] leading-[0.6em] text-center font-extrabold tracking-[0.5em] text-[var(--color-text-third)]">
            GAME
          </h1>
          <p className="text-[15px] sm:text-[20px] leading-[1.5em] min-[800px]:text-[25px]  xl:text-[30px] text-center mr-5 text-gray-500">
            Get Exclusive Access to Frantic Castle!
          </p>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {/* Input Field and Subscribe Button */}
          <div className="max-[800px]:mb-10 flex text-[10px] sm:text-[15px] min-[800px]:text-[25px] items-center bg-gray-200 rounded-full px-4 py-2 mt-5">
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="flex-1 bg-transparent outline-none text-gray-600 px-2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button className="bg-black  text-[var(--color-text-light)] font-bold px-5 py-2 rounded-full Hover-Effect"
                onClick={handleSubscribe}>
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>
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
    </div>
  );
};

export default ContactUs;
