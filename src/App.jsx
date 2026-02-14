import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppState';
import { WebcamFrame } from './components/WebcamFrame';
import { LuckyAvatar } from './components/LuckyAvatar';
import { MoodMeter } from './components/MoodMeter';
import { TranslationOutput } from './components/TranslationOutput';
import Tutorial from './pages/Tutorial';
import Dictionary from './pages/Dictionary';

function MainLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8 font-sans">
            <header className="mb-8 text-center relative">
                <div className="absolute top-0 right-0 gap-4 flex">
                    <Link to="/tutorial" className="text-blue-600 font-bold hover:underline">Teach Me!</Link>
                    <Link to="/dictionary" className="text-blue-600 font-bold hover:underline">Dictionary & Guide</Link>
                </div>
                <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-sm rotate-[-2deg] inline-block">
                    LUCKY
                </h1>
                <p className="text-xl text-gray-600 mt-2 font-semibold">The Sassy Sign Translator</p>
            </header >

            <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Left Column: Input */}
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded-3xl shadow-2xl border-b-8 border-r-8 border-gray-200">
                        <WebcamFrame />
                    </div>
                </div>

                {/* Right Column: Output & Lucky */}
                <div className="space-y-6 flex flex-col justify-center">
                    <LuckyAvatar />
                    <MoodMeter />
                    <TranslationOutput />

                    {/* Placeholder for Voice Selection */}
                    <div className="bg-white p-4 rounded-xl shadow-md border-2 border-gray-100">
                        <label className="block text-sm font-bold text-gray-500 mb-2">Lucky's Voice</label>
                        <div className="flex gap-2">
                            {['Robot', 'Alien', 'Squeaky', 'Grumpy'].map(voice => (
                                <button key={voice} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 font-bold text-sm transition-colors">
                                    {voice}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}

function App() {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/tutorial" element={<Tutorial />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                </Routes>
            </Router>
        </AppProvider>
    );
}

export default App;
