/*
 * News.tsx
 *
 * News and blog page rendered at the "/News" route.
 * Sections are wrapped in <section> elements to aid screen reader navigation
 * and search engine content parsing.
 */

import { useEffect } from 'react';
import NewsHero  from '../sections/NewsHero';
import NewsFeed  from '../sections/NewsFeed';
import { Footer } from '../sections/Footer';
import Join      from '../sections/Join';
import ContactUs from '../sections/ContactUs';

const News = () => {

    /* SEO: unique title for this page so search engines index it separately. */
    useEffect(() => {
        document.title = 'News & Updates | Frantic Castle';
    }, []);

    return (
        <div>
            <section><NewsHero /></section>
            <section><NewsFeed initialSelectedArticleId={1} /></section>
            <section><Join /></section>
            <section><ContactUs /></section>
            <section><Footer /></section>
        </div>
    );
};

export default News;
