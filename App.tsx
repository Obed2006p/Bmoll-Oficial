
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import MerchSection from './components/MerchSection';
import MusicSection from './components/MusicSection';
import Footer from './components/Footer';
import { CloseIcon } from './components/icons';

const VideoModal: React.FC<{ videoId: string; onClose: () => void }> = ({ videoId, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl aspect-video bg-black rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute -top-3 -right-3 z-10 bg-white text-black rounded-full p-2 hover:scale-110 transition-transform"
          aria-label="Cerrar video"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const handleVideoSelect = (videoId: string) => {
    setSelectedVideoId(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideoId(null);
  };

  return (
    <div className="bg-gray-900">
      <Header />
      <main>
        <Hero />
        <VideoSection onVideoSelect={handleVideoSelect} />
        <MerchSection />
        <MusicSection />
      </main>
      <Footer />

      {selectedVideoId && <VideoModal videoId={selectedVideoId} onClose={handleCloseModal} />}
    </div>
  );
};

export default App;