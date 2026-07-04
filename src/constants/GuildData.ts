/*
 * GuildData.ts
 *
 * Team member profiles rendered by the GuildSlider component.
 * Add or update members here; the slider reads from sliderData at runtime.
 *
 * Social link fields (facebook, youtube, insta, discord, google) accept full
 * URLs. Leave as an empty string "" if the profile does not have that platform —
 * the slider renders the icons regardless, so placeholders remain visible until
 * real URLs are supplied.
 */

import SliderProfile  from '../assets/Images/GuildSliderProfile.png';
import SliderProfile2 from '../assets/Images/favt2.png';
import SliderProfile3 from '../assets/Images/Mavt.png';

export interface SliderItem {
    id: number;
    profileImage: string;
    position: string;
    Fname: string;
    Lname: string;
    about: string;
    facebook: string;
    youtube: string;
    insta: string;
    discord: string;
    google: string;
}

export const sliderData: SliderItem[] = [
    {
        id: 1,
        profileImage: SliderProfile2,
        position: "Chief Marketing Officer",
        Fname: "SUSAN",
        Lname: "MAHLBURG",
        about: "Susan masterminds Frantic Castle's marketing strategy, shaping its gaming presence with precision and impact. With an unmatched talent for building communities and crafting compelling narratives, she ensures every campaign is an adventure of its own. Susan forges partnerships and unites players and creators, making Frantic Castle a realm where imagination and innovation collide",
        facebook: "",
        youtube: "",
        insta: "",
        discord: "",
        google: "",
    },
    {
        id: 2,
        profileImage: SliderProfile,
        position: "Chief Executive Officer",
        Fname: "ANTHONY",
        Lname: "CHRABIEH",
        about: "Anthony is the genius behind the digital landscapes of Frantic Castle's realm. With an unrivaled passion for creating immersive worlds, he has built the very foundation upon which the kingdom's digital adventures are brought to life. His expertise in coding and game mechanics ensures that every quest is smooth, every battle challenging, and every player's journey unforgettable.",
        facebook: "",
        youtube: "",
        insta: "",
        discord: "",
        google: "",
    },
    {
        /*
         * Bug fix: this entry had id: 2 (same as Anthony above).
         * Duplicate ids cause React key collisions in any list rendered from
         * this data. Corrected to id: 3.
         */
        id: 3,
        profileImage: SliderProfile3,
        position: "Chief Operating Officer",
        Fname: "NADIM",
        Lname: "GABRAEL",
        about: "Nadim Gebrael is a dreamer and always looking for the win win. Co-Founder of Frantic Castle, birthed from two friends with different approaches to fun but the same desired outcome; to create beautiful, customizable, and immersive gaming experiences. Nadim is a passionate people person and businessman, working on game design and the culture of Frantic Castle.",
        facebook: "",
        youtube: "",
        insta: "",
        discord: "",
        google: "",
    },
];
