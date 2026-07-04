import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const topLogoMobile = () => {
  return (
    <Link to="/"> <div 
    className="hidden absolute top-5 left-5 max-[800px]:flex items-center gap-1  z-10 overflow-hidden"
    style={{ zIndex: 3 }}
  > 
    <img src={logo} alt="Logo" className="h-[12vw] w-auto" />
    <span className="text-[var(--color-text-light)] tracking-wide shadow-4xl text-[3vw] font-extrabold">FRANTIC CASTLE</span>
    </div></Link>
  )
}

export default topLogoMobile