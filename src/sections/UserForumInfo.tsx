import { useState } from "react";
import { FaUser, FaEnvelope, FaDiscord } from "react-icons/fa";
import PlayerInfoBack from "../assets/images/playerInfoBack.png";
import { AnimatePresence, motion } from "framer-motion";
import LoadingGif from '../assets/Images/loading.gif';

export const BetaSignUpForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    discordUsername: "",
    participation: "",
    genres: "",
    budget: "",
    interest: "",
    feedbackInterest: "",
    agreeNDA: false,
  });
  const [error, setError] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);


  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName) return setError("Type your Full Name");
    if (!formData.email.includes("@")) return setError("Type a valid email address");
    if (!formData.discordUsername) return setError("Type your Discord username");
    if (!formData.participation) return setError("Select your Participation");
    if (!formData.genres) return setError("Type your most played genres");
    if (!formData.budget) return setError("Select your financial budget");
    if (!formData.interest) return setError("Type your interest");
    if (!formData.feedbackInterest) return setError("Select your interest in gathering feedback");
    if (!formData.agreeNDA) return setError("Agree to the Beta NDA And Testing Agreement");
    setError("");
   
    setLoading(true);
    //Use this with node server
    // try {
    //   const response = await fetch("http://localhost:5000/send-email", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       fullName: formData.fullName,
    //       email: formData.email,
    //       discordUsername: formData.discordUsername,
    //       participation: formData.participation,
    //       genres: formData.genres,
    //       budget: formData.budget,
    //       interest: formData.interest,
    //       feedbackInterest: formData.feedbackInterest,
    //       agreeNDA: formData.agreeNDA
    //     }),
        
        
    //   });
    try {
      
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataEncoded.append(key, value.toString());
      });
    
      const response = await fetch("https://franticcastle.com/server/BetaSignUp.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },

        body: formDataEncoded.toString(),
      });
      
      if (response.ok) {
        setPopupMessage("Thank you for subscribing to our newsletter!");
        // Reset form fields after successful submission
        setFormData({
          fullName: "",
          email: "",
          discordUsername: "",
          participation: "",
          genres: "",
          budget: "",
          interest: "",
          feedbackInterest: "",
          agreeNDA: false,
        });

      } else {
        setPopupMessage("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error during submission:", error);  
      setPopupMessage("Sorry, something went wrong. Please try again.");
    }

    setLoading(false); 
    setPopupVisible(true); 
    
    setError(""); 
  };

const closePopup = () => {
setPopupVisible(false);
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <div className="relative flex flex-col h-auto bg-[var(--color-background-primary)] overflow-hidden">
      <div
        className="absolute opacity-30 inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${PlayerInfoBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      <div className="max-w-4xl z-2 mx-auto px-15 my-30 2xl:scale-110 py-10 m-10 bg-[var(--color-text-light)] shadow-lg rounded-xl">
        <h2 className="Input-Box-title">Player Information</h2>
        <form onSubmit={handleSubmit} className="z-25 space-y-4">
          <div className="min-[800px]:flex gap-4">
            {/* Name Input */}
            <div className="flex-1 relative">
              <h2 className="font-bold text-sm pb-2 max-[800px]:mt-2">Full Name</h2>
              <input
                type="text"
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange}
                placeholder="Name"
                className="Input-Box"
          
              />
              <FaUser className="absolute right-5 top-10 text-gray-500" />
            </div>

            {/* Email Input */}
            <div className="flex-1 relative">
              <FaEnvelope className="absolute right-5 top-10 text-gray-500" />
              <h2 className="font-bold text-sm pb-2 max-[800px]:mt-2">Email</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="Input-Box"
          
              />
            </div>

            {/* Discord Input */}
            <div className="flex-1 relative">
              <h2 className="font-bold text-sm pb-2 max-[800px]:mt-2">Discord Username</h2>
              <FaDiscord className="absolute right-5 top-10 text-gray-500" />
              <input
                type="text"
                name="discordUsername"
                value={formData.discordUsername}
                onChange={handleChange}
                placeholder="Discord Username"
                className="Input-Box"
              />
            </div>
          </div>

          {/* Gaming Experience */}
          <h2 className="Input-Box-title">Gaming Experience</h2>

          {/* Beta Test Experience */}
          <div>
            <label className="font-bold text-sm">Have You Participated In A Beta Test Before?</label>
            <select
               name="participation"
              value={formData.participation}
              onChange={handleChange}
              className="Input-Box mt-2"
            
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* Game Genres */}
          <div>
            <label className="font-bold text-sm pb-2">Which Genres Do You Play The Most?</label>
            <input
              type="text"
              name="genres"
              value={formData.genres}
              onChange={handleChange}
              placeholder="Action RPG, Strategy, etc."
              className="Input-Box mt-2"
            
            />
          </div>

          {/*
            * Bug fix: the label said "Financial Budget" but the options listed
            * hours of gaming time, not money. Corrected to "Weekly Gaming Time"
            * to match the actual option values.
            */}
          <div>
            <label className="font-bold text-sm pb-2">Weekly Gaming Time</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="Input-Box mt-2"
            >
              <option value="">Select Weekly Hours</option>
              <option value="0-5">0 – 5 Hours</option>
              <option value="6-10">6 – 10 Hours</option>
              <option value="10+">10+ Hours</option>
            </select>
          </div>

          {/* Feedback & Testing */}
          <h2 className="Input-Box-title">Feedback & Testing</h2>

          {/* Interest in Game */}
          <div>
            <label className="font-bold text-sm pb-2">What Interests You Most About Diced?</label>
            <input
              type="text"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              placeholder="Short text response"
              className="Input-Box mt-2"
           
            />
          </div>

          {/* Willingness to Provide Feedback */}
          <div>
            <label className="font-bold text-sm pb-2">Are You Willing To Provide Feedback On Bugs, Mechanics, And Balance?</label>
            <select
              name="feedbackInterest"
              value={formData.feedbackInterest}
              onChange={handleChange}
              className="Input-Box mt-2"
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {/* NDA Agreement Checkbox */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreeNDA"
              checked={formData.agreeNDA}
              onChange={handleChange}
              className="w-4 h-4 mb-2"
          
            />
            <label className="font-bold text-sm pb-2">Do You Agree To The Beta NDA And Testing Agreement?</label>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {/* Submit Button */}
          <button type="submit" className="w-full p-3 bg-black text-[var(--color-text-light)] rounded-lg font-bold hover:bg-gray-800">
            Submit Application
          </button>
        </form>
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
      <div className="absolute top-0 left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default BetaSignUpForm;
