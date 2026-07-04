/*
 * SignUp.tsx
 *
 * Beta sign-up page rendered at the "/SignUp" route.
 * SignUpHero contains the hero visuals and scrolls down to the UserForumInfo
 * form section when the "Join Beta" button is clicked.
 */

import { useEffect } from 'react';
import SignUpHero    from '../sections/SignUpHero';
import UserForumInfo from '../sections/UserForumInfo';
import Join          from '../sections/Join';
import ContactUs     from '../sections/ContactUs';
import { Footer }    from '../sections/Footer';

const SignUpPage = () => {

    /* SEO: unique title so search engines can distinguish this page. */
    useEffect(() => {
        document.title = 'Beta Sign Up | Frantic Castle';
    }, []);

    return (
        <div>
            <section><SignUpHero /></section>

            {/* The id is used by react-scroll in SignUpHero to jump directly to the form. */}
            <section id="user-forum-info">
                <UserForumInfo />
            </section>

            <section><Join /></section>
            <section><ContactUs /></section>
            <section><Footer /></section>
        </div>
    );
};

export default SignUpPage;
