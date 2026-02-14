import React from 'react';
import { useAppState } from '../context/AppState';
import { motion } from 'framer-motion';

export function MoodMeter() {
    const { state } = useAppState();

    // Color changes based on score
    const getColor = (score) => {
        if (score < 30) return 'bg-red-500'; // Hangry
        if (score < 70) return 'bg-yellow-400'; // Neutral
        return 'bg-green-500'; // Happy
    };

    return (
        <div className="w-full max-w-md mx-auto mt-4 p-4 bg-white rounded-xl shadow-lg border-2 border-gray-200">
            <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-gray-700">Lucky's Mood</span>
                <span className="text-sm font-mono">{state.moodScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden relative border border-gray-300">
                <motion.div
                    className={`h-full ${getColor(state.moodScore)}`}
                    initial={{ width: "50%" }}
                    animate={{ width: `${state.moodScore}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                />
                {/* Face indicator moving with the bar could be added here */}
            </div>
            <p className="text-center text-xs text-gray-500 mt-2 italic">
                {state.moodScore < 30 ? "WARNING: LUCKY IS HANGRY!" : "Keep him happy!"}
            </p>
        </div>
    );
}
