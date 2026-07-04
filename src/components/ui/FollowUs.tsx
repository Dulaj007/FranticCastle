/*
 * FollowUs.tsx
 *
 * Horizontal social media icon bar used on hero sections across the site.
 * Rendered on a dark background — icons use their white/outline variants.
 *
 * All href values are currently empty strings pending the studio's official
 * social media URLs. Once the URLs are ready, replace the empty strings with
 * the full absolute URLs (e.g. "https://www.instagram.com/franticcastle").
 *
 * rel="noopener noreferrer" is required on all target="_blank" links to
 * prevent the opened tab from accessing window.opener (a security risk) and
 * to avoid leaking the referrer URL to the destination site.
 */

import FbIcon   from '../../assets/icons/basil_facebook-outline.svg';
import ytIcon   from '../../assets/icons/line-md_youtube-filled.svg';
import IntaIcon from '../../assets/icons/mdi_instagram.svg';
import DisIcon  from '../../assets/icons/ic_baseline-discord.svg';
import artIcon  from '../../assets/icons/mdi_artstation.svg';
import { Fade } from 'react-awesome-reveal';

const FollowUs = () => {
    return (
        <Fade direction="down" duration={1500}>
            <div className="flex justify-start opacity-90 gap-1 2xl:gap-5 items-center">
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <button className="p-2" tabIndex={-1}>
                        <img src={FbIcon} alt="Facebook" className="Follow-White-Icon" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <button className="p-2" tabIndex={-1}>
                        <img src={ytIcon} alt="YouTube" className="Follow-White-Icon" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <button className="p-2" tabIndex={-1}>
                        <img src={IntaIcon} alt="Instagram" className="Follow-White-Icon" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                    <button className="p-2" tabIndex={-1}>
                        <img src={DisIcon} alt="Discord" className="Follow-White-Icon" />
                    </button>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" aria-label="ArtStation">
                    <button className="p-2" tabIndex={-1}>
                        <img src={artIcon} alt="ArtStation" className="Follow-White-Icon" />
                    </button>
                </a>
            </div>
        </Fade>
    );
};

export default FollowUs;
