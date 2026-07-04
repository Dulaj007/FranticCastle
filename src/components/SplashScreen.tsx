/*
 * SplashScreen.tsx
 *
 * Full-screen branded loading overlay shown during the initial page load.
 *
 * SEO DESIGN RATIONALE
 * --------------------
 * This component is a fixed-position overlay — it does NOT conditionally render
 * or gate the page content below it. The full DOM (headings, copy, meta tags,
 * links) is always present and readable by search engine crawlers regardless of
 * this overlay. It is excluded from the accessibility tree via aria-hidden.
 *
 * ANIMATIONS
 * ----------
 * 1. Logo:    spring-bounce entrance from above (y: -20, scale: 0.72 → natural)
 * 2. Glow:    pulsing radial blur in accent colour behind the logo
 * 3. Text:    character-by-character typewriter reveal via useTypewriter hook,
 *             with a blinking cursor that disappears when typing is complete
 * 4. Bar:     progress fill using CSS transform (x translation) — GPU-composited,
 *             no layout recalculation, gradient sweeps left-to-right
 * 5. Exit:    opacity fade with a subtle scale-up (1.0 → 1.04) so the overlay
 *             feels like it "opens" to reveal the page behind it
 *
 * TIMING (MINIMUM_MS = 2 400 ms)
 * --------------------------------
 *   0 ms      logo drops in
 *   480 ms    typewriter starts  (logo is settled)
 *   480–1 490 ms  text types out  (14 chars × 72 ms)
 *   0–2 400 ms    progress bar fills
 *   2 400 ms  overlay begins fade-out (600 ms)
 *
 * CUSTOMISATION
 * -------------
 * Adjust MINIMUM_MS, CHAR_INTERVAL_MS, or TYPEWRITER_START_MS at the top of
 * the file. All timing is derived from these constants — no magic numbers buried
 * in JSX props.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/Images/logo.png';

const MINIMUM_MS          = 2400;
const STUDIO_TEXT         = 'FRANTIC CASTLE';
const CHAR_INTERVAL_MS    = 72;
const TYPEWRITER_START_MS = 480;

/*
 * Reveals `text` one character at a time.
 * Returns the currently-visible slice and whether typing is complete.
 */
function useTypewriter(text: string, charIntervalMs: number, startDelayMs: number) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimer: ReturnType<typeof setTimeout>;
        let charInterval: ReturnType<typeof setInterval>;

        startTimer = setTimeout(() => {
            charInterval = setInterval(() => {
                setCount(prev => {
                    if (prev >= text.length) {
                        clearInterval(charInterval);
                        return prev;
                    }
                    return prev + 1;
                });
            }, charIntervalMs);
        }, startDelayMs);

        return () => {
            clearTimeout(startTimer);
            clearInterval(charInterval);
        };
    }, [text, charIntervalMs, startDelayMs]);

    return {
        displayed: text.slice(0, count),
        done:      count >= text.length,
    };
}

const SplashScreen = () => {
    const [visible, setVisible] = useState(true);
    const { displayed, done: typingDone } = useTypewriter(
        STUDIO_TEXT,
        CHAR_INTERVAL_MS,
        TYPEWRITER_START_MS
    );

    /*
     * Dismiss after MINIMUM_MS. If window.load already fired (fast / cached
     * loads), dismiss after whatever remains of the minimum display time.
     */
    useEffect(() => {
        const startTime = Date.now();

        const dismiss = () => {
            const elapsed   = Date.now() - startTime;
            const remaining = Math.max(0, MINIMUM_MS - elapsed);
            setTimeout(() => setVisible(false), remaining);
        };

        if (document.readyState === 'complete') {
            dismiss();
        } else {
            window.addEventListener('load', dismiss, { once: true });
            return () => window.removeEventListener('load', dismiss);
        }
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                /*
                 * Fixed overlay — z-[9999] so it sits above all page content.
                 * scale: 1.04 on exit makes the overlay appear to "open up"
                 * as it fades, revealing the page behind it.
                 */
                <motion.div
                    aria-hidden="true"
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#10111c]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    {/* Pulsing radial glow in accent colour */}
                    <motion.div
                        className="absolute w-44 h-44 rounded-full bg-[#ea1ef3]/10 blur-3xl pointer-events-none"
                        animate={{
                            scale:   [1, 1.7, 1],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/*
                     * Logo — spring-bounce entrance.
                     * Cubic-bezier [0.34, 1.56, 0.64, 1] mimics a spring with
                     * slight overshoot, matching the game-studio energy without
                     * using an actual spring config.
                     */}
                    <motion.img
                        src={logo}
                        alt=""
                        className="relative w-20 h-20 select-none"
                        initial={{ opacity: 0, y: -20, scale: 0.72 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                    />

                    {/*
                     * Typewriter text row.
                     * Fixed height (h-6) prevents the layout from shifting when
                     * characters appear. The cursor span disappears via
                     * AnimatePresence once typing is complete.
                     */}
                    <div className="mt-5 h-6 flex items-center justify-center">
                        <p className="font-gotha font-bold tracking-[0.42em] text-[11px] uppercase text-white/90 select-none">
                            {displayed}
                        </p>
                        <AnimatePresence>
                            {!typingDone && (
                                <motion.span
                                    key="cursor"
                                    className="shrink-0 inline-block w-[1.5px] h-[12px] bg-[#ea1ef3] ml-[3px]"
                                    animate={{ opacity: [1, 0] }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration:   0.5,
                                        repeat:     Infinity,
                                        repeatType: 'reverse',
                                        ease:       'linear',
                                    }}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/*
                     * Progress bar.
                     * Uses x-translation (GPU composited) rather than width
                     * animation to avoid triggering layout recalculations.
                     * The gradient from purple → pink → purple creates a
                     * subtle colour sweep as the bar fills.
                     */}
                    <div className="mt-10 w-28 h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full w-full bg-gradient-to-r from-[#821E87] via-[#ea1ef3] to-[#821E87] rounded-full"
                            initial={{ x: '-100%' }}
                            animate={{ x: '0%' }}
                            transition={{
                                duration: MINIMUM_MS / 1000,
                                ease:     [0.25, 0.1, 0.25, 1],
                            }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
