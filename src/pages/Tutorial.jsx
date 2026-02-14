import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Tutorial() {
    const lessons = [
        { sign: "Thumbs Up", desc: "Means 'Good Job' or 'Yes'. Make a fist and stick your thumb up!" },
        { sign: "Open Hand", desc: "Means 'Hello' or 'Stop'. Show your palm with fingers spread." },
        { sign: "Victory", desc: "Means 'Peace' or 'Two'. Index and middle fingers up, others curled." },
        { sign: "Pointing Up", desc: "Means 'Look up' or 'One'. Just the index finger!" },
    ];

    return (
        <div className="min-h-screen bg-purple-50 p-8">
            <Link to="/" className="inline-flex items-center text-blue-600 font-bold mb-6 hover:underline">
                <ArrowLeft className="mr-2" /> Back to Lucky
            </Link>

            <h1 className="text-4xl font-black text-center text-purple-600 mb-8">Teach Me, Lucky!</h1>

            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                {lessons.map((l, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-100 hover:scale-105 transition-transform">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{l.sign}</h2>
                        <p className="text-gray-600">{l.desc}</p>
                        <div className="mt-4 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                            Top Secret Image Placeholder
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
