import NewsBack from '../assets/images/newsPc.png';
import NewsBackMobile from '../assets/images/newsPcMobile.png';
import { Castle_Data } from '../constants/CastleData';
import TopLogoMobile from '../components/ui/topLogoMobile';
import TopLogo from '../components/ui/TopLogo';
import { Nav } from '../components/nav';

import FollowUs from '../components/ui/FollowUs';
import btn from '../assets/images/Button.png';
import ArticleUpdateSlider from '../components/ui/ArticleUpdateSlider';
import { Link } from 'react-router-dom';
import RevealText from '../components/ui/RevealText';




const NewsHero = () => {
         const NewsHero = Castle_Data.find((castle) => castle.id === "NewsHero");


  return (
    <div  className="relative z-10 overflow-hidden bg-[var(--color-background-primary)] min-h-screen  flex items-center max-[800px]:justify-center justify-start">

    {/* Mobile background */}
    <div
      className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
      style={{
        backgroundImage: ` url(${NewsBackMobile})`,
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
        backgroundImage: `url(${NewsBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
    <TopLogo/>
<TopLogoMobile/>
 <Nav/>

 {NewsHero && (
 <div className=" mt-35 px-6  min-[800px]:ml-20 max-[800px]:mt-[80vw] z-250 ">

    <RevealText delay={0}>
    <p className=" leading-[1em] text-[8.1vw] max-[800px]:text-center uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[3.1vw]  text-[var(--color-text-light)]">
    {NewsHero.title[0]}</p>
    </RevealText>
    <RevealText delay={0.14}>
    <p className="leading-[1em] text-[9.7vw] max-[800px]:text-center uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[3.7vw] text-[var(--color-text-secondary)]">
        {NewsHero.title[1]} </p>
    </RevealText>

    <RevealText delay={0.27} variant="fade">
    <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.3vw] w-[90vw] min-[800px]:w-[38vw] leading-[1.2em] mt-2 font-bold text-[10px] tracking-wider text-[var(--color-text-light)]">

    {NewsHero.suBTitle[0]}

    </p>
    </RevealText>


    <RevealText delay={0.37} variant="fade">
    <div className='flex slex-row max-[800px]:mt-3 py-[1vw] gap-3 justify-between w-[90vw] min-[800px]:w-[26vw]'>
<button  className="relative cursor-pointer w-[40vw] min-[800px]:w-[12vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
  <img
    src={btn}
    alt="Button"
    className="w-full h-auto brightness-120"

  />
  <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
  Explore Our Games
  </span>
</button>
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
</button></Link>



      </div>
      </RevealText>
      <div className=''> <FollowUs/></div>
      <ArticleUpdateSlider />

   </div>)}

    </div>
  )
}

export default NewsHero
