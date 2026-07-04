import ChamberBack from '../assets/images/ChamberBack.png';
import ChamberBackPc from '../assets/images/chamberPc.png';

import TopLogo from '../components/ui/TopLogo';
import { Nav } from '../components/nav';
import FollowUs from '../components/ui/FollowUs';
import { Castle_Data } from '../constants/CastleData';
import btn from '../assets/images/Button.png';
import TopLogoMobile from '../components/ui/topLogoMobile';
import { Link } from 'react-router-dom';
import RevealText from '../components/ui/RevealText';

const GameChamber = () => {
      const Chamber = Castle_Data.find((castle) => castle.id === "Chamber");
  return (
    <div  className="overflow-hidden relative bg-[var(--color-background-primary)] max-[800px]:h-auto min-[800px]:min-h-screen flex items-center justify-start">

    {/* Mobile background */}
    <div
      className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
      style={{
        backgroundImage: ` url(${ChamberBack})`,
        backgroundSize: "100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />

    {/* Desktop background */}
    <div
      className="absolute inset-0 hidden min-[800px]:block bg-cover bg-center"
      style={{
        backgroundImage: `url(${ChamberBackPc})`,
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
<TopLogo/>
<TopLogoMobile/>
 <Nav/>

 {Chamber && (
 <div className="max-[800px]:mt-[70vw] max-[800px]:mx-5 min-[800px]:ml-20  z-250 ">

    <RevealText delay={0}>
      <p className=" leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[4vw] text-[var(--color-text-light)]">
      {Chamber.title[0]}</p>
    </RevealText>

    <RevealText delay={0.10}>
      <p className="leading-[1em] text-[13.5vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[3.6vw]  text-[var(--color-text-light)]">
          {Chamber.title[1]}</p>
    </RevealText>

    <RevealText delay={0.20}>
          <p className="leading-[1em] text-[14.5vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[3.9vw]  text-[var(--color-text-light)]">
              {Chamber.title[2]} </p>
    </RevealText>

    <RevealText delay={0.30}>
      <p className=" uppercase font-bold min-[800px]:font-extrabold leading-[0.8em] text-[23vw]  min-[800px]:text-[6.4vw] tracking-wider text-[var(--color-text-secondary)]">
      {Chamber.title[3]}</p>
    </RevealText>

    <RevealText delay={0.40} variant="fade">
      <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.3vw] w-[90vw] min-[800px]:w-[35vw] leading-[1em] mt-5 font-bold text-[10px] tracking-wide text-[var(--color-text-light)]">
      {Chamber.suBTitle[0]} <br></br>  {Chamber.suBTitle[1]} </p>
    </RevealText>

    <RevealText delay={0.50} variant="fade">
      <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.3em] w-[90vw] tracking-wider min-[800px]:w-[27vw] mt-2 text-justify text-[var(--color-text-light)]/80">
      {Chamber.description[0]}</p>
    </RevealText>

    <RevealText delay={0.60} variant="fade">
    <div className='flex flex-row pt-[2vw] py-[1vw] gap-5 justify-between w-[90vw] min-[800px]:w-[27vw]'>
    {/*
      * Bug fix: the "Explore Our Games" button had no Link wrapper or onClick
      * handler — it was a completely dead button. Wrapped in Link to="/Chambers"
      * so it navigates to the correct page.
      */}
    <Link to="/Chambers">
    <button  className="relative cursor-pointer w-[40vw] min-[800px]:w-[12vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
      <img
        src={btn}
        alt=""
        className="w-full h-auto brightness-120"/>
      <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
      Explore Our Games
      </span>
    </button>
    </Link>

  <Link to="/SignUp">
    <button   className="relative cursor-pointer w-[40vw] min-[800px]:w-[12vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
      <img
        src={btn}
        alt="Button"
        className="w-full h-auto brightness-120"

      />
      <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
      join beta
      </span>
    </button>
  </Link>


  </div>
  </RevealText>

  <div className=''><FollowUs/></div>

  </div>)}
</div>
  )
}

export default GameChamber
