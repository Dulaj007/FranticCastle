import GuildBack from '../assets/images/guildbacknew.png';
import { GuildSlider } from '../components/ui/GuildSlider';
import { Castle_Data } from '../constants/CastleData';
import RevealText from '../components/ui/RevealText';

const Guild = () => {
  const Guild = Castle_Data.find((castle) => castle.id === "Guild");
  return (
    <div  className="relative bg-[var(--color-background-primary)] min-h-screen flex items-center justify-center">

    {/* Mobile background */}
    <div
      className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
      style={{
        backgroundImage: ` url(${GuildBack})`,
        backgroundSize: "200%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />

    {/* Desktop background */}
    <div
      className="absolute inset-0 hidden min-[800px]:block bg-cover bg-center"
      style={{
        backgroundImage: `url(${GuildBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 0,
      }}
    />
      <div className="absolute z-50 bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      {Guild && (
      <div className=" z-55  h-auto flex flex-col min-[1000px]:flex-row items-center justify-between max-[1000px]:mt-70 gap-5 min-[1000px]:gap-30 ">
          <div className="">
          <RevealText delay={0}>
  {/* Bug fix: the original had leading[1em] (missing dash) which produced no CSS. Corrected and deduplicated. */}
  <p className="leading-[1em] max-[1000px]:text-[6vw] max-[1000px]:text-center uppercase font-bold min-[1000px]:font-extrabold tracking-wide min-[1000px]:text-[2.7vw] text-[var(--color-text-light)]">
     {Guild.title[0]}
    <span className="inline min-[1000px]:hidden leading-[1em]  text-[var(--color-text-secondary)]">
      {Guild.title[1]}</span>
  </p>
</RevealText>
  <RevealText delay={0.14}>
    <p className=" max-[1000px]:text-center uppercase font-bold  min-[1000px]:font-extrabold tracking-wide  min-[1000px]:text-[7vw] leading-[1em]  text-[var(--color-text-secondary)] hidden  min-[1000px]:block">
    {Guild.title[1]}
    </p>
  </RevealText>

    <RevealText delay={0.27} variant="fade">
      <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] max-[1000px]:text-center  min-[1000px]:text-[1.3vw] w-[85vw]  min-[1000px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide text-[var(--color-text-light)]">
          {Guild.suBTitle[0]}
              </p>
    </RevealText>
    <RevealText delay={0.37} variant="fade">
      <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] max-[1000px]:text-center min-[1000px]:text-[1vw] leading-[1.3em] w-[85vw] tracking-wider  min-[1000px]:w-[25vw] pt-1 text-justify text-[var(--color-text-light)]/80">
          {Guild.description[0]}
             </p>
    </RevealText>

    </div>
  <div className="min-[1000px]:w-1/2">
  <GuildSlider />
</div>

</div>)}
      <div className="absolute top-0 left-0 w-full h-70 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>
      <div className="absolute z-50 bottom-0 left-0 w-full h-70 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none"></div>

</div>
  )
}

export default Guild
