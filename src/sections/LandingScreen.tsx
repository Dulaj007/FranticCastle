/*
 * LandingScreen.tsx
 *
 * Desktop hero section (viewport >= 800px). Manages a three-stage reveal:
 *
 *   Stage 0  Initial state. Hero copy and "Enter the Castle" button visible.
 *            The background video sits centred behind the content.
 *
 *   Stage 1  Transition state. Video pans right via a Framer Motion transform.
 *            Triggered immediately when the user clicks the button.
 *
 *   Stage 2  Final state. Overlay text reveals on the left while the video
 *            remains panned to the right. Triggered 700ms after stage 1 so
 *            the pan animation completes before the copy appears.
 *
 * ANIMATION APPROACH FOR STAGE 2
 * --------------------------------
 * Stage 2 text uses direct initial/animate (not whileInView / RevealText).
 * Reason: stage 2 content is always inside the viewport when it mounts —
 * whileInView relies on IntersectionObserver which fires asynchronously and
 * can produce a 1–2 frame flash where text starts at y:110% before the
 * observer callback. Using animate directly is instant and re-plays correctly
 * every time the content remounts (scroll up → stage 1 → scroll down → stage 2).
 *
 * AnimatePresence wraps both stage 0 and stage 2 so that:
 *  - Stage 0 fades out smoothly when the user clicks the button.
 *  - Stage 2 fades out smoothly when the user scrolls back up.
 *  - Stage 2 fades back in (with fresh clip reveals) every time it remounts.
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence }  from 'framer-motion';
import cas                           from '../assets/images/ws.mp4';
import { Link }                      from 'react-router-dom';
import herogif                       from '../assets/images/heroGifNew.gif';
import btn                           from '../assets/images/Button.png';
import { Castle_Data }               from '../constants/CastleData';
import FollowUs                      from '../components/ui/FollowUs';
import TopLogo                       from '../components/ui/TopLogo';

interface LandingScreenProps {
    onStageTwoReached: () => void;
}

/*
 * Shared easing curves.
 * SPRING  — accelerates and overshoots slightly; used for clip reveals.
 * SMOOTH  — standard ease-out; used for opacity and translate fades.
 */
const EASE_SPRING = [0.33, 1, 0.68, 1] as const;
const EASE_SMOOTH = [0.25, 0.1, 0.25, 1] as const;

