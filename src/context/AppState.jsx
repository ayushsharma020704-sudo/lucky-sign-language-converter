import React, { createContext, useContext, useState, useReducer } from 'react';

// Initial State
const initialState = {
    mood: 'neutral', // neutral, happy, confused, thinking, hangry
    moodScore: 50,   // 0-100
    isListening: false,
    lastTranslation: '',
    voice: 'Robot', // Robot, Alien, etc.
};

// Actions
const ACTIONS = {
    SET_MOOD: 'SET_MOOD',
    UPDATE_MOOD_SCORE: 'UPDATE_MOOD_SCORE',
    SET_LISTENING: 'SET_LISTENING',
    SET_TRANSLATION: 'SET_TRANSLATION',
    SET_VOICE: 'SET_VOICE',
};

// Reducer
function appReducer(state, action) {
    switch (action.type) {
        case ACTIONS.SET_MOOD:
            return { ...state, mood: action.payload };
        case ACTIONS.UPDATE_MOOD_SCORE:
            const newScore = Math.min(100, Math.max(0, state.moodScore + action.payload));
            // Derived mood logic could go here or in a hook
            return { ...state, moodScore: newScore };
        case ACTIONS.SET_LISTENING:
            return { ...state, isListening: action.payload };
        case ACTIONS.SET_TRANSLATION:
            return { ...state, lastTranslation: action.payload };
        case ACTIONS.SET_VOICE:
            return { ...state, voice: action.payload };
        default:
            return state;
    }
}

const AppContext = createContext();

export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const value = { state, dispatch, ACTIONS };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
    return useContext(AppContext);
}
