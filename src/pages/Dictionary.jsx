import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import aslChart from '../assets/asl_chart.jpg';

export default function Dictionary() {
    const [activeTab, setActiveTab] = useState('guide');

    const slangTerms = [
        { term: "Face Palm", definition: "When Lucky makes a bad translation." },
        { term: "Jazz Hands", definition: "Used when you successfully crash the app (just kidding)." },
        { term: "The 'What?'", definition: "Shrugging shoulders rapidly because the camera is blurry." },
    ];

    const standardTerms = [
        { term: "A - Z", definition: "The standard alphabet. Check the Visual Guide tab!" },
        { term: "Numbers", definition: "1, 2, 3... infinite." },
    ];

    return (
        <div className="min-h-screen bg-yellow-50 p-8">
            <Link to="/" className="inline-flex items-center text-blue-600 font-bold mb-6 hover:underline">
                <ArrowLeft className="mr-2" /> Back to Lucky
            </Link>

            <h1 className="text-4xl font-black text-center text-yellow-600 mb-8">Sign Dictionary & Guide</h1>

            <div className="max-w-4xl mx-auto">
                <div className="flex justify-center gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('guide')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'guide' ? 'bg-green-500 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                        Visual Guide (A-Z)
                    </button>
                    <button
                        onClick={() => setActiveTab('slang')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'slang' ? 'bg-yellow-400 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                        Sign Slang
                    </button>
                    <button
                        onClick={() => setActiveTab('standard')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'standard' ? 'bg-blue-400 text-white shadow-lg scale-105' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                        Standard Terms
                    </button>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-xl border-4 border-yellow-200">
                    {activeTab === 'guide' && (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">ASL Alphabet Reference</h2>
                            <p className="text-gray-600 mb-6">Master these hand signs to chat with Lucky!</p>
                            <div className="relative group">
                                <img
                                    src={aslChart}
                                    alt="ASL Alphabet Chart"
                                    className="w-full rounded-xl shadow-inner border-2 border-gray-100"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-xl pointer-events-none" />
                            </div>
                            <div className="mt-8">
                                <Link to="/" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg">
                                    Practice Now with Camera!
                                </Link>
                            </div>
                        </div>
                    )}

                    {activeTab === 'slang' && (
                        <div className="space-y-4">
                            {slangTerms.map((item, i) => (
                                <div key={i} className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                                    <h3 className="text-xl font-bold text-gray-800">{item.term}</h3>
                                    <p className="text-gray-600 italic">{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'standard' && (
                        <div className="space-y-4">
                            {standardTerms.map((item, i) => (
                                <div key={i} className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                                    <h3 className="text-xl font-bold text-gray-800">{item.term}</h3>
                                    <p className="text-gray-600 italic">{item.definition}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
