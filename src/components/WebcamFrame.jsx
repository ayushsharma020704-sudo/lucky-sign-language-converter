import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { useHandRecognition } from '../hooks/useHandRecognition';
import { Camera, CameraOff } from 'lucide-react';

const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "user"
};

export function WebcamFrame() {
    const webcamRef = useRef(null);
    const { model, loading, detect } = useHandRecognition();
    const loopRef = useRef();
    const [isCameraOn, setIsCameraOn] = useState(false);

    useEffect(() => {
        const loop = async () => {
            if (
                isCameraOn &&
                webcamRef.current &&
                webcamRef.current.video &&
                webcamRef.current.video.readyState === 4 &&
                model
            ) {
                await detect(webcamRef.current.video);
            }
            loopRef.current = requestAnimationFrame(loop);
        };

        if (isCameraOn && !loading && model) {
            loop();
        }

        return () => {
            if (loopRef.current) cancelAnimationFrame(loopRef.current);
        };
    }, [loading, model, detect, isCameraOn]);

    const toggleCamera = () => {
        setIsCameraOn(!isCameraOn);
    };

    return (
        <div className="relative border-4 border-yellow-400 rounded-lg overflow-hidden shadow-2xl bg-black min-h-[480px] flex flex-col items-center justify-center">
            {/* Loading Overlay */}
            {isCameraOn && loading && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10 text-white font-bold">
                    Loading AI Model...
                </div>
            )}

            {/* Start/Stop Button Overlay */}
            <div className="absolute bottom-4 z-20">
                <button
                    onClick={toggleCamera}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white shadow-lg transform transition-transform hover:scale-105 ${isCameraOn ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
                >
                    {isCameraOn ? <><CameraOff size={20} /> Stop Camera</> : <><Camera size={20} /> Start Translation</>}
                </button>
            </div>

            {isCameraOn ? (
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    width={640}
                    height={480}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="transform scale-x-[-1] w-full h-full object-cover"
                />
            ) : (
                <div className="text-white text-center p-8">
                    <Camera size={64} className="mx-auto mb-4 text-gray-500" />
                    <h2 className="text-2xl font-bold mb-2">Camera is Off</h2>
                    <p className="text-gray-400">Click the button below to start translating signs!</p>
                </div>
            )}
        </div>
    );
}
