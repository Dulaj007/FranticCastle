import tree from '../assets/Images/treeNew.png';
import btn from '../assets/images/Button.png';
import { Castle_Data } from "../constants/CastleData";
import { Link as ScrollLink } from 'react-scroll';
import RevealText from '../components/ui/RevealText';

const Team = () => {
  const Team = Castle_Data.find((castle) => castle.id === "Team");

  return (
    <div className="relative flex flex-col h-auto bg-[var(--color-background-primary)] overflow-hidden">
      <div className="h-auto bg-[var(--color-text-light)] border-1 rounded-[50px] overflow-hidden">
        <div className="min-[800px]:ml-10 max-[350px]:gap-10 flex flex-col min-[800px]:flex-row items-center justify-center h-auto mt-10 gap-5">
          {Team && (
            <div className="max-[800px]:px-5 max-[800px]:mt-5">
              <RevealText delay={0}>
                <p className="leading-[1em] text-[8.4vw] max-[800px]:text-center uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[3.0vw] text-[var(--color-text-fourth)]">
                  {Team.title[0]}
                </p>
              </RevealText>

              <RevealText delay={0.12}>
                <p className="uppercase font-bold text-[14.8vw] max-[800px]:text-center min-[800px]:text-[5.3vw] min-[800px]:font-extrabold leading-[1em] tracking-wider text-[var(--color-text-third)]">
                  {Team.title[1]}
                </p>
              </RevealText>

              <RevealText delay={0.24}>
                <p className="uppercase font-bold min-[800px]:font-extrabold leading-[1em] text-[16.3vw] max-[800px]:text-center min-[800px]:text-[5.6vw] tracking-wider text-[var(--color-text-fourth)]">
                  {Team.title[2]}
                </p>
              </RevealText>

              <RevealText delay={0.34} variant="fade">
                <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.3vw] w-[85vw] min-[800px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide text-[var(--color-text-fourth)]">
                  {Team.suBTitle[0]}
                </p>
              </RevealText>

              <RevealText delay={0.44} variant="fade">
                <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.5em] w-[85vw] tracking-wider min-[800px]:w-[34vw] pt-1 text-justify text-[var(--color-text-fourth)]/80">
                  {Team.description[0]}
                </p>
              </RevealText>

              <RevealText delay={0.54} variant="fade">
                <div className="pt-5">
                <ScrollLink
                    to="team-info"
                    smooth={true}
                    duration={500}
                    className="flex min-[800px]:hidden "
                  >
                  <button className="relative cursor-pointer w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                    <img
                      src={btn}
                      alt="Button"
                      className="w-full h-auto brightness-120"
                    />
                    <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                      Meet The Team
                    </span>
                  </button>
                  </ScrollLink>
                  <ScrollLink
                    to="team-info-Pc"
                    smooth={true}
                    duration={500}
                    className=" min-[800px]:flex hidden"
                  >
                  <button className="relative cursor-pointer w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                    <img
                      src={btn}
                      alt="Button"
                      className="w-full h-auto brightness-120"
                    />
                    <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                      Meet The Team
                    </span>
                  </button>
                  </ScrollLink>
                </div>
              </RevealText>
            </div>
          )}


          <div className="min-[800px]:w-1/2">
            <img src={tree} alt="Tree" className="w-600 opacity-98" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
