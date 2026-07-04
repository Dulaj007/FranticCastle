import btn from '../assets/images/Button.png';
import { Project_Data } from '../constants/Projects';
import RevealText from '../components/ui/RevealText';

// Fetch project data correctly
const Project01 = Project_Data.find((project) => project.id === "Project01");
const Project02 = Project_Data.find((project) => project.id === "Project02");
const Project03 = Project_Data.find((project) => project.id === "Project03");


const Projects = () => {
  return (
    <div className="relative flex flex-col h-auto bg-[var(--color-background-primary)] overflow-hidden">
      <div className="min-h-screen bg-[var(--color-text-light)] border-1 flex flex-row rounded-[50px] overflow-hidden 2xl:mx-10">
        <div className="flex flex-col   gap-1 min-[800px]:p-0">
          {/* First Project Section */} {Project01 && (
          <div className="flex flex-col min-[800px]:flex-row items-center mt-10 justify-center h-auto gap-1 min-[800px]:mx-10">

              <div className="  min-[800px]:mx-0 m ">
              <RevealText delay={0} variant="fade">
                  <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.4vw] w-[85vw] min-[800px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide ] text-[var(--color-text-fourth)]">
                    {Project01.subTitle}
                  </p>
                </RevealText>
                <RevealText delay={0.10}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[6.5vw] text-[var(--color-text-fourth)]">
                    {Project01.title[0]}
                  </p>
                </RevealText>
                <RevealText delay={0.20}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-fourth)]">
                    {Project01.title[1]}
                  </p>
                </RevealText>
                <RevealText delay={0.30}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-third)]">
                    {Project01.title[2]}
                  </p>
                </RevealText>

                <RevealText delay={0.42} variant="fade">
                  <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.5em] w-[85vw] tracking-wider min-[800px]:w-[38vw] pt-1 text-justify text-[var(--color-text-fourth)]/80">
                    {Project01.description}
                  </p>
                </RevealText>
                <RevealText delay={0.52} variant="fade">
                <div className="pt-5">
                  <button className="relative cursor-pointer w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                    <img
                      src={btn}
                      alt="Button"
                      className="w-full h-auto brightness-120"
                    />
                    <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                      Explore
                    </span>
                  </button>
                </div>
              </RevealText>
              </div>

            <div className="Hover-Effect px-5">
              <img src={Project01.image} className="w-600 opacity-98 hidden min-[800px]:block " />
              <img src={Project01.imageMobile}  className="w-[90vw]  opacity-98 block min-[800px]:hidden " />
            </div>
          </div> )}

          {/* Second Project Section */}
          {Project02 && (
          <div className="flex flex-col min-[800px]:flex-row items-center max-sm:mt-10 justify-center h-auto gap-1 min-[800px]:mx-10">
            <div className="Hover-Effect">
            <img src={Project02.image} alt="Tree" className="w-600 opacity-98 hidden min-[800px]:block " />

            </div>

            <div className="  min-[800px]:mx-0  ">
              <RevealText delay={0} variant="fade">
                  <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.4vw] w-[85vw] min-[800px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide ] text-[var(--color-text-fourth)]">
                    {Project02.subTitle}
                  </p>
                </RevealText>
                <RevealText delay={0.10}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[6.5vw] text-[var(--color-text-fourth)]">
                    {Project02.title[0]}
                  </p>
                </RevealText>
                <RevealText delay={0.20}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-fourth)]">
                    {Project02.title[1]}
                  </p>
                </RevealText>
                <RevealText delay={0.30}>
                  <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-third)]">
                    {Project02.title[2]}
                  </p>
                </RevealText>

                <RevealText delay={0.42} variant="fade">
                  <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.5em] w-[85vw] tracking-wider min-[800px]:w-[38vw] pt-1 text-justify text-[var(--color-text-fourth)]/80">
                    {Project02.description}
                  </p>
                </RevealText>
                <RevealText delay={0.52} variant="fade">
                <div className="pt-5">
                  <button className="relative cursor-pointer w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                    <img
                      src={btn}
                      alt="Button"
                      className="w-full h-auto brightness-120"
                    />
                    <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                      Explore
                    </span>
                  </button>
                </div>
              </RevealText>
              </div>
              <div className="Hover-Effect">

            <img src={Project02.imageMobile} alt="Tree" className="w-[90vw]  opacity-98 block min-[800px]:hidden " />
            </div>

          </div> )}

              {/* Third Project Section */} {Project03 && (
          <div className="flex mb-5 flex-col min-[800px]:flex-row items-center mt-10 justify-center h-auto gap-1 min-[800px]:mx-10">

          <div className="  min-[800px]:mx-0 ">
          <RevealText delay={0} variant="fade">
              <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.4vw] w-[85vw] min-[800px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide ] text-[var(--color-text-fourth)]">
                {Project03.subTitle}
              </p>
            </RevealText>
            <RevealText delay={0.10}>
              <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[6.5vw] text-[var(--color-text-fourth)]">
                {Project03.title[0]}
              </p>
            </RevealText>
            <RevealText delay={0.20}>
              <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-fourth)]">
                {Project03.title[1]}
              </p>
            </RevealText>
            <RevealText delay={0.30}>
              <p className="leading-[1em] text-[15vw]  uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[7vw] text-[var(--color-text-third)]">
                {Project03.title[2]}
              </p>
            </RevealText>

            <RevealText delay={0.42} variant="fade">
              <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.5em] w-[85vw] tracking-wider min-[800px]:w-[38vw] pt-1 text-justify text-[var(--color-text-fourth)]/80">
                {Project03.description}
              </p>
            </RevealText>
            <RevealText delay={0.52} variant="fade">
            <div className="pt-5">
              <button className="relative cursor-pointer w-[40vw] min-[800px]:w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center">
                <img
                  src={btn}
                  alt="Button"
                  className="w-full h-auto brightness-120"
                />
                <span className="absolute tracking-wider uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                  Explore
                </span>
              </button>
            </div>
          </RevealText>
          </div>

        <div className="Hover-Effect px-5">
          <img src={Project03.image} className="w-600 opacity-98 hidden min-[800px]:block " />
          <img src={Project03.imageMobile}  className="w-[90vw] mb-5  opacity-98 block min-[800px]:hidden " />
        </div>
      </div> )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
