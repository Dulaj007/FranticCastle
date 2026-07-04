/*
 * Home.tsx
 *
 * Root landing page rendered at the "/" route.
 *
 * Desktop flow (viewport >= 800px):
 *   1. LandingScreen mounts. The user sees the hero video with the
 *      "Enter the Castle" button.
 *   2. When the user clicks through to stage 2, LandingScreen fires
 *      onStageTwoReached, which sets showContent to true.
 *   3. showContent reveals Nav and the full content stack below the hero.
 *
 * Mobile flow (viewport < 800px):
 *   LandingScreenMobile and all content sections mount immediately —
 *   there is no gated stage system on mobile.
 *
 * The two branches (mobile / desktop) keep separate section trees so that
 * the scroll-to targets ("team-info" vs "team-info-Pc") resolve correctly
 * without interfering with each other on the respective viewport.
 */

import { useEffect, useState } from 'react';
import LandingScreen       from '../sections/LandingScreen';
import { Nav }             from '../components/nav';
import LandingScreenMobile from '../sections/LandingScreenMobile';
import Team                from '../sections/Team';
import { Discover }        from '../sections/Discover';
import Explore             from '../sections/Explore';
import Guild               from '../sections/Guild';
import Join                from '../sections/Join';
import { Challenge }       from '../sections/Challenge';
import ContactUs           from '../sections/ContactUs';
import { Footer }          from '../sections/Footer';

const Home = () => {
    const [showContent, setShowContent] = useState(false);

    /* SEO: set a descriptive page title for search engines and browser tabs. */
    useEffect(() => {
        document.title = 'Frantic Castle | Immersive Mobile Game Studio';
    }, []);

    return (
        <div>
            {/* Nav is hidden until the user passes the landing stage gate on desktop. */}
            {showContent && <Nav />}

            <div>
                {/* Desktop view: LandingScreen controls the stage-gated reveal. */}
                <div className='min-[800px]:block hidden'>
                    <LandingScreen onStageTwoReached={() => setShowContent(true)} />
                </div>

                {/* Mobile view: all content renders immediately without the stage gate. */}
                <div className='min-[800px]:hidden block'>
                    <LandingScreenMobile />
                    <Team />
                    <Discover />
                    <Explore />
                    <section id="team-info">
                        <Guild />
                    </section>
                    <Join />
                    <Challenge />
                    <ContactUs />
                    <Footer />
                </div>

                {/* Desktop content stack — only mounted after the stage gate fires. */}
                {showContent && (
                    <div className='min-[800px]:block hidden'>
                        <Team />
                        <Discover />
                        <Explore />
                        <section id="team-info-Pc">
                            <Guild />
                        </section>
                        <Join />
                        <Challenge />
                        <ContactUs />
                        <Footer />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
