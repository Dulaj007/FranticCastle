/*
 * FollowUsWhite.tsx
 *
 * Horizontal social media icon bar rendered on light backgrounds.
 * Uses the same icon set as FollowUs.tsx but with the Hover-Effect class
 * applied directly to each image rather than the wrapper element.
 *
 * All href values are empty strings pending official social media URLs.
 * Add rel="noopener noreferrer" is present on all target="_blank" links.
 */

import { Fade } from 'react-awesome-reveal';
import FbIcon   from '../../assets/icons/basil_facebook-outline.svg';
import ytIcon   from '../../assets/icons/line-md_youtube-filled.svg';
import IntaIcon from '../../assets/icons/mdi_instagram.svg';
import DisIcon  from '../../assets/icons/ic_baseline-discord.svg';
import artIcon  from '../../assets/icons/mdi_artstation.svg';

const FollowUsWhite = () => {
    return (
        <Fade direction="down" duration={1500}>
            <div className="w-3/4 flex justify-start mt-2 opacity-90 gap-5 items-center">
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <button className="p-2" tabIndex={-1}>
                        <img src={FbIcon} alt="Facebook" className="Hover-Effect w-8 h-8" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <button className="p-2" tabIndex={-1}>
                        <img src={ytIcon} alt="YouTube" className="Hover-Effect w-8 h-8" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <button className="p-2" tabIndex={-1}>
                        <img src={IntaIcon} alt="Instagram" className="Hover-Effect w-8 h-8" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <button className="p-2" tabIndex={-1}>
                        <img src={DisIcon} alt="Discord" className="Hover-Effect w-8 h-8" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="ArtStation">
                    <button className="p-2" tabIndex={-1}>
                        <img src={artIcon} alt="ArtStation" className="Hover-Effect w-8 h-8" />
                    </button>
                </a>
            </div>
        </Fade>
    );
};

export default FollowUsWhite;
