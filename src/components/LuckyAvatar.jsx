import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from '../context/AppState';
import { LUCKY_ASSETS } from '../utils/assets';

export function LuckyAvatar() {
    const { state } = useAppState();
    const [currentFace, setCurrentFace] = useState(LUCKY_ASSETS.faces.neutral);

    useEffect(() => {
        // Map state mood to asset key
        const moodKey = state.mood === 'neutral' ? 'neutral' : state.mood;
        // fallback logic could go here
        setCurrentFace(LUCKY_ASSETS.faces[moodKey] || LUCKY_ASSETS.faces.neutral);
    }, [state.mood]);

    return (
        <div className="relative w-64 h-64 mx-auto mb-4">
            <AnimatePresence mode='wait'>
                <motion.img
                    key={state.mood}
                    src={currentFace}
                    alt="Lucky"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
            </AnimatePresence>
            {state.mood === 'happy' && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Simple CSS or SVG confetti could go here */}
                    <div className="text-4xl absolute top-0 left-0">✨</div>
                    <div className="text-4xl absolute top-0 right-0">🎉</div>
                </motion.div>
            )}
        </div>
    );
}