const LandingScreen: React.FC<LandingScreenProps> = ({ onStageTwoReached }) => {
    const HeroStep01 = Castle_Data.find((castle) => castle.id === 'HeroStep01');
    const HeroStep02 = Castle_Data.find((castle) => castle.id === 'HeroStep02');

    const [stage, setStage]                = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [hasNotified, setHasNotified]    = useState(false);

    useEffect(() => {
        if (stage === 2 && !hasNotified) {
            onStageTwoReached();
            setHasNotified(true);
        }
    }, [stage, hasNotified, onStageTwoReached]);

    /*
     * Scroll handler — only active after the user has clicked "Enter the Castle".
     * After the user has clicked "Enter the Castle", stage 0 never appears
     * again. We toggle only between stage 1 (background only) and stage 2
     * (text overlay):
     *
     *   Scroll UP   → stage 2  (text slides in, bg pans right)
     *   Scroll DOWN → stage 1  (text fades out, bg re-centres)
     *
     * This means: when the user scrolls down to leave the hero, the text
     * disappears cleanly. When they scroll back up to the hero from a lower
     * section, the text re-appears automatically as they arrive.
     */
    useEffect(() => {
        if (!hasInteracted) return;
        const handleScroll = (event: WheelEvent) => {
            if (event.deltaY < 0) setStage(2);  // scroll UP   → show text
            else if (event.deltaY > 0) setStage(1);  // scroll DOWN → hide text
        };
        window.addEventListener('wheel', handleScroll);
        return () => window.removeEventListener('wheel', handleScroll);
    }, [hasInteracted]);

    const handleButtonClick = () => {
        setHasInteracted(true);
        setStage(1);
        setTimeout(() => setStage(2), 700);
    };

    return (
        <div className="relative flex flex-col min-h-screen bg-[var(--color-background-primary)] overflow-hidden">

            <div className="absolute z-55 bottom-0 left-0 w-full h-50 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent pointer-events-none" />

            {/*
              * Video pans right when stage 2 is active, creating a parallax
              * shift that frames the text on the left.
              */}
            <motion.div
                className="absolute inset-0 z-0 video-wrapper"
                animate={stage === 2 ? { x: '15vw' } : { x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <video
                    className="w-full h-full object-cover"
                    src={cas}
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                />
            </motion.div>

            <div className="relative z-20 flex flex-col items-center justify-center min-h-screen">
                <TopLogo />

                {/*
                  * STAGE 0 — initial hero.
                  * AnimatePresence gives it a smooth exit when the user clicks
                  * the button (opacity fades out over 0.35s).
                  * Entrance: left column slides in from the left, centre scales
                  * up from 0.9, right column slides in from the right.
                  */}
                <AnimatePresence>
                    {stage === 0 && (
                        <motion.div
                            key="stage0"
                            className="font-gotha absolute px-10 xl:px-15 z-11 bottom-30 w-full flex items-center justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                        >
                            {HeroStep01 && (
                                <motion.div
                                    className="flex-1 font-bold uppercase shadow-lg"
                                    initial={{ opacity: 0, x: -18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.25, ease: EASE_SMOOTH }}
                                >
                                    <p className="text-[1vw] text-[var(--color-text-light)]">
                                        {HeroStep01.suBTitle[0]}
                                    </p>
                                    <p className="text-[2.5vw] leading-[1em] font-extrabold text-[var(--color-text-light)]">
                                        {HeroStep01.title[0]} <br /> {HeroStep01.title[1]}
                                        <br />
                                        <span className='text-[var(--color-text-secondary)]'>
                                            {HeroStep01.title[2]}<br /> {HeroStep01.title[3]}
                                        </span>
                                    </p>
                                </motion.div>
                            )}

                            {/* Centre: button + gif scale in with a spring bounce */}
                            <motion.div
                                className="font-gotha flex flex-1 justify-center items-center"
                                initial={{ opacity: 0, scale: 0.88 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.65, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
                            >
                                <div>
                                    <button
                                        onClick={handleButtonClick}
                                        className="relative cursor-pointer w-[15vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                        aria-label="Enter the Castle"
                                    >
                                        <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                        <span className="absolute uppercase inset-0 flex items-center justify-center text-[0.7vw] font-bold">
                                            Enter the Castle
                                        </span>
                                    </button>
                                    <img
                                        src={herogif}
                                        alt=""
                                        aria-hidden="true"
                                        className="w-20 mx-auto mix-blend-screen"
                                    />
                                </div>
                            </motion.div>

                            {HeroStep01 && (
                                <motion.div
                                    className="w-full lg:w-120 flex-1"
                                    initial={{ opacity: 0, x: 18 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.32, ease: EASE_SMOOTH }}
                                >
                                    <p className="text-[1vw] font-extralight opacity-75 leading-[1.3em] text-[var(--color-text-light)] max-w-[50ch] text-justify">
                                        {HeroStep01.description[0]}
                                    </p>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/*
                  * STAGE 2 — final reveal.
                  *
                  * AnimatePresence enables:
                  *   - Smooth fade-out when the user scrolls UP (stage → 1).
                  *   - Fresh re-entry animation every time stage becomes 2 again.
                  *
                  * Text uses direct initial/animate (not whileInView) because the
                  * content is always inside the viewport when it mounts. Using
                  * whileInView here causes a 1-2 frame flash at y:110% before
                  * IntersectionObserver fires. Direct animate is immediate.
                  *
                  * Timing:
                  *   0.10s — title line 1 clips up
                  *   0.22s — title line 2 clips up
                  *   0.34s — subtitle fades in
                  *   0.44s — description fades in
                  *   0.52s — buttons fade in
                  */}
                <AnimatePresence>
                    {stage === 2 && (
                        <motion.div
                            key="stage2"
                            className="absolute inset-0 z-10 flex items-center justify-start"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.65, ease: EASE_SMOOTH }}
                        >
                            {HeroStep02 && (
                                <div className="ml-15 z-20">

                                    {/* Title line 1 — clip reveal */}
                                    <div className="overflow-hidden">
                                        <motion.p
                                            className="text-[3vw] uppercase font-extrabold leading-[1em] tracking-wide text-[var(--color-text-light)]"
                                            initial={{ y: '110%' }}
                                            animate={{ y: '0%' }}
                                            transition={{ duration: 0.72, delay: 0.10, ease: EASE_SPRING }}
                                        >
                                            {HeroStep02.title[0]}
                                        </motion.p>
                                    </div>

                                    {/* Title line 2 — clip reveal */}
                                    <div className="overflow-hidden">
                                        <motion.p
                                            className="text-[4vw] uppercase font-extrabold leading-[1em] tracking-normal text-[var(--color-text-secondary)]"
                                            initial={{ y: '110%' }}
                                            animate={{ y: '0%' }}
                                            transition={{ duration: 0.72, delay: 0.22, ease: EASE_SPRING }}
                                        >
                                            {HeroStep02.title[1]}
                                        </motion.p>
                                    </div>

                                    {/* Subtitle */}
                                    <motion.p
                                        className="font-bold py-3 text-[1vw] tracking-widest w-[40vw] text-[var(--color-text-light)]"
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.34, ease: EASE_SMOOTH }}
                                    >
                                        {HeroStep02.suBTitle[0]} <br /> {HeroStep02.suBTitle[1]}
                                    </motion.p>

                                    {/* Description */}
                                    <motion.p
                                        className="text-[0.7vw] leading-[1.5em] tracking-wider w-[38.5vw] text-[var(--color-text-light)]/80 text-justify"
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.44, ease: EASE_SMOOTH }}
                                    >
                                        {HeroStep02.description[0]}
                                    </motion.p>

                                    {/* CTA buttons */}
                                    <motion.div
                                        className='flex flex-row gap-5 py-[1vw]'
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, delay: 0.52, ease: EASE_SMOOTH }}
                                    >
                                        <Link to="/Chambers">
                                            <button
                                                className="relative cursor-pointer w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                                aria-label="Explore Our Games"
                                            >
                                                <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                                <span className="absolute uppercase inset-0 flex items-center justify-center text-[0.7vw] font-bold">
                                                    Explore Our Games
                                                </span>
                                            </button>
                                        </Link>
                                        <Link to="/SignUp">
                                            <button
                                                className="relative cursor-pointer w-[14vw] xl:w-[12vw] max-w-[1140px] h-auto Hover-Effect flex justify-center items-center"
                                                aria-label="Join the Beta"
                                            >
                                                <img src={btn} alt="" className="w-full h-auto brightness-120" />
                                                <span className="absolute uppercase inset-0 flex items-center justify-center text-[0.7vw] font-bold">
                                                    Join Beta
                                                </span>
                                            </button>
                                        </Link>
                                    </motion.div>

                                    <FollowUs />
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LandingScreen;
