import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import LoadingGif from '../assets/Images/loading.gif';
interface Article {
  id: number;
  title: string;
  suBTitle: string;
  writer: string;
  date: string;
  readTime: string;
  views: string;
  shares: string;
  description: string[];
  image?: string; // Optional field
}

interface ArticleProps {
  article: Article; // Use the defined interface for the article prop
}

const Article = ({ article }: ArticleProps) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [welcomeEmail, setWelcomeEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  
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
     
  if (!name) {
    setError("Please enter your name.");
    return;
  }
  setLoading(true);
  //use this for node server
    // try {
    //   const response = await fetch("http://localhost:5000/subscribeFromArticle", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ name, email }),
    //   });
    try {
      
      const formDataEncoded = new URLSearchParams();
      formDataEncoded.append('name', name); // Append name to the form data
      formDataEncoded.append('email', email); // Append email to the form data

      
    
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
  setName(""); 
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




  if (!article) return null;
  return (
   <div className="w-auto p-4 rounded shadow-lg  my-5">
      <h1 className="text-4xl font-bold mb-2 uppercase py-5 text-[var(--color-text-secondary)]">{article.title}</h1>
      <h2 className="text-2xl text-[var(--color-text-light)] mb-2">{article.suBTitle}</h2>
      {/* Bug fix: text-bold is not a Tailwind utility — corrected to font-bold. */}
      <p className="text-gray-300 font-bold text-sm mb-4">{article.writer} — {article.date} — {article.readTime} — {article.views} — {article.shares}</p>

     
      <div className="text-[var(--color-text-light)]/70 pt-5 space-y-2">
        <p className='text-2xl py-2'>{article.description[0]}</p>
        <p className='text-md'>{article.description[1]}</p>
        <p className='text-2xl font-bold py-2'>{article.description[2]}</p>
        <p className='text-md'>{article.description[3]}</p>
        <p className='text-2xl font-bold py-2'>{article.description[4]}</p>
        <p className='text-md'>{article.description[5]}</p>
        <p className='text-md'>{article.description[6]}</p>
        <p className='text-md'>{article.description[7]}</p>
        <p className='text-md'>{article.description[8]}</p>

    </div>
      {article.image && <img src={article.image} alt={article.title} className="w-full h-auto rounded mb-4 py-5" />}
      {/*
        * Bug fix: this button was type="submit" but sits outside any <form> element.
        * type="submit" on a standalone button has no effect but is semantically
        * incorrect — changed to type="button".
        */}
      <button
          type="button"
          className="mt-4 tracking-[0.5em] py-3 bg-[var(--color-text-secondary)] w-full text-[var(--color-text-light)] px-2 rounded uppercase text-md font-semibold hover:bg-pink-600 transition"
        >
          View Comments (0)
        </button>
      <h2 className="text-3xl text-[var(--color-text-secondary)] pt-5">SIGN UP FOR OUR NEWSLETTERS</h2>
      <p className="text-gray-400 leading-[1em] text-2xl">STAY UPDATED, SURVIVOR!</p>
      <form onSubmit={handleSubscribe} className="mt-4 flex flex-col items-center w-full ">
        <div className="flex flex-col min-[1100px]:flex-row gap-4 w-full items-center justify-center">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 h-15 border text-[var(--color-text-light)] placeholder-[var(--color-text-light)]/90 border-[var(--color-text-light)]/90 rounded  w-full focus:outline-none focus:border-[var(--color-text-secondary)]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 h-15 border text-[var(--color-text-light)] placeholder-[var(--color-text-light)]/90 border-[var(--color-text-light)]/90 rounded  w-full focus:outline-none focus:border-[var(--color-text-secondary)]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
             
           {/*
            * Bug fix: the button had both type="submit" (triggering the form's
            * onSubmit) AND onClick={handleSubscribe}, which caused handleSubscribe
            * to be called twice on every click — sending two API requests.
            * Removed the redundant onClick; the form's onSubmit handler is sufficient.
            */}
           <button
          type="submit"
          className="w-full bg-[var(--color-text-secondary)] tracking-[0.5em] text-[var(--color-text-light)] px-8 py-4 rounded text-lg font-semibold hover:bg-pink-600 transition"
        >
          SUBSCRIBE
        </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex  w-full gap-2 mt-4 ">
          <input
            type="checkbox"
            checked={welcomeEmail}
            onChange={(e) => setWelcomeEmail(e.target.checked)}
            className="w-4 h-4 text-[var(--color-text-secondary)] bg-gray-800 border-gray-700 rounded focus:ring-pink-500"
          />
          <label className="text-gray-400 text-sm">Would you like a special welcome email or additional perks for subscribers?</label>
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
    </div>
  );
};

export default Article;
