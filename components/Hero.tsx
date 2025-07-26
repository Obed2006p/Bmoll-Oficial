
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Use the specific "Detrás de Cámaras" video for a consistent, curated hero background.
    const videoId = 'LncQmAuL2F4'; 
    const imageUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    // Preload image to improve loading experience
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setBackgroundImage(imageUrl);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-gray-900 overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 animate-kenburns"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          opacity: backgroundImage ? 1 : 0,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}>
          CONECTA CON NUESTRO MUNDO
        </h1>
        
        {/* Logo moved and resized to not obstruct background image content */}
        <img 
          src="https://yt3.googleusercontent.com/mEOl30uM8e5c7Za7rQNkrjrlTnCUjIvGeVXzt5epyBlbaFBqZEht0vqJS7ZZwWrkjDcqEOxqqA=s160-c-k-c0x00ffffff-no-rj" 
          alt="Logo de B-MOLL"
          className="w-32 h-32 rounded-full mx-auto my-6 shadow-2xl border-4 border-white/20"
        />

        <a 
          href="#videos" 
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/50"
        >
          Empezar a Explorar
        </a>
      </div>
    </section>
  );
};

export default Hero;