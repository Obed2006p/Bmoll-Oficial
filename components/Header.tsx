import React from 'react';
import { YouTubeIcon, InstagramIcon, SpotifyIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-lg shadow-indigo-500/10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="flex items-center space-x-3 text-xl font-bold">
          <img src="https://yt3.googleusercontent.com/mEOl30uM8e5c7Za7rQNkrjrlTnCUjIvGeVXzt5epyBlbaFBqZEht0vqJS7ZZwWrkjDcqEOxqqA=s160-c-k-c0x00ffffff-no-rj" alt="B-MOLL Logo" className="h-10 w-10 rounded-full" />
          <span className="text-red-500 hover:text-red-400 transition-colors tracking-wider">B-MOLL</span>
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#videos" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Videos</a>
          <a href="#tienda" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Tienda</a>
          <a href="#musica" className="text-gray-300 hover:text-indigo-400 transition-colors font-medium">Música</a>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
            <YouTubeIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Spotify" className="text-gray-400 hover:text-white transition-colors">
            <SpotifyIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;