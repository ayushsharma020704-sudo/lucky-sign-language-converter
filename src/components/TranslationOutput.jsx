import React, { useEffect, useState } from 'react';
import { useAppState } from '../context/AppState';
import { VOICES } from '../utils/assets';
import { Volume2, VolumeX } from 'lucide-react';

export function TranslationOutput() {
    const { state, dispatch, ACTIONS } = useAppState();
    const [enabled, setEnabled] = useState(true);

    useEffect(() => {
        if (state.lastTranslation && enabled) {
            speak(state.lastTranslation);
        }
    }, [state.lastTranslation]);

    const speak = (text) => {
        if (!window.speechSynthesis) return;

        // Cancel previous speech to avoid queue buildup
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const voiceSettings = VOICES[state.voice.toUpperCase()] || VOICES.ROBOT;

        utterance.pitch = voiceSettings.pitch;
        utterance.rate = voiceSettings.rate;

        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border-4 border-blue-400 min-h-[150px] flex flex-col items-center justify-center relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <button
                onClick={() => setEnabled(!enabled)}
                className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100"
            >
                {enabled ? <Volume2 className="text-blue-500" /> : <VolumeX className="text-gray-400" />}
            </button>

            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-bold">Translation</h3>
            <div className="text-4xl font-black text-gray-800 text-center animate-pulse">
                {state.lastTranslation || "..."}
            </div>
        </div>
    );
}
