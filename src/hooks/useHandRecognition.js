import { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import { GestureEstimator } from 'fingerpose';
import { Gestures } from '../utils/gestures';
import { useAppState } from '../context/AppState';

export function useHandRecognition() {
    const { dispatch, ACTIONS } = useAppState();
    const [model, setModel] = useState(null);
    const [loading, setLoading] = useState(true);
    const requestRef = useRef();

    useEffect(() => {
        const loadModel = async () => {
            console.log("Loading Handpose model...");
            try {
                await tf.ready();
                const net = await handpose.load();
                setModel(net);
                setLoading(false);
                console.log("Handpose model loaded.");
            } catch (err) {
                console.error("Failed to load handpose model", err);
            }
        };
        loadModel();
    }, []);

    const detect = async (video) => {
        if (!model || !video || video.readyState !== 4) return;

        // Detect hand
        const hand = await model.estimateHands(video);

        if (hand.length > 0) {
            // Estimate gestures
            const knownGestures = Object.values(Gestures);
            const estimator = new GestureEstimator(knownGestures);

            const estimation = await estimator.estimate(hand[0].landmarks, 8.0); // Higher confidence for alphabet

            if (estimation.gestures.length > 0) {
                // Find gesture with highest confidence
                const bestGesture = estimation.gestures.reduce((p, c) => {
                    return (p.score > c.score) ? p : c;
                });

                if (bestGesture.score > 8.5) {
                    console.log("Detected:", bestGesture.name);
                    dispatch({ type: ACTIONS.SET_TRANSLATION, payload: bestGesture.name });
                    dispatch({ type: ACTIONS.UPDATE_MOOD_SCORE, payload: 2 }); // Small boost
                    dispatch({ type: ACTIONS.SET_MOOD, payload: 'happy' });
                }
            }
        } else {
            // No hand detected
        }
    };

    return { model, loading, detect };
}
