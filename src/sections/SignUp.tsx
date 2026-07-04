import { FaUser, FaEnvelope, FaDiscord } from "react-icons/fa";
import SignUpback from "../assets/images/signup.png";
import btn from '../assets/images/Button.png';
const SignUp = () => {
  return (
    <div className="h-screen flex items-center justify-center relative bg-transparent">

      <div className=""></div>

      {/* SignUp Card Container */}
      <div className="relative flex flex-col items-center w-[450px]">
        {/* SignUp Background Image */}
        <img src={SignUpback} alt="Sign Up Background" className="w-full h-auto" />

        {/* Form Container */}
        <div className="absolute  w-1/2 top-50 flex flex-col items-center">
        

          {/* Full Name Field */}
          <div className="mb-4 w-full">
         
            <label className="block font-bold text-sm pb-2 text-[var(--color-text-light)] max-[800px]:mt-2">Full Name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="Input-Box bg-[var(--color-text-light)]"
              />
              
              <FaUser className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4 w-full">
          <label className="block font-bold text-sm pb-2 text-[var(--color-text-light)] max-[800px]:mt-2">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="Input-Box  bg-[var(--color-text-light)]"
              />
              <FaEnvelope className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Log In Button */}
          <button
            className="z-55 brightness-150 top-23 absolute w-35 mt-65 min-[800px]:mt-20 h-11 opacity-95 bg-cover bg-center Hover-Effect  font-semibold rounded-lg"
            style={{ backgroundImage: `url(${btn})` }}
          >
            <span className="absolute tracking-widest inset-0 flex items-center text-[12px]  justify-center uppercase font-extrabold">
            Log In
            </span>
          </button>

          {/* Discord Log In Button */}
          <button className=" flex mt-20 text-sm items-center justify-center bg-[#5865F2] hover:bg-blue-700 transition text-[var(--color-text-light)] font-bold py-3 px-5 rounded-2xl">
           Log In With Discord  <FaDiscord className="ml-2" /> 
          </button>



          {/* Sign Up Link */}
          <p className="text-center mt-4 text-gray-400 text-sm font-bold">
            Don't have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
