/*
 * Projects.ts
 *
 * Project card data consumed by:
 *   - Projects.tsx  (full project pages in the Chambers section)
 *   - DiscoverSlider (thumbnail carousel on the Discover section)
 *
 * To add a new project, uncomment the template blocks below and fill in the
 * fields. The Projects.tsx component guards each section with a conditional
 * so missing entries simply do not render.
 *
 * Interface notes:
 *   subTitle   - Short label shown above the title (e.g. "PROJECT 01")
 *   title[]    - Three headline lines; index [2] carries the coloured accent
 *   description - Full body copy as a plain string (not an array)
 *   image      - Desktop-sized image import
 *   imageMobile - Portrait/square image import for mobile layouts
 */

import ProjectImage01       from '../assets/Images/Pslide01Main.png';
import ProjectImage01Mobile from '../assets/Images/Pslide01.png';
import ProjectImage02Mobile from '../assets/Images/Pslide03.png';
import ProjectImage03Mobile from '../assets/Images/Pslide02.png';

/*
 * Bug fix: the previous interface used suBTitle: string[] and description: string[]
 * but the actual data objects stored plain strings for both fields. The interface
 * now matches the runtime shape so TypeScript no longer reports false type safety.
 */
export interface ProjectData {
    id: string;
    title: string[];
    subTitle: string;
    description: string;
    image: string;
    imageMobile: string;
}

export const Project_Data: ProjectData[] = [
    {
        id: "Project01",
        title: ["", "", "Diced"],
        subTitle: "PROJECT 01",
        description: "Diced is a modern reimagining of the classic game Liar's Dice, blending strategic bluffing with fast-paced multiplayer gameplay. Developed by Frantic Castle, the game features stunning visual effects, custom dice designs, and immersive soundscapes. Players can challenge friends or global opponents in real-time matches, mastering the art of deception and prediction to outplay their rivals. With a wide range of unlockable dice skins, high-stakes tournaments, and seamless animations, Diced delivers a polished and engaging experience. Currently in beta testing, early players can provide feedback on game mechanics and performance while earning exclusive in-game rewards. The game is set to launch on iOS and Android, with future expansions planned based on community feedback. Join the beta and be part of the next big bluffing challenge!",
        image: ProjectImage01,
        imageMobile: ProjectImage01Mobile,
    },
    /*
     * Future projects — uncomment and populate when ready to publish.
     * The Projects.tsx component checks for undefined before rendering,
     * so these blocks are safely skipped until activated.
     */
    // {
    //     id: "Project02",
    //     title: ["", "", "TBA"],
    //     subTitle: "PROJECT 02",
    //     description: "",
    //     image: ProjectImage02Mobile,
    //     imageMobile: ProjectImage02Mobile,
    // },
    // {
    //     id: "Project03",
    //     title: ["", "", "TBA"],
    //     subTitle: "PROJECT 03",
    //     description: "",
    //     image: ProjectImage03Mobile,
    //     imageMobile: ProjectImage03Mobile,
    // },
];

export interface DiscoverItemData {
    image: string;
    topLeftText: string;
    bottomLeftText: string;
}

/* Slider items shown in the Discover section carousel. */
export const DiscoverItems: DiscoverItemData[] = [
    { image: ProjectImage01Mobile, topLeftText: '',    bottomLeftText: 'SNEAK PEEK' },
    { image: ProjectImage02Mobile, topLeftText: 'TBA', bottomLeftText: 'SOON'       },
    { image: ProjectImage03Mobile, topLeftText: 'TBA', bottomLeftText: 'SOON'       },
];
