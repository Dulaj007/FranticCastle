/*
 * SignUpHero.tsx
 *
 * Hero section for the /SignUp page. Displays the page headline, supporting
 * copy, and a pair of CTA buttons. The "Join Beta" button uses react-scroll
 * to smoothly scroll down to the #user-forum-info section (the actual form)
 * on the same page rather than navigating away.
 *
 * An instance of BetaSignUpForm is embedded directly in the hero on the right
 * side on desktop, giving the user immediate access to the form without
 * scrolling. On mobile (<450px) the form is positioned below the hero copy.
 *
 * Bug fix: the original import was `import SignUpCard from './SignUp'` which
 * references a non-existent file in the sections directory. The form component
 * lives in UserForumInfo.tsx and exports BetaSignUpForm as its default.
 */

import SignUpBack                  from '../assets/images/signupback.png';
import SignUpPc                    from '../assets/images/signupPc.png';
import { Link as ScrollLink }      from 'react-scroll';
import { Link as RouterLink }      from 'react-router-dom';
import btn                         from '../assets/images/Button.png';
import BetaSignUpForm              from './UserForumInfo';
import Line                        from '../assets/images/lineD.png';
import FollowUs                    from '../components/ui/FollowUs';
import { Castle_Data }             from '../constants/CastleData';
import TopLogoMobile               from '../components/ui/topLogoMobile';
import { Nav }                     from '../components/nav';
import TopLogo                     from '../components/ui/TopLogo';
import RevealText                  from '../components/ui/RevealText';

const SignUpHero = () => {
    const SignUp = Castle_Data.find((castle) => castle.id === 'SignUp');

    return (
        <div className="relative z-10 overflow-hidden bg-[var(--color-background-primary)] min-[800px]:min-h-screen max-[800px]:h-auto flex items-center justify-center">

            {/* Mobile background image. */}
            <div
                className="absolute inset-0 block min-[800px]:hidden bg-cover bg-top"
                style={{
                    backgroundImage:    `url(${SignUpBack})`,
                    backgroundSize:     '200%',
                    backgroundPosition: 'top center',
                    backgroundRepeat:   'no-repeat',
                    zIndex:             0,
                }}
            />

            {/* Desktop background image. */}
            <div
                className="absolute inset-0 hidden min-[800px]:block bg-cover bg-center"
                style={{
                    backgroundImage:    `url(${SignUpPc})`,
                    backgroundSize:     'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat:   'no-repeat',
                    zIndex:             0,
                }}
            />

            {SignUp && (
                <div className="flex flex-col xl:gap-20 min-[800px]:flex-row items-center justify-center gap-1 min-[800px]:mx-10">

                    <div className="max-[800px]:px-5 max-[800px]:mt-[150vw] max-[450px]:mb-150">
                        <RevealText delay={0}>
                            <p className="leading-[1em] text-[11vw] max-[800px]:text-center uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[4.0vw] text-[var(--color-text-light)]">
                                {SignUp.title[0]}
                            </p>
                        </RevealText>
                        <RevealText delay={0.14}>
                            <p className="leading-[1em] text-[12vw] max-[800px]:text-center uppercase font-bold min-[800px]:font-extrabold tracking-wide min-[800px]:text-[4.4vw] text-[var(--color-text-secondary)]">
                                {SignUp.title[1]}
                            </p>
                        </RevealText>
                        <RevealText delay={0.27} variant="fade">
                            <p className="min-[350px]:text-[14px] min-[450px]:text-[16px] min-[800px]:text-[1.3vw] w-[85vw] min-[800px]:w-[35vw] leading-[1em] mt-2 font-bold text-[10px] tracking-wide text-[var(--color-text-light)]">
                                {SignUp.suBTitle[0]}
                            </p>
                        </RevealText>
                        <RevealText delay={0.37} variant="fade">
                            <p className="text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] min-[800px]:text-[1vw] leading-[1.5em] w-[89vw] tracking-wider min-[800px]:w-[36vw] pt-1 text-justify text-[var(--color-text-light)]/80">
                                {SignUp.description[0]}
                            </p>
                        </RevealText>

                        <RevealText delay={0.47} variant="fade">
                            <div className='flex flex-row pt-[2vw] py-[1vw] gap-5 justify-between w-[90vw] min-[800px]:w-[27vw]'>
                                <RouterLink to="/Chambers">
                                    <button
                                        className="relative cursor-pointer w-[40vw] min-[800px]:w-[12vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                        aria-label="Explore Our Games"
                                    >
                                        <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                        <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                                            Explore Our Games
                                        </span>
                                    </button>
                                </RouterLink>

                                {/*
                                  * react-scroll ScrollLink — scrolls to #user-forum-info on the same
                                  * page (defined in SignUp.tsx) without a full navigation event.
                                  */}
                                <ScrollLink
                                    to="user-forum-info"
                                    smooth={true}
                                    duration={500}
                                    className="flex"
                                >
                                    <button
                                        className="relative cursor-pointer w-[40vw] min-[800px]:w-[12vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                        aria-label="Join Beta"
                                    >
                                        <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                        <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] min-[800px]:text-[0.7vw] font-bold">
                                            Join Beta
                                        </span>
                                    </button>
                                </ScrollLink>
                            </div>
                        </RevealText>

                        <FollowUs />
                        <img src={Line} alt="" aria-hidden="true" className="w-full block z-60 min-[800px]:hidden mt-5" />
                    </div>

                    <TopLogo />
                    <TopLogoMobile />
                    <Nav />

                    {/*
                      * Embedded sign-up form displayed to the right of the hero copy on desktop.
                      * On very small screens (< 450px) it is scaled down and positioned below
                      * the hero copy via absolute positioning to avoid layout overflow.
                      */}
                    <div className="max-[450px]:scale-67 xl:scale-105 max-[450px]:absolute max-[450px]:-bottom-40">
                        <BetaSignUpForm />
                    </div>

                    <img src={Line} alt="" aria-hidden="true" className="w-full block absolute bottom-0 min-[800px]:hidden" />
                </div>
            )}
        </div>
    );
};

export default SignUpHero;
