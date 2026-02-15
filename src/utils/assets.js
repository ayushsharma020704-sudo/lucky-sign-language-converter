// Assets utility
// Mapping user provided images
import luckyCalm from '../assets/lucky_calm.png';
import luckyExcited from '../assets/lucky_excited.png';

export const LUCKY_ASSETS = {
    faces: {
        neutral: luckyCalm,
        happy: luckyExcited,
        thinking: luckyCalm,
        confused: luckyCalm, // Fallback to calm as confused image is missing
        hangry: luckyCalm,   // Fallback to calm
    },
    sounds: {
        success: '/sounds/success.mp3',
        error: '/sounds/error.mp3',
        confetti: '/sounds/confetti.mp3',
    }
};

export const VOICES = {
    ROBOT: { name: 'Robot', pitch: 0.5, rate: 0.8 },
    ALIEN: { name: 'Alien', pitch: 1.5, rate: 1.2 },
    SQUEAKY: { name: 'Squeaky', pitch: 1.8, rate: 1.1 },
    GRUMPY: { name: 'Grumpy', pitch: 0.3, rate: 0.7 },
};
