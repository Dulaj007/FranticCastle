// add your articles data here

import Image01 from '../assets/Images/arti1.png';
import Image02 from '../assets/Images/arti2.png';
import Image03 from '../assets/Images/arti3.png';
export interface ArticleData {
    id: number;
    title: string;
    date:string;
    suBTitle:string ;
    description:string[];
    readTime:string;
    writer:string;
    views:string;
    shares:string;
    image:string;
  }  
  
  export const Article_Data: ArticleData[] = [
    {
        id:1,
        title: "Frantic Castle A Realm of Infinite Possibilities",
        suBTitle:"Surviving the Desperado Wasteland – Tips for New Players",
        date: "Feb 18, 2025",
        description:
          ["Enter the Castle. Shape the Future. Play the Legend.",
            "Deep within the mist-covered lands, where shadows dance on the walls of time, stands the Frantic Castle—a fortress of boundless creativity, where worlds are forged, and legends take shape. It is not just a studio; it is a gateway to realms yet unexplored, a citadel of imagination where every game is a portal to adventure.",
            "The Origin of the Castle",
           " Once a whispered myth among wandering dreamers, the Frantic Castle was said to rise from the chaos of untamed stories, its towers built not from stone but from the raw energy of unbound creativity. Here, game designers, artists, and storytellers convene like ancient scholars, weaving their magic into digital landscapes that stretch beyond the horizon.Every hall within the castle pulses with innovation. Each chamber holds the echoes of stories yet untold. From the grand throne room, where epic sagas are written, to the hidden archives that store the forgotten lore of fallen warriors, the Frantic Castle is a living entity—evolving, expanding, and defying the boundaries of reality.",
           "The Worlds We Shape",
           "Within these enchanted halls, three legendary games have emerged, each carrying the essence of the castle’s arcane power",
           " 🛡 Shadowborn: The Forgotten Realm – A dark fantasy odyssey where warriors fight against the shadows of a cursed kingdom,",
            " 📜 Arcane Rivals – A game of spellbinding duels where mages battle for supremacy in an ever-changing war of wits and strategy.",
             "🏰 Dark Horizon (Beta Live!) – A roguelike adventure where players must navigate the treacherous corridors of a castle that shifts and breathes, adapting to those who dare enter."
          ],
        readTime: "2 minute read",
        writer:"by Joanna Wellick",
        views:"1.6K views",
        shares:"1.2K shares",
        image:Image01,
      },
  {
    id:2,
    title: "The Frantic Vision",
    suBTitle:"",
    date: "February 18, 2025",
    description:
     [ "At Frantic Castle, we believe that games are more than entertainment—they are experiences, memories, and journeys that stay with players long after the final battle"],
    readTime: "2 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image02,
  },
  {
    id:3,
    title: "The Frantic Vision",
    suBTitle:"",
    date: "February 18, 2025",
    description:
     [ "At Frantic Castle, we believe that games are more than entertainment—they are experiences, memories, and journeys that stay with players long after the final battle"],
    readTime: "2 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image03,
  },
  {
    id:4,
    title: "The Frantic Vision",
    suBTitle:"",
    date: "February 18, 2025",
    description:
     [ "At Frantic Castle, we believe that games are more than entertainment—they are experiences, memories, and journeys that stay with players long after the final battle"],
    readTime: "2 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image03,
  },
  {
    id:5,
    title: "Dark Horizon Beta Now Open!",
    suBTitle:"",
    date: "Feb 18, 2025",
    description:
     [ "The wait is over—sign up now and be among the first to explore the living castle. [Join the Beta →]"],
    readTime: "2 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image02,
  },
  
  {
    id:6,
    title: "Arcane Rivals Tournament Announced!",
    date: "Feb 18, 2025",
    suBTitle:"",
    description: ["Compete in the biggest Arcane Rivals tournament yet!"],
    readTime: "2 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image01,
  },
  {
    id:7,
    title: "New Update: Shadow Realms Expansion",
    date: "Feb 18, 2025",
    suBTitle:"",
    description:
     [ "Explore the Shadow Realms, a brand-new area filled with challenges."],
    readTime: "3 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image02,
  },
  {
    id:8,
    title: "Legends Clash: Season 5 Announced",
    date: "Feb 19, 2025",
    suBTitle:"",
    description: ["Get ready for new challenges, rewards, and epic battles!"],
    readTime: "4 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image03,
  },
  {
    id:9,
    title: "New Game Mode: Survival Arena",
    date: "Feb 20, 2025",
    suBTitle:"",
    description: ["Test your skills in an endless survival mode!"],
    readTime: "5 minute read",
    writer:"Joanna Wellick",
    views:"",
    shares:"1K shares",
    image:Image01,
  },
];