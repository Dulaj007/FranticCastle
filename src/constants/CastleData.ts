/*
 * CastleData.ts
 *
 * Central content store for all page sections. Each entry maps to a section
 * component that looks it up by id. To update copy for any section, edit the
 * corresponding entry here without touching the component files.
 *
 * Field conventions:
 *   title[]       - Headline lines, rendered as separate block elements
 *   suBTitle[]    - Supporting taglines displayed beneath the headline
 *   description[] - Body copy paragraphs
 */

export interface CastleData {
    id: string;
    title: string[];
    suBTitle: string[];
    description: string[];
}

export const Castle_Data: CastleData[] = [
    {
        id: "HeroStep01",
        /* Bug fix: "Myster" was missing the trailing 'y' */
        title: ["A Realm of Mystery", "and Majesty", "Where Courage", "Meets Destiny"],
        suBTitle:["Welcome to the Frantic Castle"],
        description:[" The Lion of the Gate stands as the final test before you enter the kingdom’s secrets.Only those with pure intentions will pass. Click to awaken the gate."],

    },
    {
        id:"HeroStep02",
        title:["Enter the Realm of"," Frantic Castle"],
        suBTitle:["  A world of immersive mobile gaming awaits where strategy, adventure, and creativity collide"],
        description:["  As you step through the towering gates of Frantic Castle, you enter a realm where mobile gaming meets imagination, strategy, and adventure. Our world is built for gamers who crave immersive storytelling, dynamic gameplay, and unforgettable experiences. Whether you're exploring vast kingdoms, battling legendary foes, or shaping your own destiny, every game we create is a portal to something extraordinary."],

    },
    {
        id:"Team",
        title:["Crafting Worlds","ONE game"," at a time"],
        suBTitle:[" A world of immersive mobile gaming awaits—where strategy, adventure, and creativity collide"],
        description:[" As you step through the towering gates of Frantic Castle, you enter a realm where mobile gaming meets imagination, strategy, and adventure. Our world is built for gamers who crave immersive storytelling, dynamic gameplay, and unforgettable experiences. Whether you're exploring vast kingdoms, battling legendary foes, or shaping your own destiny, every game we create is a portal to something extraordinary."],

    },
    {
        id:"Guild",
        title:["  The Creators’ ","guild"],
        suBTitle:["Meet our team"],
        description:[" Behind every legendary realm is a team of fearless warriors. Meet the knights of Frantic Castle—masters of their craft, united by a passion for creating immersive gaming experiences."],

    },
    {
        id:"Join",
        title:["JOIN THE"," Frantic Castle "," Guild"],
        suBTitle:["  The journey doesn’t end in the game be part of our thriving community! "],
        description:["  Connect with fellow adventurers, discuss game strategies, and get exclusive behind the scenes content."],

    },
    {
        id:"Challenge",
        title:[""],
        suBTitle:[""],
        description:["Crafting immersive games that challenge, inspire, and transport players into worlds beyond imagination"],

    },
    {
        id:"Footer",
        title:["Stay Connected"],
        suBTitle:[""],
        description:[" Sign up for our Royal Scrolls Newsletter and get exclusive updates, early access invitations, and behind-the-scenes insights."],

    },
    {
        id:"Discover",
        title:[" Discover Our"," Kingdom"],
        suBTitle:[""],
        description:["Explore our latest and upcoming games,each designed with rich storytelling, stunning visuals, and innovative gameplay. "],

    },
    {
        id:"Chamber",
        title:[" Take Your "," First Steps ","into a New ","World"],
        suBTitle:["The Game Chambers"],
        description:["At Frantic Castle, every game is a portal to another universe. Explore our latest and upcoming titles, each offering a unique blend of strategy, action, and fantasy. "],

    },
    {
        id:"SignUp",
        title:["Diced ","Beta Sign Up"],
        suBTitle:["Enter the Shadows Before Anyone Else"],
        description:["The castle doors are opening, but only for the chosen few. As a Diced beta tester, you’ll gain early access to an evolving world of mystery, danger, and ever-changing challenges. Your feedback will help shape the game before its full release. "],

    },
    {
        id:"NewsHero",
        title:["   The Chronicles of  "," Frantic Castle ",""],
        suBTitle:["Stay updated with the latest news, game updates, and exclusive insights from our realm."],
        description:[" "],

    },
    {
        id:"Project03",
        title:[" Fortnite "," Island ","Creator"],
        suBTitle:["PROJECT 01"],
        description:["Step into a world where strategy and agility converge in a groundbreaking multiplayer experience. Lead your team in a battle of wits and warfare, employing a mix of ancient tactics and futuristic firepower to overcome opponents and obstacles alike. Forge paths through enemy lines, strategize with your team to dismantle defenses, and adapt to the evolving battlefield. This game merges the strategic depth of battle arenas with the direct control and immersion of third-person action, offering a new twist on team-based combat. "],

    }
     

  
  
] 