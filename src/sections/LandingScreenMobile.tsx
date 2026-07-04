/*
 * LandingScreenMobile.tsx
 *
 * Hero section for viewport widths below 800px. Unlike the desktop version
 * there is no stage gate — all content is visible immediately so mobile users
 * are not blocked behind an interaction requirement.
 *
 * The video covers the top 60% of the viewport. A gradient overlay blends
 * the bottom edge of the video into the dark background colour so the
 * transition to the text content below is seamless.
 *
 * The top gradient div prevents the background colour behind the mobile logo
 * from showing a hard edge against the video.
 */

import backVideo      from '../assets/images/ws.mp4';
import { Nav }        from '../components/nav';
import { Castle_Data } from '../constants/CastleData';
import FollowUs       from '../components/ui/FollowUs';
import btn            from '../assets/images/Button.png';
import TopLogoMobile  from '../components/ui/topLogoMobile';
import { Link }       from 'react-router-dom';
import RevealText     from '../components/ui/RevealText';

const LandingScreenMobile = () => {
    const HeroStep02 = Castle_Data.find((castle) => castle.id === 'HeroStep02');

    return (
        <div className="relative w-full h-screen overflow-hidden bg-[var(--color-background-primary)]">

            {/* Video background — only rendered on the mobile branch. */}
            <div className="absolute inset-0 min-[800px]:hidden">
                {/*
                  * Performance/Bug fix: added playsInline.
                  * Without playsInline, iOS Safari intercepts the autoPlay
                  * attribute and opens the video in a native full-screen
                  * player, breaking the layout entirely on iPhones.
                  */}
                <video
                    className="w-full h-full object-cover"
                    style={{
                        position:   'absolute',
                        top:        0,
                        left:       0,
                        width:      '100%',
                        height:     '60%',
                        objectFit:  'cover',
                        zIndex:     0,
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                >
                    <source src={backVideo} type="video/mp4" />
                </video>

                {/* Gradient that fades the video bottom into the background. */}
                <div
                    className="absolute inset-0"
                    style={{
                        height:     '60%',
                        background: 'linear-gradient(to top, #10111c, rgba(16, 17, 28, 0))',
                        zIndex:     1,
                    }}
                />
            </div>

            <Nav />
            <TopLogoMobile />

            {HeroStep02 && (
                <div className="absolute bottom-0 left-2/5 transform -translate-x-2/5 mb-10 z-2">
                    <RevealText delay={0}>
                        <p className="text-[7.04vw] leading-[1em] text-center uppercase font-bold min-[800px]:font-extrabold-custom tracking-wider text-[var(--color-text-light)]">
                            {HeroStep02.title[0]}
                        </p>
                    </RevealText>
                    <RevealText delay={0.12}>
                        <p className="text-[9.05vw] leading-[1em] text-center uppercase font-bold min-[800px]:font-extrabold-custom tracking-wider text-[var(--color-text-secondary)]">
                            {HeroStep02.title[1]}
                        </p>
                    </RevealText>
                    <RevealText delay={0.25} variant="fade">
                        <p className="font-bold py-1 text-[12px] min-[350px]:text-[14px] min-[450px]:text-[16px] w-[85vw] px-1 text-justify leading-[1.3em] tracking-wide text-[var(--color-text-light)]">
                            {HeroStep02.suBTitle[0]}
                        </p>
                    </RevealText>
                    <RevealText delay={0.35} variant="fade">
                        <p className="leading-[1.5em] w-[85vw] justify-center tracking-wider text-[10px] min-[350px]:text-[12px] min-[450px]:text-[14px] text-[var(--color-text-light)]/80">
                            {HeroStep02.description[0]}
                        </p>
                    </RevealText>
                    <RevealText delay={0.45} variant="fade">
                        <div className='flex flex-row justify-between py-[2vw] pt-[4vw]'>
                            <Link to="/Chambers">
                                <button
                                    className="relative cursor-pointer w-[40vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                    aria-label="Explore Our Games"
                                >
                                    <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                    <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] font-bold">
                                        Explore Our Games
                                    </span>
                                </button>
                            </Link>
                            <Link to="/SignUp">
                                <button
                                    className="relative cursor-pointer w-[40vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                    aria-label="Join Beta"
                                >
                                    <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                    <span className="absolute uppercase inset-0 flex items-center justify-center text-[9px] min-[350px]:text-[11px] min-[450px]:text-[13px] font-bold">
                                        Join Beta
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </RevealText>
                    <FollowUs />
                </div>
            )}

            {/* Top gradient that blends the logo area into the video. */}
            <div className="absolute top-0 left-0 w-full h-30 bg-gradient-to-b from-[var(--color-background-primary)] to-transparent pointer-events-none" />
        </div>
    );
};

export default LandingScreenMobile;
