
import btn from '../assets/images/butn.png';
import RevealText from './RevealText';

export const intro = () => {
  return (
    <div className='ml-20'>
    <RevealText delay={0}>
    <p className="text-3xl pt-2 uppercase font-extrabold tracking-wide lg:text-5xl text-[var(--color-text-light)]">
    Enter the Realm of  </p>
    </RevealText>
    <RevealText delay={0.14}>
    <p className="text-4xl  uppercase font-extrabold lg:text-6xl tracking-[0.08em] text-[var(--color-text-secondary)]">
    Frantic Castle
    </p>
    </RevealText>
    <RevealText delay={0.27} variant="fade">
    <p className=" font-bold pt-2 lg:text-md tracking-[0.08em] text-[var(--color-text-light)]">

    A world of immersive mobile gaming awaits—where <br></br>
    strategy,adventure, and creativity collide
    </p>
    </RevealText>
    <RevealText delay={0.37} variant="fade">
    <p className=" w-1/3 pt-2 lg:text-sm tracking-[0.08em] text-[var(--color-text-light)]/80">

    As you step through the towering gates of Frantic Castle, you enter a realm where mobile gaming meets imagination, strategy, and adventure. Our world is built for gamers who crave immersive storytelling, dynamic gameplay, and unforgettable experiences. Whether you're exploring vast kingdoms, battling legendary foes, or shaping your own destiny, every game we create is a portal to something extraordinary.

    </p>
    </RevealText>
    <RevealText delay={0.47} variant="fade">
    <div className='mt-5 flex flex-row w-1/4 '>
    <button
          className="relative w-full h-20 opacity-80 bg-cover bg-center text-white md:text-[0.3em] lg:text-[0.7em]  font-semibold rounded-lg"
          style={{ backgroundImage: `url(${btn})` }}

        >
          <span className=" mb-2 absolute tracking-widest inset-0 flex items-center justify-center uppercase font-bold">
            Explore our games
          </span>
        </button>
        <button
          className="relative w-full h-20 opacity-80 bg-cover bg-center text-white md:text-[0.5em] lg:text-[0.7em]  font-semibold rounded-lg"
          style={{ backgroundImage: `url(${btn})` }}

        >
          <span className="absolute tracking-widest mb-2 inset-0 flex items-center  justify-center uppercase font-bold">
            Join beta
          </span>
        </button>
      </div>
      </RevealText>

   </div>
  )
}
