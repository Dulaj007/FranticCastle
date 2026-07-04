
import Line from '../assets/images/lineD.png';
import { Castle_Data } from '../constants/CastleData';

export const Challenge = () => {
   const Challenge = Castle_Data.find((castle) => castle.id === "Challenge");
  return (
    <div className="bg-[var(--color-background-primary)] w-full flex flex-col items-center">
     
      <img src={Line} alt="Line" className="w-full my-5" />

      {Challenge&&(
        <p className="px-4 sm:px-20 text-center text-[40px] sm:text-[60px] md:text-[70px] lg:text-[100px]  text-[var(--color-text-light)] my-10">
            {Challenge.description[0]}
        </p>
      )}
     
      <img src={Line} alt="Line" className="w-full my-5" />
      
    </div>
  );
};