/*
 * RevealText — scroll-triggered reveal, SEO-safe.
 *
 * APPROACH
 * --------
 * Uses a native IntersectionObserver (not Framer Motion's useInView) because
 * Framer Motion v12's useInView + useAnimation combo can miss the trigger when
 * an element is already partially in view at mount time, or when controls are
 * async and the effect runs before the observer fires.
 *
 * A plain React `useState` boolean acts as a permanent latch:
 *   false → true  (fires once when element enters viewport)
 *   true  → never goes back to false  (setRevealed(false) is never called)
 *
 * Because `revealed` is a latch, `animate` permanently stays at the visible
 * target once set — scroll-out-of-view can never revert it.
 *
 * VARIANTS
 * --------
 * 'clip' — clipPath wipe from top + subtle y drift. For headlines.
 * 'fade' — opacity + y translate. For body copy, buttons, etc.
 */

import { ReactNode, useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RevealTextProps {
    children: ReactNode;
    delay?:   number;
    variant?: 'clip' | 'fade';
}

const RevealText = ({ children, delay = 0, variant = 'clip' }: RevealTextProps) => {
    const ref                     = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect(); // "once" — stop observing after first trigger
                }
            },
            { threshold: 0 } // fire as soon as any pixel of the element is visible
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    if (variant === 'clip') {
        return (
            <div ref={ref}>
                <motion.div
                    initial={{ clipPath: 'inset(110% 0 -5% 0)', y: 10 }}
                    animate={
                        revealed
                            ? { clipPath: 'inset(0% 0 -5% 0)', y: 0 }
                            : { clipPath: 'inset(110% 0 -5% 0)', y: 10 }
                    }
                    transition={{ duration: 0.82, delay, ease: [0.33, 1, 0.68, 1] }}
                >
                    {children}
                </motion.div>
            </div>
        );
    }

    /* fade variant */
    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealText;
