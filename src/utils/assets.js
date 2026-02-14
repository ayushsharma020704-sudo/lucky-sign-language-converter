import faceHappy from '../assets/image_0.png';
import faceNeutral from '../assets/image_1.png';

export const LUCKY_ASSETS = {
    faces: {
        neutral: faceNeutral,
        happy: faceHappy,
        thinking: faceNeutral, // Re-use neutral for now, or add an overlay later
        confused: faceNeutral, // Could apply CSS filter for confusion
        hangry: faceNeutral,   // Could apply CSS filter/tint for hangry
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
