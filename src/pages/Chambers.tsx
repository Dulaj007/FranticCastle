/*
 * Chambers.tsx
 *
 * Game Chambers page rendered at the "/Chambers" route.
 * Showcases available and upcoming game titles from the studio.
 */

import { useEffect } from 'react';
import GameChamber from '../sections/GameChamber';
import { Discover } from '../sections/Discover';
import Projects    from '../sections/Projects';
import Join        from '../sections/Join';
import ContactUs   from '../sections/ContactUs';
import { Footer }  from '../sections/Footer';

const Chambers = () => {

    /* SEO: unique title so search engines can distinguish this page. */
    useEffect(() => {
        document.title = 'Game Chambers | Frantic Castle';
    }, []);

    return (
        <div>
            <section><GameChamber /></section>
            <section><Discover /></section>
            <section><Projects /></section>
            <section><Join /></section>
            <section><ContactUs /></section>
            <section><Footer /></section>
        </div>
    );
};

export default Chambers;
