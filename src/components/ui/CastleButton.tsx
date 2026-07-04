import React from "react";
interface CastleButtonProps {
  text: string;
  onClick?: () => void;
  btnImage: string;
}

const CastleButton: React.FC<CastleButtonProps> = ({ text, onClick, btnImage }) => {
  return (
    <button
      className="relative w-50 h-15 xl:w-full xl:h-20 opacity-90 bg-cover bg-center rounded-lg 
                 Hover-Effect "
      style={{ backgroundImage: `url(${btnImage})` }}
      onClick={onClick}
    >
      <span className="absolute font-extrabold tracking-widest inset-0 flex items-center justify-center uppercase
                   text-[10px] lg:text-[12px] xl:text-[15px]">
        {text}
      </span>
    </button>
  );
};

export default CastleButton;
