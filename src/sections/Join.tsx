import JoinBack from '../assets/images/joinBack.png';
import JoinBackMobile from '../assets/images/joinBackM.png';
import JoinTree from '../assets/images/joinTree.png';
import Banner from '../assets/images/snde.png';
import JoinGif from '../assets/images/joingf.gif';
import JoinLighting from '../assets/images/plight.gif';
import { FollowUsCol } from '../components/ui/FollowUsCol';
import { Castle_Data } from "../constants/CastleData";
import RevealText from '../components/ui/RevealText';

const Join = () => {
  const Join = Castle_Data.find((castle) => castle.id === "Join");
  return (
    <div className="relative bg-[var(--color-background-primary)]  min-[800px]:min-h-screen max-[800px]:h-[200vw]  flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 hidden min-[800px]:block bg-cover bg-center"
        style={{
          backgroundImage: `url(${JoinBack})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
        <div
      className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
      style={{
        backgroundImage: ` url(${JoinBackMobile})`,
        backgroundSize: "100%",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
     {/* Banner Image at Top Center */}
     <img
        src={Banner}
        alt="Banner"
        className="z-23 absolute top-0 w-[30%] max-[800px]:top-5 max-[800px]:w-[50%]"
      />
      <div className="absolute top-0  left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      {Join && (
    <div className=" max-[800px]:text-center text-right absolute  max-[800px]:top-[28vw] min-[800px]:right-25 ">
            <RevealText delay={0}>
              <p className="uppercase font-bold min-[800px]:font-extrabold leading-[1em] text-[15vw]  min-[800px]:text-[6.3vw] tracking-wider
               text-[var(--color-text-light)]">
                     {Join.title[0]}
              </p>
            </RevealText>
            <RevealText delay={0.12}>
              <p className="uppercase font-bold text-[8vw]  min-[800px]:text-[3.5vw] min-[800px]:font-extrabold leading-[1em] tracking-wider text-[var(--color-text-secondary)]">
           {Join.title[1]}
              </p>
            </RevealText>
            <RevealText delay={0.24}>
              <p className="uppercase font-bold text-[8vw] min-[800px]:text-[3.5vw] min-[800px]:font-extrabold leading-[1em] text-[var(--color-text-light)]">
              {Join.title[2]}
              </p>
            </RevealText>
            <RevealText delay={0.34} variant="fade">
              <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.3vw] w-[85vw] min-[800px]:w-[45vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide  max-[800px]:text-center text-right text-[var(--color-text-light)]">
              {Join.suBTitle[0]}
              </p>
            </RevealText>
            <RevealText delay={0.44} variant="fade">
              <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.3em] w-[85vw] tracking-wider mt-2 min-[800px]:w-[45vw]  max-[800px]:text-center text-right text-[var(--color-text-light)]/80">
              {Join.description[0]}

              </p>
            </RevealText>
            <FollowUsCol/>

          </div>)}
<div className='absolute -bottom-2 min-sm:bottom-20  max-[1350px]:left-2 xl:left-50'>
      {/* JoinTree positioned bottom left, slightly away from edges */}
      <img
        src={JoinTree}
        alt="Join Tree"
        className=" z-10 w-150 h-auto"
      />

      {/* JoinGif positioned right above JoinTree */}
      <img
        src={JoinGif}
        alt="Join Gif"
        className="w-20 absolute opacity-90 z-20 mix-blend-screen
        min-sm:bottom-60 min-[800px]:left-60 min-[800px]:w-32
        max-sm:bottom-40 max-[800px]:left-1/2 max-[800px]:transform max-[800px]:-translate-x-1/2"
/>

      {/* JoinLighting positioned left to JoinTree */}
      <img
        src={JoinLighting}
        alt="Join Lighting"
        className="max-[800px]:hidden block absolute opacity-20 bottom-30 -left-10 z-15 w-36 h-auto mix-blend-screen"
      />

    </div>
     <div className="absolute bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Join;
