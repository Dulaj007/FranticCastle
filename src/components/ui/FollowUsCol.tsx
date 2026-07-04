import printCol from '../../assets/icons/prinColor.png';
import WhtsappCol from '../../assets/icons/whtsapColor.png';
import FbCol from '../../assets/icons/fbColor.png';
import xCol from '../../assets/icons/xColor.png';
import InstCol from '../../assets/icons/instaColor.png';
import DisCol from '../../assets/icons/discordColor.png';
import LinkdCol from '../../assets/icons/linkColor.png';

export const FollowUsCol = () => {
  return (
    <div className="flex gap-3 mt-4 min-[800px]:mt-6 justify-center min-[800px]:justify-end">
    <img src={printCol} alt="Print" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={WhtsappCol} alt="WhatsApp" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={FbCol} alt="Facebook" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={xCol} alt="X (Twitter)" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={InstCol} alt="Instagram" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={DisCol} alt="Discord" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
    <img src={LinkdCol} alt="LinkedIn" className="w-6 h-6 lg:w-8 lg:h-8 Hover-Effect-2x" />
  </div>
  )
}
