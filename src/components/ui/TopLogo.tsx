import { Link } from 'react-router-dom';
import upLayout from '../../assets/images/Vector 2.svg';
import logo from '../../assets/images/logo.png';
const TopLogo = () => {
  return (
    <div className="absolute -top-8 scale-100 max-[800px]:hidden max-lg:-left-40 -left-15 sm:scale-40 md:scale-50 lg:scale-60 xl:scale-90 z-10">
    {/* Bug fix: decorative layout SVG was missing the alt attribute entirely, causing an a11y violation. */}
    <img src={upLayout} alt="" aria-hidden="true" />
      <Link to="/">
    <div className="absolute right-25 top-5 inset-0 flex items-center justify-center">
      <img className="w-15" src={logo} alt="Frantic Castle Logo" />
      <h1 className=" text-[var(--color-text-light)] font-black text-[1.5vw] xl:text-[1vw] leading-normal tracking-wider">
        FRANTIC CASTLE
      </h1>
    </div></Link>
  </div>
  )
}

export default TopLogo